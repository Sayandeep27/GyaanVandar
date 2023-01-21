import React, { useState } from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../firebaseConfig";

const Addblog = () => {
  const [createdby, setCreatedby] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imgurl, setImgurl] = useState("");
  const [createdat, setCreatedat] = useState(
    Timestamp.now().toDate().toString()
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title === "" || description === "" || createdby === "") {
      alert("Must fill everything");
      return;
    }

    await addDoc(collection(db, "Blogs"), {
      title,
      createdat,
      createdby,
      description,
      imgurl,
    })
      .then(() => {
        alert("Success!");
      })
      .catch((err) => {
        alert(err.message);
      });

    //setTitle("");
    setCreatedat("");
    setCreatedby("");
    setTitle("");
    setImgurl("");

    const form = document.getElementById("my_form");
    form.reset();
  };

  return (
    <div className="contain">
      <div className="addblog-form">
        <p>Add a new Blog</p>
        <form onSubmit={handleSubmit} id="my_form">
          <label>Name</label>
          <input
            name="username"
            placeholder="Enter your name"
            type="text"
            onChange={(e) => {
              setCreatedby(e.target.value);
            }}
          />
          <br />

          <label>Blog Title</label>
          <input
            name="title"
            placeholder="Enter Blog title"
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <br />

          <label>Blog Description</label>
          <textarea
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            type="text"
            placeholder="Write your article"
          ></textarea>
          <br />

          <label>Paste Image link</label>
          <input
            name="image"
            placeholder="Paste image url"
            type="text"
            onChange={(e) => {
              setImgurl(e.target.value);
            }}
          />

          <div className="btn-cotainer">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addblog;