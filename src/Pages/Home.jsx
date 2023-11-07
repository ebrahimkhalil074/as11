import Newsletter from "../components/Newsletter";
import RecentPosts from "../components/RecentPosts";
import Slider from "../components/Slidder";


const Home = () => {
    return (
        <div>
             <Slider img={'https://i.ibb.co/NSPr4tQ/images-7.jpg'}img1={"https://i.ibb.co/6YS5DCN/download-13.jpg"} img2={"https://i.ibb.co/LCLqCPB/download-15.jpg"} img3={"https://i.ibb.co/zb4hwS8/how-to-learn-a-language-for-travel-7-steps.webp"} img4={"https://i.ibb.co/rvTK98V/download-20.jpg"} img5={"https://i.ibb.co/xYD9fZz/download-21.jpg"}></Slider> 
           <RecentPosts></RecentPosts>
           <Newsletter></Newsletter>
        </div>
    );
};

export default Home;