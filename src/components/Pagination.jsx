import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Pagination = ({page_no, pageIncrement, pageDecrement}) => {
  return (
    <div className='flex justify-center space-x-4 p-4 text-white'>
       
        <div className='hover:cursor-pointer' onClick={pageDecrement}><FontAwesomeIcon icon={faArrowLeft} /></div>
       
        <div>{page_no}</div> 
        <div className='hover:cursor-pointer' onClick={pageIncrement}><FontAwesomeIcon icon={faArrowRight} /></div>

    </div>
  )
}

export default Pagination