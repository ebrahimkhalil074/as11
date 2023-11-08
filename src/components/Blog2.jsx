

import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";


const Blog2 = ({blog2}) => {
  const {user} =useContext(AuthContext)
    const{image,short_dis,title,category,_id}=blog2
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
        <div>
           <div className="card card-side bg-base-100 shadow-xl">
  <figure><img className="w-[300px] h-[300px]" src={image} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title text-2xl ">{category}</h2>
    <p className="text-xl ">{title}</p>
    <p className="text-xl ">{short_dis}</p>
    <div className="card-actions  justify-end">
      <div className="flex h-full  flex-col justify-around gap-10">
      <Link to={`/blogdetails/${_id}`}><button className="btn w-full bg-sky-400">Details</button></Link>
      <button onClick={handelWishlist} className="btn bg-sky-400">Wish List</button>
      </div>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Blog2;