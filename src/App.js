import React, { useContext, useEffect } from "react";
import Header from "./componets/Header";
import Blogs from "./componets/Blogs";
import Pagination from "./componets/Pagination";
import { AppContext } from "./context/AppContext";
import './App.css'
export default function App() {
  const {fetchBlogPosts}=useContext(AppContext);
  useEffect(()=>{
    fetchBlogPosts();
  },[]);
  return <div className="w-full flex flex-col justify-center items-center">
         <Header/>
         <Blogs/>
         <Pagination/>
  </div>;
}
