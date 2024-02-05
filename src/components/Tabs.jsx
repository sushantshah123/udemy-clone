import React, { useState } from 'react'
import courses from '../utils/data';
import Course from './Course';
import Pagination from './Pagination';
const Tabs = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(4)
  const [activeTab, setActiveTab] = useState(courses);
  const [search, setSearch] = useState('')
  const [products, setProducts] = useState(activeTab);
  const [sortBy, setSortBy] = useState('ascending');
    
 
  const handleTab = (catItem) => {
    const result = courses.filter((currData) => {
      return currData.category === catItem;
    });
    setActiveTab(result)
  }


  const handleSortChange = (e) => {
    const selectedSortBy = e.target.value;
    setSortBy(selectedSortBy);
    
    // Sort the products based on the selected order
    const sortedProducts = [...activeTab]
    if (selectedSortBy === 'ascending') {
      sortedItems.sort((a, b) => a.course_name - b.course_name);
    } else if (selectedSortBy === 'descending') {
      sortedItems.sort((a, b) => b.course_name - a.course_name);
    }
    setProducts(sortedProducts);
  };


  // pagination 
  const lastPostIndex = postsPerPage * currentPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = activeTab.slice(firstPostIndex, lastPostIndex);


  return (
    <>
    <div className='py-8 xs:px-0 px-10'>

    <div className='py-5 flex justify-between'>
      <form action="" className='w-1/2'>
      <input type="search" placeholder='search 5000+ tutorials' className='px-2 py-1 border-gray-600 border-2 w-1/2 xs:w-full rounded-full' onChange={(e) => setSearch(e.target.value)} />
      </form>
      <select value={sortBy} onChange={handleSortChange} className='w-[100px] border-2 border-black'>
        <option value="ascending">A to Z</option>
        <option value="descending">Z to A</option>
      </select>
      </div>
 
        <ul className='flex gap-4 xs:gap-1 flex-wrap'>
            <li className=''><button className='bg-slate-100 border-2 border-gray-600 px-2 py-1 hover:bg-black hover:text-white duration-500' onClick={()=>setActiveTab(courses)}>All</button></li>
            <li className=''><button className={`${activeTab == "python" ? 'bg-red-600' : ''} bg-slate-100 border-2 border-gray-600 px-2 py-1 hover:bg-black hover:text-white duration-500`} onClick={()=>handleTab('python')}>Python</button></li>
            <li className=''><button className={`${activeTab  == "web development" ? 'bg-red-600' : ''}bg-slate-100 border-2 border-gray-600 px-2 py-1 hover:bg-black hover:text-white duration-500`} onClick={()=>handleTab('web development')}>Web Development</button></li>
            <li className=''><button className={`${activeTab  == "data science" ? 'bg-red-600' : ''}bg-slate-100 border-2 border-gray-600 px-2 py-1 hover:bg-black hover:text-white duration-500`} onClick={()=>handleTab('data science')}>Data Science</button></li>
            <li className=''><button className={`${activeTab  == "aws" ? 'bg-red-600' : ''}bg-slate-100 border-2 border-gray-600 px-2 py-1 hover:bg-black hover:text-white duration-500`} onClick={()=>handleTab('aws')}>AWS</button></li>
            <li className=''><button className={`${activeTab  == "design" ? 'bg-red-600' : ''}bg-slate-100 border-2 border-gray-600 px-2 py-1 hover:bg-black hover:text-white duration-500`} onClick={()=>handleTab('design')}>Design</button></li>
            <li className=''><button className={`${activeTab  == "marketing" ? 'bg-red-600' : ''}bg-slate-100 border-2 border-gray-600 px-2 py-1 hover:bg-black hover:text-white duration-500`} onClick={()=>handleTab('marketing')}>Marketing</button></li>
        </ul>

<Course search={search} activeTab={currentPosts} />

<div>
  <Pagination totalPosts={activeTab.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPosts={currentPosts} currentPage={currentPage}/>
</div>
    </div>
    </>
  )
}

export default Tabs



