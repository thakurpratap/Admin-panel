import React from 'react'
import { CiSearch } from "react-icons/ci";


function SearchBox() {
  return (
    <>
    {/* posotion-relative */}
      <div className='searchbox  d-flex align-items-center'>
      <CiSearch className='ml-2'/>
        <input type='text' placeholder='search here...'/>
      </div>
    </>
  )
}

export default SearchBox
