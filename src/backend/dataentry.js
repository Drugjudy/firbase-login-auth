import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firbase/firebase";
import { useNavigate } from "react-router-dom";


function Dataentry({ isAuth }) {
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");


  const postsCollectionRef = collection(db, "info");
  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      info,
      img,
      price,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/data");
  };

 

  useEffect(() => {
    if (!isAuth) {
      navigate("");
    }
  }, []);

  return (
   <>

                               <input className="form-control" type="text" name="name" placeholder="Title" required onChange={(event) => {
               setTitle(event.target.value);
            }} />
                      
                            
                                <textarea onChange={(event) => {
              setInfo(event.target.value);
            }} className="text" type="email" name="email" placeholder="Short intro" required />
                                 
            
                               <input className="form-control" type="text" name="name" placeholder="price" required onChange={(event) => {
               setPrice(event.target.value);
            }} />                     

                      
                              <input onChange={(event) => {
              setImg(event.target.value);
            }} className="form-control" type="text" name="password" placeholder="ImgURL" required /> 
                               <div className="valid-feedback"></div>
                               <div className="invalid-feedback"></div>
                          
                  

                          
                                <button onClick={createPost} id="submit" type="submit" className="btn btn-primary">save</button>
                            
</>
  );
}

export default Dataentry;