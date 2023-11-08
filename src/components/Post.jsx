import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Post = ({post}) => {
    const{image,short_dis,title,category,_id,date}=post

    const {user}=useContext(AuthContext)
  
    const handelWishlist =()=>{
      const blog ={
        image,short_dis,title,category,_id, email:user?.email
      }
      fetch("http://localhost:3000/wishes",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(blog)
         }) 
        .then(res => res.json())
        .then(data =>{
           console.log(data);
           if (data.acknowledged=== true) {
            Swal.fire({
              icon: 'success',
              title: 'success full...',
              text: 'Your Blog Stored WishList successfully!',
            })
           }
           
        })

}

    return (
        <div >
   <div className="relative flex flex-col text-gray-700 bg-white shadow-md  rounded-xl bg-clip-border">
  <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
    <img
    className="w-full h-full"
      src={image}
      alt="img-blur-shadow"
      layout="fill"
    />
  </div>
  <div className="p-6">
    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      {category}
    </h5>
    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      {title}
    </h5>
    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
      {short_dis}
    </p>
    <div className="flex items-center justify-between p-6">
   
      <h1>{user?.displayName}</h1>
    
    <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
    {date}
    </p>
   
  </div>
  <div className="flex gap-4">
      <Link to={`/blogdetails/${_id}`}><button className="btn w-full bg-sky-400">Details</button></Link>
      <button onClick={handelWishlist} className="btn bg-sky-400 flex-1">Wish List</button>
      </div>
  </div>

</div> 
        </div>
    );
};

export default Post;