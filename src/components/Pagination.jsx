import React from 'react'

const Pagination = ({postsPerPage,totalPosts,setCurrentPage,currentPage}) => {
    let pages = [];
    for (let i=1; i<= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }
  return (
    <>
    <div>
        {
            pages.map((page, index)=>{
                return <button key={index} className={`border-2 border-red-800 px-2 m-1 rounded-sm ${currentPage ? "bg-black text-white" : ""}`} onClick={()=> setCurrentPage(page)}>{page}</button>
            })
        }
    </div>
    </>
  )
}

export default Pagination