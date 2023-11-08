import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Blog from "../components/Header/Blog";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Blog2 from "../components/Blog2";


const BlogDetails = () => {
const [com,setCom] =useState([])
console.log(com);
    const {user}=useContext(AuthContext)
   const{displayName,photoURL}=user
    const loader =useLoaderData()
    console.log(loader);
//
const getBlogs =()=>{
    const res =axios.get('http://localhost:3000/blogs',{withCredentials:true})
   return res
    }
   
  const {isLoading,isError,data,refetch,} = useQuery({ queryKey: ['blogs'], queryFn: getBlogs })

useEffect(()=>{
axios(`http://localhost:3000/blogs/${loader._id}`,{credentials:"include"})
.then(res => console.log(res.data?.data))
},[])
//
const {name, title,category,s_dis,long_dis,image,time,blog_email,date,_id:id,pic}=loader||{}
//


const handelCommentPost=(e)=>{
    e.preventDefault()
    const form =e.target
    const text = form.text.value 
const comment={text,photoURL,displayName,id}
    fetch(`http://localhost:3000/comment`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
          body:JSON.stringify(comment)
     }) 
    .then(res =>res.json())
    .then(data =>{
       console.log(data);
       
    })
    
}
////////////////////

useEffect(()=>{
   axios(`http://localhost:3000/comment`)
    .then( res=>setCom(res.data))
   

},[])

 const come=com.filter(text => text.id ==id)
console.log(come);
console.log(blog_email,user?.email);
    return (
        <div className="grid grid-cols-12">
        <div className="col-span-8 h-[100vh] gap-5 overflow-scroll" >
        <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
    <img
    className="w-full"
      src={image}
      alt="image"
    />
  </div>
  <div className="p-6">
    <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      Category:{category}
    </h4>
    <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
      Description:{long_dis}
    </p>
  </div>
  <div className="flex items-center justify-between p-6">
   <div className="flex gap-4 items-center">
   <img className="w-[100px] h-[100px] rounded-[50%]" src={pic} alt="" />
   <h1 className="text-2xl font-bold">{name}</h1>
   </div>
    <p className="block  font-sans text-xl antialiased font-normal leading-relaxed text-inherit">
    {date}
    </p>
  </div>

</div>
<div>
   <form onSubmit={handelCommentPost} >
   <h1 className="text-3xl font-bold text-sky-500">comment</h1>
<textarea className="textarea textarea-success w-full"name="text" placeholder="your comment please"></textarea>
{
  blog_email !== user?.email ? <button type="submit" className="btn btn-success" >Submit</button>:<Link to={`/update/${id}`}>:<button type="" className="btn btn-success">Update</button></Link>
  
}
{/* {
 blog_email && user?.email ? :'' 
} */}
   </form>
   <div className="">
   {
    come.map((montobo,i)=> <div className="w-full  flex gap-4 mt-6" key={i}>
<div className="p-4 ">
<img className="h-[70px] w-[100px] rounded-[50%]" src={montobo?.photoURL} alt="" />
</div>
<div  className=" bg-white shadow-2xl px-2 rounded-[20%] flex flex-col  justify-center">
  <h1 className="text-2xl font-semibold">{montobo?.displayName}</h1>
  <h1 className="text-xl text-left">{montobo?.text}</h1>
</div>
    </div>)
   }
   </div>
</div>

        </div>

        {/* // */}
        <div  className=" col-span-4 bg-sky-300 h-[100vh] gap-5 overflow-scroll">
        {
          data?.data?.map((blog2,i) => <Blog2 key={i}blog2={blog2}></Blog2>)
          }   
        </div> 
        </div>
    );
};

export default BlogDetails;