import React from 'react'
import EmploymentType from './EmploymentType'
import JobPostingData from './JobPostingData'
import Location from './Location'
import Salary from './Salary'
import WorkExperience from './WorkExperience'

const Sidebar = ({handleSelect, handleClick}) => {
  return (
    <div className='space-y-5 '>
      <h3 className='text-lg font-bold mb-2'>Filters</h3>

      <Location handleSelect={handleSelect}/>
      <Salary handleSelect={handleSelect} handleClick={handleClick}/>
      <JobPostingData handleSelect={handleSelect}/>
      <WorkExperience handleSelect={handleSelect}/>
      <EmploymentType handleSelect={handleSelect}/>
    </div>
  )
}

export default Sidebar
