import { createContext, useState } from "react";


export const AppContext=createContext();
const baseUrl = "https://codehelp-apis.vercel.app/api/get-blogs";
export function  AppContextProvider({children}){
    const[loading,setLoading]=useState(false);
    const [posts,setPost]=useState([]);
    const[page,setPage]=useState(1);
    const[totalPages,setTotalPages]=useState(null);

    async function fetchBlogPosts(page=1){
        setLoading(true);
        try{
            const result=await fetch(`${baseUrl}?page=${page}`);
            const data=await result.json();
            setTotalPages(data.totalPages);
            setPage(data.page);
            setPost(data.posts);
        }
        catch(e){
            console.log("Error in fetching data");
            setPage(1);
            setPage([]);
            setTotalPages(null);
        }
        setLoading(false);
    }

    function handlePageChange(page){
        setPage(page);
        fetchBlogPosts(page);
    }

    const value ={
        posts,
        setPost,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange

    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}