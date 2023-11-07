
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactTable from '../components/RcactTable'


const FeaturedBlogs = () => {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
      // Fetch data from the API
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:3000/blogs'); // Replace with your API endpoint
          setTableData(response.data); // Assuming the API response is an array of data
        } catch (error) {
          console.error('Error fetching data: ', error);
        }
      };
  
      fetchData();
    }, []); //
const data =React.useMemo(()=>tableData,[tableData]);
const columns =React.useMemo(()=>[
    {
        Header: 'Blog Title',
        accessor: 'title', // 'name' should match the key in your data
      },
      {
        Header: 'Blog Owner',
        accessor: 'category', // 'age' should match the key in your data
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
      <p>Loading or no data available...</p>
    )}
  </div>
  );
    }

export default FeaturedBlogs;
