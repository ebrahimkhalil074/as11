import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import WishCard from "../components/WishCard";


const Wishlist = () => {

    const getWish  = async()=>{
        const res = await axios.get('http://localhost:3000/wishes')
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