import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home";
import AddBlog from "../Pages/AddBlog";
import AllBlog from "../Pages/AllBlog";
import FeaturedBlogs from "../Pages/FeaturedBlogs";
import Wishlist from "../Pages/Wishlist";
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";
import BlogDetails from "../Pages/BlogDetails";
import Update from "../Pages/Update";
import Error from "../Error";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Error></Error>,
      children:[
        {
          index:true ,
          element:<Home></Home> 
        },
        {
            path:'/addBlog',
             element:<AddBlog></AddBlog>
           },
           {
             path:'/allBlog',
             element:<AllBlog></AllBlog>
           },
           {
             path:'/featuredBlog',
             element:<FeaturedBlogs></FeaturedBlogs>
           },
           {
             path:'/wishlist',
             element:<Wishlist></Wishlist>
           },
   
           {
             path:'/blogdetails/:id',
             element:<PrivateRoute><BlogDetails></BlogDetails></PrivateRoute>,
            loader:({params})=>fetch(`https://blog-11-server-4bvi9ocsf-md-ebrahim-khalils-projects.vercel.app/blogs/${params.id}`)
           },
   {
    path:"/update/:id",
    element:<PrivateRoute><Update></Update></PrivateRoute>,
    loader:({params})=>fetch(`https://blog-11-server-4bvi9ocsf-md-ebrahim-khalils-projects.vercel.app/blogs/${params.id}`,{credentials:"include"})
   }
      ]
    },
    {
        path:'/signUp',
        element:<SignUp></SignUp>
      },
    {
        path:'/signIn',
        element:<SignIn></SignIn>
      }
  ]);

export default router;