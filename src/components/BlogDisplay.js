import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";

const BlogDisplay = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const blogref = collection(db, "Blogs");
    const q = query(blogref, orderBy("createdat", "desc"));
    onSnapshot(q, (snapshot) => {
      const allBlogs = snapshot.docs.map((docs) => ({
        id: docs.id,
        ...docs.data(),
      }));
      setBlogs(allBlogs);
    });
  }, []);

  return (
    <div className="contain">
      {blogs.length === 0 ? (
        <p>
          <h1 className="noblog">No Blogs Found</h1>
        </p>
      ) : (
        blogs.map((blog) => (
          <div className="blog-cont" key={blog.id}>
            <div className="section-1">
              <p className="title">{blog.title}</p>
              <p className="creator">posted by : {blog.createdby}</p>
            </div>

            <hr />

            <div className="section-2">
              <p>
                {" "}
                <img src={blog.imgurl} alt="" />
                {blog.description}
              </p>
            </div>

            <div className="section-3">
              <p>
                posted on-
                {new Date(blog.createdat).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default BlogDisplay;