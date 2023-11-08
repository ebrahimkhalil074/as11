
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactTable from '../components/RcactTable'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import Skleton from '../components/Skeketon';


const FeaturedBlogs = () => {
    const [tableData, setTableData] = useState([]);
const[sliceData,setSliceData]=useState(10)
    useEffect(() => {
      // Fetch data from the API
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:3000/blogs/length'); // Replace with your API endpoint
          setTableData(response.data); // Assuming the API response is an array of data
        } catch (error) {
          console.error('Error fetching data: ', error);
        }
      };
  
      fetchData();
    }, []); //
    const ff=tableData.slice(0,sliceData)
    console.log(ff);
const data =React.useMemo(()=>ff,[ff]);
const columns =React.useMemo(()=>[
    {
        Header: 'Blog Title',
        accessor: 'title', // 'name' should match the key in your data
      },
      {
        Header: 'Blog Owner',
        accessor: 'name', // 'age' should match the key in your data
      },
      
      {
        Header: 'Profile Picture',
        accessor: 'pic',
        Cell: ({ cell: { value } }) => {
          return (
            <div>
              <img src={value} alt="Blog" style={{ width: '100px', height: '100px' }} />
            </div>
          );
        },
      },

]);

       


  return (
    <div>
      
    {tableData.length > 0 ? (
      <ReactTable columns={columns} data={data} />
    ) : (
   <div className='flex flex-wrap'>
    <Skleton></Skleton>
    <Skleton></Skleton>
    <Skleton></Skleton>
    <Skleton></Skleton>
    <Skleton></Skleton>
    <Skleton></Skleton>
   </div>
    )}
    
  </div>
  );
    }

export default FeaturedBlogs;
