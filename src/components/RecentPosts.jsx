import { useEffect, useState } from "react";
import Post from "./Post";

const RecentPosts = () => {
const [data,setData]=useState()
const [dataLength,setDataLength]=useState(6)
    useEffect(()=>{
fetch('http://localhost:3000/blogs',{credentials:"include"})
.then(res => res.json())
.then(data =>setData(data) )
    },[])
    
   
    // const limitedData = data.slice(0, dataLength);
    return (
        <div>
             <div className="h-[15vh]">
             <h1 className="text-center text-4xl text-sky-500 font-mono">Recent Blog </h1>
             <h3 className="capitalize text-center text-2xl text-sky-500 font-mono">Latest blogs here read and enjoy</h3>
             </div>
            <div className="grid grid-cols-1 md:grid-rows-2 lg:grid-cols-3 gap-10">
           
           {
         data?.slice(0, dataLength).map(post => <Post key={post._id}post={post}></Post>)  
           }
       </div>
        </div>
    );
};

export default RecentPosts;