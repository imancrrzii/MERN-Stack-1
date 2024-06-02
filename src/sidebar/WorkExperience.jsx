import React from 'react'
import InputField from '../components/InputField'

const WorkExperience = ({handleSelect}) => {
  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Work Experience</h4>

      <div>
        <label className='sidebar-label-container'>
            <input type="radio" name='test' id='test' value="" onChange={handleSelect}/>
            <span className='checkmark'></span>Any experience
        </label>

        <InputField handleSelect={handleSelect} value="Internship" title="Internship" name="test"/>
        <InputField handleSelect={handleSelect} value="Work remotely" title="Work remotely" name="test"/>
      </div>
    </div>
  )
}

export default WorkExperience
