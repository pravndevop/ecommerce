import { EmailOutlined, Facebook, Instagram, LocalPhoneOutlined, LocationOnOutlined, Pinterest, Twitter } from '@mui/icons-material'
import React from 'react'

function Footer() {
    const socialStyle = "m-3 rounded-full cursor-pointer p-2 text-white" 
  return (
    <div className='flex items-center justify-around p-2 mobile:flex-col mobile:items-start'>
        <div className='flex-1 flex flex-col flex-wrap p-2'>
            {/* store info */}
            <h1 className='text-[25px]'>
                Praveen YP
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero accusantium repellendus, sapiente quia necessitatibus omnis laborum beatae voluptates, dignissimos illo laboriosam fugiat quasi, aperiam optio placeat labore debitis. Commodi, ullam.
            </p>
            <div className='flex items-center justify-center mt-3 self-start'>
                <div className= {socialStyle + ' bg-blue-700'}>
                    <Facebook/>
                </div >
                <div  className= {socialStyle + ' bg-orange-500'}>
                    <Instagram/>
                </div>
                <div  className= {socialStyle + ' bg-sky-400'}>
                    <Twitter/>
                </div >
                <div  className= {socialStyle + ' bg-red-600'}>
                    <Pinterest/>
                </div>
            </div>
        </div>
        <div className='flex-1 flex flex-col p-2 '>
            {/* contact info */}
            <div className='flex m-3'>
                <LocationOnOutlined/>
                <p className='pl-3'>State of Karnataka</p>
            </div>
            <div className='flex m-3'>
                <LocalPhoneOutlined/>
                <p className='pl-3'>+91 7618743721</p>
            </div>
            <div className='flex m-3'>
                <EmailOutlined/>
                <p className='pl-3'>praveenarya518@gmail.com</p>
            </div>
        </div>
    </div>
  )
}

export default Footer