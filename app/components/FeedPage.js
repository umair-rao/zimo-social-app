'use client'

import React, { useEffect, useState } from "react";
import { storage } from "../Firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const FeedPage = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);

  const imageListRef = ref(storage, 'images/')
  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageList((prev) => [...prev, url])
      })
      alert("Image Uploaded");
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    uploadImage();
  };

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
            setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);


  return (
    <div className="h-screen bg-orange-200">
        <h1 className="text-2xl text-center pt-3 pb-3">Welcome to Zimo Social Media</h1>
      <div className="flex items-center justify-center h-52 bg-lime-200 border-2 border-slate-500">
        <form className="flex flex-col w-72 h-72 pt-16" onSubmit={handleSubmit}>
          <label htmlFor="text">Share your Thoughts:</label>
          {/* <input type="text" id="text" name="text" placeholder="Share your thoughts" required /> */}
          <br />
          <label htmlFor="image">Upload your memory:</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={(e) => {
              setImageUpload(e.target.files[0]);
            }}
            required
          />
          <br />
          <button
            className="bg-amber-500 w-16 rounded-md hover:bg-cyan-400"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="flex flex-col justify-center items-center">
        {imageList.map((url) => {
            return <img src={url} className="h-72 pt-5" alt="Uploaded Image" />
        })}
      </div>
    </div>
  );
};

export default FeedPage;
