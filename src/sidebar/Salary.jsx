import React from 'react'
import InputField from '../components/InputField'
import Button from './Button'

const Salary = ({handleSelect, handleClick}) => {
  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Salary</h4>
      <div className='mb-4'>
        <Button onClickHandler={handleClick} value="Hourly" title="Hourly"/>
        <Button onClickHandler={handleClick} value="Monthly" title="Monthly"/>
        <Button onClickHandler={handleClick} value="Yearly" title="Yearly"/>
      </div>
      <div>
        <label className='sidebar-label-container'>
            <input type="radio" name='test' id='test' value="" onChange={handleSelect}/>
            <span className='checkmark'></span>All
        </label>

        <InputField handleSelect={handleSelect} value={30} title="< 30000k>" name="test"/>
        <InputField handleSelect={handleSelect} value={50} title="< 50000k>" name="test"/>
        <InputField handleSelect={handleSelect} value={80} title="< 80000k>" name="test"/>
        <InputField handleSelect={handleSelect} value={10} title="< 100000k>" name="test"/>
      </div>
    </div>
  )
}

export default Salary
