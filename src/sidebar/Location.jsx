import React from 'react'
import InputField from '../components/InputField'

const Location = ({handleSelect}) => {
  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Location</h4>

      <div>
        <label className='sidebar-label-container'>
            <input type="radio" name='test' id='test' value="" onChange={handleSelect}/>
            <span className='checkmark'></span>All
        </label>

        <InputField handleSelect={handleSelect} value="london" title="London" name="test"/>
        <InputField handleSelect={handleSelect} value="seattle" title="Seattle" name="test"/>
        <InputField handleSelect={handleSelect} value="madrid" title="Madrid" name="test"/>
        <InputField handleSelect={handleSelect} value="boston" title="Boston" name="test"/>
      </div>
    </div>
  )
}

export default Location
