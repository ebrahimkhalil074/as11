import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import WishCard from "../components/WishCard";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Wishlist = () => {
const{user} =useContext(AuthContext)
    const getWish  = async()=>{
        const res = await axios.get(`https://ebrahim-blog0987665.vercel.app/wishes?email=${user?.email}`)
        console.log(res);
        
    
       return res
        }
       
      const {isLoading,isError,data,refetch,} = useQuery({ queryKey: ['wish'], queryFn: getWish })

if(isLoading){
<h2>loading....</h2>
}
    return (
        <div>
      {
        data?.data?.map(wish =><WishCard key={wish._id}wish={wish} refetch={refetch}></WishCard>)
      }
        </div>
    );
};

export default Wishlist;