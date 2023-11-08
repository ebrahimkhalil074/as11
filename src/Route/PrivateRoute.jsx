import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
import Skleton from "../components/Skeketon";






const PrivateRoute = ({children}) => {
    const location =useLocation()
    
    

const {user,loading}=useContext(AuthContext)
console.log(user);
if(loading){
return <div className='flex flex-wrap'>
<Skleton></Skleton>
<Skleton></Skleton>
<Skleton></Skleton>
<Skleton></Skleton>
<Skleton></Skleton>
<Skleton></Skleton>
</div>
}



if(user) {
    return children
}
else{
   return <Navigate state={location.pathname} to="/signIn"></Navigate>
}

   
};

export default PrivateRoute;