import { useQuery, } from "@tanstack/react-query";
import axios from "axios";
import Blog from "../components/Header/Blog";
import {  useState } from "react";
import Slider from "../components/Slidder";


const AllBlog = () => {
  const [selectedTitle, setSelectedTitle] = useState('');

  const [selectedCategory, setSelectedCategory] = useState('');
   
  const getBlogs = async()=>{
    const res = await axios.get('http://localhost:3000/blogs',{withCredentials:true})
    console.log(res);

   return res
    }
   
  const {isLoading,isError,data,refetch,} = useQuery({ queryKey: ['blogs'], queryFn: getBlogs })

 

  console.log(data);
 
  

if(isLoading) {
  <h1>loading ...</h1>
}


const handleCategoryChange = (e) => {
  setSelectedCategory(e.target.value);
};
const handletitleChange = (e) => {
  setSelectedTitle(e.target.value);
  console.log(e.target.value);
};

 const filteredCategory =  data?.data.filter(course => course.category === selectedCategory &&
  course.title.toLowerCase().includes(selectedTitle.toLowerCase()));
    return (

        <div>
           <Slider img={data?.data[0]?.image}img1={data?.data[1]?.image} img2={data?.data[2]?.image} img3={data?.data[4]?.image} img4={data?.data[7]?.image} img5={data?.data[9]?.image}></Slider> 
          <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-wrap border-2 font-bold text-2xl justify-between">
          <select  value={selectedCategory} onChange={handleCategoryChange}>
        <option value="Science & Technology">Science & Technology</option>
        <option value="Health & Wellness">Health & Wellness</option>
        <option value="Lifestyle & Gardening">Lifestyle & Gardening</option>
        <option value="Culture & Lifestyle">Culture & Lifestyle</option>
        <option value="Psychology & Self-improvement">Psychology & Self-improvement</option>
        <option value="Photography & Nature">Photography & Nature</option>
      </select>
      <input type="text" onChange={handletitleChange} placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />
          </div>
         {selectedCategory ? 
          filteredCategory?.map((blog,i) => <Blog key={i}blog={blog}></Blog>)
          : 
          
          data?.data?.map((blog,i) => <Blog key={i}blog={blog}></Blog>)
           }

        </div>
        </div>
    );
};

export default AllBlog;