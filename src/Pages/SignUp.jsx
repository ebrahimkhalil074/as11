import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import { auth } from "../config/firebase.config";



const SignUp = () => {
const{createUser}=useContext(AuthContext)
  
    const handelRegister =(e)=>{
        e.preventDefault()
        const form =e.target
        const name =form.name.value
        const email =form.email.value
        const photo =form.photo.value
        const password =form.password.value
        const newUser ={name,email,password}
        console.log(newUser);
        createUser(email,password)
    
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user);
            // ...
           
//update profile st
                      updateProfile(auth.currentUser, {
                        displayName: name, photoURL: photo
                      }).then(() => {
                        // Profile updated!
                        // ...
                      }).catch((error) => {
                        console.log(error);
                      });
//update profile ed
//success msg st
Swal.fire({
    icon: 'success',
    title: 'success full...',
    text: 'Your Account created successfully!',
  })
//success msg en
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log(errorCode,errorMessage);
            Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: `${errorMessage}`,
                        
                      })
          });
          form.reset()
          }  
   
    return (
        <div>
        <div className="hero min-h-screen bg-base-200 bg-img relative">
      <div className="mx-auto h-[40vh] absolute top-10   bg-sky-500 w-[80%] bg-img4 ">
      
      <div className="w-[50%]  mx-auto bg-gray-50  shadow-2xl b rounded-xl relative top-32">
   <form onSubmit={handelRegister} className="card-body">
   <h1 className="text-2xl text-center text-[#6811ff] font-bold">Sign Up !</h1>
   <div className="flex justify-between gap-4">
   <div className="form-control flex-1">
       <label className="label">
         <span className="label-text">Name</span>
       </label>
       <input type="text" name='name' placeholder="name" className="input input-bordered" required />
     </div>
     <div className="form-control flex-1">
     
       <label className="label">
         <span className="label-text">Email</span>
       </label>
       <input type="email" name='email' placeholder="email" className="input input-bordered" required />
     </div>
   </div>
     <div className="form-control">
     
       <label className="label">
         <span className="label-text">Photo Url</span>
       </label>
       <input type="text" name='photo' placeholder="photo url" className="input input-bordered" required />
     </div>
     <div className="form-control">
       <label className="label">
         <span className="label-text"> Confirm Password</span>
       </label>
       <input type="password"
       name='password' placeholder="password" className="input input-bordered" required />
       <label className="label">
         <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
       </label>
     </div>
     <div className="form-control">
       <button type='submit' className="btn text-white hover:bg-black bg-[#6811ff]">Sign In</button>
      <div className="text-center space-y-5 mt-4">
      <h2 className="text-xl">Or SignUp With</h2>
       <div className="flex justify-center gap-5 text-1xl  font-bold">
       <BsFacebook className="text-blue-600"></BsFacebook>
       <BsGoogle className="text-orange-400"></BsGoogle>
       <BsGithub className="text-[#ff3811]"></BsGithub>
       </div>
       <h4 className="text-xl">Already have an account <Link to='/signIn' className="text-[#6811ff] font-bold text-1xl">Sign In</Link></h4>
      </div>
     </div>
   </form>
 </div>
      </div>
</div> 
     </div>
 
    );
};

export default SignUp;