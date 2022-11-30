import React,{useState} from 'react'
import {FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

function Product({item}) {
  const navigate = useNavigate()
  const [hoverEffect, sethoverEffect] = useState('opacity-0')
  const iconStyle = "h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center m-3 hover:bg-[#894af3] hover:text-white hover:scale-[1.1] ease-in duration-100 cursor-pointer"

const handleHoverEnter = ()=>{
  sethoverEffect(' opacity-1 bg-[rgba(0,0,0,0.2)]')
}
const handleHoverExit = ()=>{
  sethoverEffect(' opacity-0')
}

  return (
    <div className='flex items-center justify-center flex-1 min-w-[350px] min-h-[350px] overflow-hidden rounded-md shadow-lg m-2 relative'
     onMouseEnter={handleHoverEnter}
     onMouseLeave={handleHoverExit}
     onClick={()=>navigate('/product')}
     >
        <img src={item.src} alt="product_image" />
        <div className={`flex items-center justify-center w-[100%] h-[100%] absolute ease-in duration-100` + hoverEffect}>
            {/* icons */}
            <div className={iconStyle}>
              <ShoppingCartOutlined/>
            </div>
            <div className={iconStyle}>
              <FavoriteBorderOutlined/>
            </div>
            <div className={iconStyle}>
              <SearchOutlined/>
            </div>
        </div>
    </div>
  )
}

export default Product