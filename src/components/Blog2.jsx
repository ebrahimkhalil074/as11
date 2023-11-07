

import { Link } from "react-router-dom";


const Blog2 = ({blog2}) => {
    const{image,short_dis,title,category,_id}=blog2
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
      <button className="btn bg-sky-400">Wish List</button>
      </div>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Blog2;