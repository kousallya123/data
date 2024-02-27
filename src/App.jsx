import { useState,useEffect } from 'react'
import './App.css'
import { get, ref } from 'firebase/database';
import database from './firebase'
import Bg from './assets/bg.avif'
import { useLottie } from "lottie-react";
import noDataAnimation from './assets/no-data.json'


function App() {
  const [employees, setEmployees] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataRef = ref(database, '/');
        const snapshot = await get(dataRef);
        if (snapshot.exists()) {
          const data = Object.values(snapshot.val());
          setEmployees(data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
    fetchData();
  }, []);

  const handleSort = (option) => {
    if (sortOption === option) {
      // Toggle sortOrder if the same option is clicked again
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      // Set a new option and default sortOrder to 'asc'
      setSortOption(option);
      setSortOrder('asc');
    }
  };


 
  const sortedEmployees = employees[0]
    ? [...Object.values(employees[0])]
        .filter((employee) =>
          Object.values(employee).some((value) =>
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
          )
        )
        .sort((a, b) => {
          const aValue = sortOption ? a[sortOption] : null;
          const bValue = sortOption ? b[sortOption] : null;

          if (sortOrder === 'asc') {
            return aValue < bValue ? -1 : 1;
          } else {
            return bValue < aValue ? -1 : 1;
          }
        })
    : [];

  const sortOptions = ['name', 'city', 'age', 'position'];

  const options = {
    animationData: noDataAnimation,
    loop: true
  };

  const { View } = useLottie(options);

  return (
    <div className="containe min-h-[100vh] mx-auto p-4" style={{ backgroundImage: `url(${Bg})`,backgroundRepeat:'no-repeat',   backgroundSize: 'cover'}}>
    <div className="flex justify-between mb-4 items-center">
      <text className='text-lg text-black-400  '>Data from firebase</text>
      <div  className='flex justify-between mb-4 items-center'>
      <input
            type="text"
            placeholder="Search"
            className="p-2 border rounded"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
      <select
        className="p-2 ml-2 border rounded"
        onChange={(e) => setRowsPerPage(Number(e.target.value))}
      >
           <option value={5}>5 Rows</option>
        <option value={10}>10 Rows</option>
        <option value={15}>15 Rows</option>
        <option value={25}>20 Rows</option>
      </select>
   
          <select
          className="p-2 ml-2 border rounded mr-2"
          onChange={(e) => handleSort(e.target.value)}
        >
          <option value="">Sort by</option>
          {sortOptions.map((option) => (
            <option key={option} value={option}>
              {`Sort by ${option.charAt(0).toUpperCase() + option.slice(1)}`}
            </option>
          ))}
        </select>
        </div>
        
    </div>
    {sortedEmployees.length!==0 ? (
      <table className="w-full border-collapse border border-gray-800">
    <thead>
      <tr className="bg-gray-200 text-left ">
        <th className="p-2 border-r border-gray-800">Name</th>
        <th className="p-2 border-r border-gray-800">Age</th>
        <th className="p-2 border-r border-gray-800">City</th>
        <th className="p-2 border-r border-gray-800">Position</th>
      </tr>
    </thead>
    <tbody>
      {sortedEmployees.slice(0, rowsPerPage).map((employee, index) => (
        <tr key={index} className="border border-gray-800">
          <td className="p-2 border-r border-gray-800">{employee.name}</td>
          <td className="p-2 border-r border-gray-800">{employee.age}</td>
          <td className="p-2 border-r border-gray-800">{employee.city}</td>
          <td className="p-2 border-r border-gray-800">{employee.position}</td>
        </tr>
      ))}
    </tbody>
  </table>
) : (
 <div> No data for {searchTerm}</div>
)}
</div>
  )
}
export default App
