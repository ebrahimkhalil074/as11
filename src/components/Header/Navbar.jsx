import { Link, NavLink } from "react-router-dom";
import {AiFillHome } from "react-icons/ai";
import { IoIosCreate, IoMdListBox } from "react-icons/io";
import { TbArticleFilledFilled, TbLogin2 } from "react-icons/tb";
import {  } from "react-icons/bi";
import { FcList } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import icon from '../../assets/1.jpg'
// import { VscSignIn } from "react-icons/vsc";


const Navbar = () => {
  const {user,logout}=useContext(AuthContext)
  console.log(user);
const handeldelete=()=>{
  logout()
  .then((result) => {
    console.log(result);
    axios.post('http://localhost:3000/logout',user,{withCredentials:true})
    .then(res =>console.log(res.data))
  }).catch((error) => {
    console.log(error);
  });
}

    const navLinks=<div className='flex gap-4'>
    <li><NavLink to='/'> <AiFillHome className="text-sky-400" />Home</NavLink></li>
    <li><NavLink to='/addBlog'> <IoIosCreate className="text-sky-400" /> Add Blog</NavLink></li>
    <li><NavLink to='/allBlog'><FcList className="text-sky-400"/> All Blog</NavLink></li>
     <li><NavLink to='/featuredBlog'>< TbArticleFilledFilled className="text-sky-400"/> Featured Blog</NavLink></li>
   {user?.email && <li><NavLink to='/wishlist'>< IoMdListBox className="text-sky-400"/> Wishlist</NavLink></li>}
    <li><NavLink to='/signIn'>< TbLogin2 className="text-sky-400"/> Sign In</NavLink></li>
    <li><NavLink to='/signUp'> < TbLogin2 className="text-sky-400"/>Sign Up</NavLink></li>
        </div>
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start ">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
  <img className="w-[100px] h-16" src={'https://i.ibb.co/Y7MbYJs/R-11.jpg'} alt="" />
  <h3 className="text-2xl"><img className="w-[200px] "src={icon}/>Chronicles</h3>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
         {
          user&& <img src={user?.photoURL} />
         }
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
          </a>
        </li>
        <li><a>Settings</a></li>
       {
        user?.email ? <li onClick={handeldelete}><Link to=''>Logout</Link></li>:<li><a>LogIn</a></li>
       }
      </ul>
    </div>
</div>
        </div>
    );
};

export default Navbar;