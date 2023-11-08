import Swal from "sweetalert2";

const Newsletter = () => {

    const sendEmail =(e)=>{
    e.preventDefault()

    Swal.fire({
        icon: 'success',
        title: 'success full...',
        text: 'Thank you for subscribing to our MultiverseChronicles!',
      })
    }
    return (
        
        <div className="flex flex-col md:flex-row lg:flex-row">
        <div className="flex-1">
          <img className="w-full h-full" src={"https://i.ibb.co/r6vztfQ/images-10.jpg"} alt="" />  
        </div>
        <div className="flex-1 relative bg-pic text-white">  
       
       <div className="w-full h-full bg-gradient-to-r from-[#0a0909] to-[rgba(21,21,21,0)] absolute top-0 ">
      <div className="flex justify-center items-center h-full w-full text-center">
        <div className="space-y-5">
        <h1 className="text-5xl font-bold text-sky-500">Subscribe to <br /> our  MultiverseChronicles </h1>
            <h3 className="text-2xl">Subscribe to out  MultiverseChronicles and stay updated</h3>
       <form onSubmit={sendEmail} className=" flex gap-2">
       <input type="email" placeholder="Type Your Email" className="input input-bordered input-accent w-full  flex-1"required />
        <button type="submit" className="btn  btn-success ">Submit</button>  
       </form>
        
        </div>
      </div>
       </div>
        </div>

        </div>
    );
};

export default Newsletter;