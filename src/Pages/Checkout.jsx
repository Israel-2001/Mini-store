import React from 'react'
import Header from '../component/Header'
import arrow from '../Images/ion_arrow-back.jpg'
import image1 from '../Images/assortment-tumbler-with-copy-space 1.png';
import image2 from '../Images/Infuser.png'
import naira from '../Images/Vector.jpg'
import facebook from '../Images/Vector.png'
import linkedin from '../Images/Vector (1).png'
import twitter from '../Images/Vector (2).png'
import instagram from '../Images/hugeicons_instagram.png'
import { Link } from 'react-router-dom';
import Footer from '../component/Footer';

export default function Checkout() {
  
  return (
    <>
      <Header />
      <div className='pb-12 bg-[#F4F4F4]'>
        <Link to="/">
          <div className='flex flex-row gap-1 pt-[64px] pl-[132px] '>
            <img src={arrow} alt="" className='bg-[#F4F4F4]' />
            <p>Back</p>
          </div>
        </Link>
        <h1 className='text-center text-[24px] font-bold pt-[74px] font-[poppins]'>Check Out</h1>
        <div className='flex flex-col w-full px-[100px] bg-white gap-36 md:flex-row'>
          <div className='bg-white rounded-lg xl:w-full'>
            <form className='w-[95%] mx-auto flex-col px-[24px] mt-[30px]'>
              <h1 className='font-[poppins] text-[16px] font-medium'>Payment Method</h1>
              <div className='flex flex-col items-center justify-between gap-3 my-8 xl:flex-row'>
                <div className='flex flex-col gap-1'>
                  <p className='font-[poppins] text-[12px] font-normal'>Email</p>
                  <input type="email" className='w-[317px] h-[48px] border border-gray-200 bg-gray-50 rounded-[8px]' />
                </div>
                <div>
                  <p className='font-[poppins] text-[12px] font-normal'>Phone number</p>
                  <input type="tel" className='w-[317px] h-[48px] border border-gray-200 bg-gray-50 rounded-[8px]' />
                </div>
              </div>
              <div className='flex flex-col items-center justify-between gap-3 my-8 xl:flex-row'>
                <div className='flex flex-col gap-1'>
                  <p className='font-[poppins] text-[12px] font-normal'>Card number</p>
                  <input type="number" className='w-[317px] h-[48px] border border-gray-200 bg-gray-50 rounded-[8px] xl:w-[218px]' />
                </div>
                <div className='flex flex-col gap-1'>
                  <p className='font-[poppins] text-[12px] font-normal'>MM/YR</p>
                  <input type="number" className='w-[317px] h-[48px] border border-gray-200 bg-gray-50 rounded-[8px] xl:w-[129px]' />
                </div>
                <div className='flex flex-col gap-1'>
                  <p className='font-[poppins] text-[12px] font-normal'>CVC</p>
                  <input type="number" className='w-[317px] h-[48px] border border-gray-200 bg-gray-50 rounded-[8px] xl:w-[129px]' />
                </div>
              </div>
              <div className='flex items-center justify-center gap-3 my-8 xl:justify-start'>
                <div className='flex flex-col gap-1'>
                  <p className='font-[poppins] text-[12px] font-normal'>Card holder Name</p>
                  <input type="number" className='w-[333px] h-[48px] border border-gray-200 bg-gray-50 rounded-[8px]' />
                </div>
              </div>
              <div className='mt-[64px]'>
                <button className='bg-[#FF877B] w-full p-[16px] rounded-full'>Pay Now</button>
              </div>
            </form>
          </div>
          <div className='mt-8 bg-white w-[50%] rounded-lg'>
            <div className='flex-col px-[24px]'>
              <h2 className='font-[poppins] text-[20px] font-medium mt-[22px]'>Order Summary</h2>
              <div className='flex items-center justify-between py-6 mt-8'>
                <div className='flex items-center justify-start gap-3'>
                  <div>                    
                    <img src={image1} alt="" className='w-[40px] h-[67px]' />
                  </div>
                  <div className='flex flex-col gap-1'>
                    <p className='font-[poppins] text-[16px] font-medium'>Bamboo Lid</p>
                    <p className='font-[poppins] text-[16px] font-medium'>Qty: 1</p>
                  </div>
                </div>
                <div className='flex gap-1'>
                  <img src={naira} alt="" />
                  <p>20,000</p>
                </div>
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex items-center justify-start gap-3'>
                  <div>                    
                    <img src={image2} alt="" className='w-[40px] h-[67px]' />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <p className='font-[poppins] text-[16px] font-medium'>Sport</p>
                    <p className='font-[poppins] text-[16px] font-medium'>Qty: 1</p>
                  </div>
                </div>
                <div className='flex gap-1'>
                  <img src={naira} alt="" />
                  <p>15,000</p>
                </div>
              </div>
              <div className='mt-12'>
                <div className='flex justify-between py-2 font-medium'>
                  <div>
                    <p>Total Products</p>
                  </div>
                  <div className='flex gap-1'>
                    <img src={naira} alt="" />                  
                    <p>35,000</p>
                  </div>
                </div>                
                <div className='flex justify-between py-2 font-medium'>
                  <div>
                    <p>Shopping Cost</p>
                  </div>
                  <div className='flex gap-1'>                 
                    <p>Fee</p>
                  </div>
                </div>
                <div className='flex justify-between py-2 font-medium'>
                  <div>
                    <p>Tax</p>
                  </div>
                  <div className='flex gap-1'>
                    <img src={naira} alt="" />                  
                    <p>1,000</p>
                  </div>
                </div>
                <div className='flex justify-between py-6 font-bold'>
                  <div>
                    <p>Total Cost </p>
                  </div>
                  <div className='flex gap-1'>
                    <img src={naira} alt="" />                  
                    <p>36,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}