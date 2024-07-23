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
        <div className='flex  w-full px-[100px] gap-36'>
          <div className='w-full mt-8 bg-white rounded-lg'>
            <form className='flex-col px-[24px] mt-[30px]'>
              <h1 className='font-[poppins] text-[16px] font-medium'>Payment Method</h1>
              <div className='flex items-center justify-between gap-3 my-8'>
                <div className='flex flex-col gap-1'>
                  <p className='font-[poppins] text-[12px] font-normal'>Email</p>
                  <input type="email" className='w-[317px] h-[48px] border border-gray-200 bg-gray-50 rounded-[8px]' />
                </div>
                <div>
                  <p className='font-[poppins] text-[12px] font-normal'>Phone number</p>
                  <input type="tel" className='w-[317px] h-[48px] border border-gray-200 bg-gray-50 rounded-[8px]' />
                </div>
              </div>
              <div className='flex items-center justify-start gap-3 my-8'>
                <div className='flex flex-col gap-1'>
                  <p className='font-[poppins] text-[12px] font-normal'>Card number</p>
                  <input type="number" className='w-[218px] h-[48px] border border-gray-200 bg-gray-50 rounded-[8px]' />
                </div>
                <div>
                  <p className='font-[poppins] text-[12px] font-normal'>MM/YR</p>
                  <input type="number" className='w-[129px] h-[48px] border border-gray-200 bg-gray-50 rounded-[8px]' />
                </div>
                <div>
                  <p className='font-[poppins] text-[12px] font-normal'>CVC</p>
                  <input type="number" className='w-[129px] h-[48px] border border-gray-200 bg-gray-50 rounded-[8px]' />
                </div>
              </div>
              <div className='flex items-center justify-between gap-3 my-8'>
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
      <div class="w-full h-[415px] px-[100px] py-16 bg-sky-950 flex-col justify-center items-start gap-16 inline-flex text-white">
        <div class="w-full justify-evenly items-start gap-44 inline-flex">
            <div class="w-full flex-col justify-start items-start gap-8 inline-flex">
                <div class="self-stretch text-white text-base font-medium font-['Poppins'] leading-none">Link</div>
                <div class="self-stretch h-28 flex-col justify-start items-start gap-4 flex">
                    <div class="w-[89px] justify-start items-center inline-flex">
                        <div class="grow shrink basis-0 text-white text-base font-normal font-['Poppins'] leading-none">Categories</div>
                    </div>
                    <div class="self-stretch justify-start items-center inline-flex">
                        <div class="text-white/opacity-80 text-base font-normal font-['Poppins'] leading-none">New Arrivals</div>
                    </div>
                    <div class="self-stretch justify-start items-center inline-flex">
                        <div class="text-white/opacity-80 text-base font-normal font-['Poppins'] leading-none">Contact Us</div>
                    </div>
                    <div class="self-stretch justify-start items-center inline-flex">
                        <div class="text-white/opacity-80 text-base font-normal font-['Poppins'] leading-none">FAQ</div>
                    </div>
                </div>
            </div>
            <div class="w-[151px] flex-col justify-start items-start gap-8 inline-flex">
                <div class="self-stretch text-white text-base font-medium font-['Poppins'] leading-none">Legal Information</div>
                <div class="self-stretch h-12 flex-col justify-start items-start gap-4 flex">
                    <div class="self-stretch justify-start items-center inline-flex">
                        <div class="text-white/opacity-80 text-base font-normal font-['Poppins'] leading-none">Privacy Policy</div>
                    </div>
                    <div class="self-stretch justify-start items-center inline-flex">
                        <div class="grow shrink basis-0 text-white/opacity-80 text-base font-normal font-['Poppins'] leading-none">Terms of Service</div>
                    </div>
                </div>
            </div>
            <div class="w-[151px] flex-col justify-start items-start gap-8 inline-flex">
                <div class="self-stretch text-white text-base font-medium font-['Poppins'] leading-none">Follow Us</div>
                <div class="w-[130px] h-[26px] justify-start items-center gap-2 inline-flex">
                    <div class="w-[26.54px] h-[26.54px] p-[3.32px] bg-white rounded-[26.54px] justify-center items-center flex">
                        <img src={facebook} alt="" />
                    </div>
                    <div class="w-[26.54px] h-[26.54px] p-[3.32px] bg-white rounded-[26.54px] justify-center items-center flex">
                        <img src={linkedin} alt="" />
                    </div>
                    <div class="w-[26.54px] h-[26.54px] p-[3.32px] bg-white rounded-[26.54px] justify-center items-center flex">
                        <img src={twitter} alt="" />
                    </div>
                    <div class="w-[26.54px] h-[26.54px] p-[3.32px] bg-white rounded-[26.54px] justify-center items-center flex">
                        <div class="w-[19.90px] h-[19.90px] relative flex-col justify-start items-start flex">
                          <img src={instagram} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-[312px] flex-col justify-start items-start gap-8 inline-flex">
                <div class="self-stretch text-white text-base font-medium font-['Poppins'] leading-none">Newsletter</div>
                <div class="self-stretch h-[114px] flex-col justify-start items-start gap-8 flex">
                    <div class="self-stretch justify-start items-center inline-flex">
                        <div class="text-white/opacity-80 text-base font-normal font-['Poppins'] leading-tight">Subscribe to our newsletter to<br/>get latest news </div>
                    </div>
                </div>
                <div class="w-full h-11 pl-5 bg-white rounded-[32px] justify-end items-center gap-[50px] inline-flex">
                    <div class="text-sky-950 text-xs font-normal font-['Poppins'] leading-[14.40px]"></div>
                    <div class=" self-stretch px-5 py-3.5 bg-rose-400 rounded-[32px] justify-center items-center inline-flex">
                        <div class="text-white text-base font-semibold font-['Poppins'] leading-none">Subscribe</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="self-stretch h-[61px] flex-col justify-start items-center gap-8 inline-flex">
            <div class="self-stretch h-[0px] border border-white/opacity-80"></div>
            <div class="self-stretch h-[29px] text-center text-white/opacity-80 text-base font-normal font-['Poppins'] leading-[29.12px]">© 2024 VistaMart, All Rights Reserved.</div>
        </div>
      </div>
    </>
  );
}