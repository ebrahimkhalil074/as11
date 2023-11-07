import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const WishCard = ({wish,refetch}) => {
    const{image,title,category,short_dis,_id}= wish||{}


const handelRemove = ()=>{
console.log(_id);
Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });

      axios.delete(`http://localhost:3000/wishes/${_id}`)
      .then(response => {
        console.log(`Deleted post with ID ${_id}`);
        refetch()
      })
      .catch(error => {
        console.error(error);
      });

    }
  });



}


    return (
        <div>
                <div className="card card-side bg-base-100 shadow-xl">
  <figure><img className="w-[300px] h-[200px]" src={image} alt="img"/></figure>
  <div className="card-body">
    <h2 className="card-title">{category}</h2>
    <p>{title}</p>
    <p>{short_dis}</p>
    <div className="flex h-full justify-end   gap-10">
      <Link to={`/blogdetails/${_id}`}><button className="btn w-full bg-sky-400">Details</button></Link>
      <button onClick={()=>handelRemove(_id)} className="btn bg-sky-400">Remove</button>
      </div>
  </div>
</div> 
        </div>
    );
};

export default WishCard;