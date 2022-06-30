import mongodb from "mongodb"
const ObjectId = mongodb.ObjectID
let courses

export default class coursesDAO {
  static async injectDB(conn) {
    if (courses) {
      return
    }
    try {
      courses = await conn.db(process.env.REST_NS).collection("name")
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in coursesDAO: ${e}`,
      )
    }
  }

  static async getcourses({
    filters = null,
    page = 0,
    coursesPerPage = 20,
  } = {}) {
    let query
    if (filters) {
      if ("title" in filters) {
        query = { $text: { $search: filters["title"] } }
      } else if ("price" in filters) {
        query = { "price": { $eq: filters["price"] } }
      } 
    }

    let cursor
    
    try {
      cursor = await courses
        .find(query)
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`)
      return { coursesList: [], totalNumcourses: 0 }
    }

    const displayCursor = cursor.limit(coursesPerPage).skip(coursesPerPage * page)

    try {
      const coursesList = await displayCursor.toArray()
      const totalNumcourses = await courses.countDocuments(query)

      return { coursesList, totalNumcourses }
    } catch (e) {
      console.error(
        `Unable to convert cursor to array or problem counting documents, ${e}`,
      )
      return { coursesList: [], totalNumcourses: 0 }
    }
  } }