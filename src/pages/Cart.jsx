import React from 'react'
import Announce from '../components/Announce'
import NavBar from '../components/NavBar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Counter from '../components/Counter'

const Cart = () => {
  return (
    <div>
      <Announce/>
      <NavBar/>
      <div className='p-5'>
        <div className='flex justify-center text-5xl'>Cart</div>
        <div className='flex items-center justify-between mt-4 mobile:flex-col'>
            <button className='btn'>Continue Shopping</button>
            <div className='flex underline text-lg hover:cursor-pointer mobile:mt-3 mobile:mb-3'>
                <p>Items in Your Cart: 3</p>
                <p className='ml-5'>Wishlist Item: 0</p>
            </div>
            <button className='btn'>Checkout</button>
        </div>
        {/* central div */}
        <div className='flex mt-7 mobile:flex-col'>
            <div className='flex flex-col flex-1'>
                {/* list of products */}
               <div className='flex w-[100%] h-auto items-center mobile:flex-col'>
                <div className='product flex self-start pl-5'>
                    <img
                        className='w-[7.3rem] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300'
                    src="https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinElectricBlue04_360x.jpg?v=1642719824" alt="product-img" />
                    <div className='description flex flex-col ml-5 h-auto justify-between'>
                        <p>
                            <b className='mr-2'>ID:</b>123435
                        </p>
                        <p>
                            <b className='mr-2'>Product:</b>dazzing Black
                        </p>
                        <p className='flex items-center justify-start'>
                            <b className='mr-2'>Color</b>
                            <div className="bg-sky-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 ">  
                            </div>
                        </p>
                        <p>
                            <b className='mr-2'>Size:</b>lg
                        </p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center flex-auto mobile:mt-3'>
                    <Counter/>
                    <p className='flex items-center justify-center text-4xl mt-3'>
                        <b>$70</b>
                    </p>
                </div>
               </div>
               <hr className='mt-7 mb-7'/>
               {/* second product */}
               <div className='flex w-[100%] h-auto items-center mobile:flex-col'>
                <div className='product flex self-start pl-5'>
                    <img
                        className='w-[7.3rem] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300'
                    src="https://cdn.shopify.com/s/files/1/0240/7285/products/KushJonesLST-ShirtinBlack09_360x.jpg?v=1642719733" alt="product-img" />
                    <div className='description flex flex-col ml-5 h-auto justify-between'>
                        <p>
                            <b className='mr-2'>ID:</b>123435
                        </p>
                        <p>
                            <b className='mr-2'>Product:</b>dazzing Black
                        </p>
                        <p className='flex items-center justify-start'>
                            <b className='mr-2'>Color</b>
                            <div className="bg-black w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 ">  
                            </div>
                        </p>
                        <p>
                            <b className='mr-2'>Size:</b>lg
                        </p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center flex-auto mobile:mt-3'>
                    <Counter/>
                    <p className='flex items-center justify-center text-4xl mt-3'>
                        <b>$70</b>
                    </p>
                </div>
               </div>
               <hr className='mt-7 mb-7'/>
            </div>
            <div className='p-5 flex-[0.4] w-auto h-[40vh] border-2 border-[#8a4af3] rounded-md shadow-lg flex flex-col items-center'>
                <h1 className='text-[2rem]'>Summary</h1>
                <div className='flex justify-between mt-3 w-[100%]'>
                    <p>Subtotal</p>
                    <p>$140</p>
                </div>
                <div className='flex justify-between mt-3 w-[100%]'>
                    <p>Shipping</p>
                    <p>$40</p>
                </div> 
                <div className='flex justify-between mt-3 w-[100%]'>
                    <p>Shipping discount</p>
                    <p>-$40</p>
                </div>
                <div className='flex justify-between mt-3 w-[100%] text-3xl font-bold'>
                    <p>Total</p>
                    <p>$140</p>
                </div>
            </div>
        </div>
      </div>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Cart
