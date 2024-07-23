import search from'../Images/octicon_search-24.png'
import profile from '../Images/Group.png'
import cart from '../Images/Component 16.png'
import logo from '../Images/Group 1.jpg'
import logo1 from '../Images/VistaMart.jpg'
import navBar from '../Images/Vector (5).png'
import { Link } from "react-router-dom";


export default function Header() {
  return (
      <div className="w-[80%] h-[78px] mx-auto flex items-center justify-between md:gap-[47px]">
        <div className='flex items-center justify-start'>
           <img src={logo} alt="logo" className='w-16 h-8' />
           <img src={logo1} alt="logo" className='h-8 w-28' />
        </div>
        <div className="xl:flex hidden items-center justify-center py-[12px] px[10px] gap-4">
                <p className='text-black text-[16px] font-sans font-normal '>Categories</p>
                <p className='text-black text-[16px] font-sans font-normal '>New Arrivals</p>
              <p className='text-black text-[16px] font-sans font-normal '>Contact Us</p>
        </div>
        <div className="items-center gap-[49px] hidden md:flex">
          <div 
            className="xl:flex justify-between items-center bg-slate-100 pl-[20px] 
            py-[6px] rounded-[32px] gap-[20px] hidden"
          >
            <input 
              type="search" 
              name="search" 
              id="search" 
              placeholder='Search Product' 
              className="flex rounded-[32px] text-[12px] 
              items-center bg-slate-100 text-black" />
            <img src={search} alt="search" className="w-6 h-6 " />
          </div>
          <div className='hidden gap-3  xl:flex'>                  
            <img src={profile} alt="profile" />
            <div className='flex gap-2'>
              <h3>Account</h3>
            </div>
            <div>
              <Link to="/checkout">
                <img src={cart} alt="cart" />
              </Link>
            </div>
          </div>
        </div>
        <div className='block xl:hidden'>
          <img src={navBar} alt="" />
        </div>
      </div>
  )
}





                // <div class="w-[1240px] h-[1073px] flex-col justify-start items-center gap-[74px] inline-flex mt-[106px]">
                //     <div class="self-stretch text-center text-teal-950 text-[32px] font-semibold font-['Poppins'] leading-[51.20px]">Discover Our Products</div>
                //     <div class="self-stretch h-[948px] flex-col justify-start items-start gap-8 flex">
                //         <div class="self-stretch justify-start items-center gap-5 inline-flex">
                //             <div class="flex-col justify-start items-start inline-flex">
                //                 <div class="flex-col justify-start items-start flex">
                //                     <div class="h-[458px] flex-col justify-start items-start gap-6 flex">
                //                         <div class="w-[295px] h-[348px] px-[81px] pt-10 pb-[39px] bg-zinc-100 rounded-lg flex-col justify-center items-center flex">
                //                             <div class="self-stretch grow shrink basis-0 flex-col justify-center items-center inline-flex">
                //                                 <img class="w-[133px] h-[269px]" src={product.image} />
                //                             </div>
                //                         </div>
                //                         <div class="self-stretch h-[86px] flex-col justify-start items-start gap-3 flex">
                //                             <div class="self-stretch h-[50px] flex-col justify-start items-start gap-1 flex">
                //                                 <div class="w-[295px] h-8 justify-center items-center inline-flex">
                //                                     <div class="w-[295px] text-neutral-500 text-xl font-medium font-['Poppins'] leading-loose">{product.name}</div>
                //                                 </div>
                //                                 <div class="self-stretch text-neutral-600 text-xs font-normal font-['Poppins'] leading-[14.40px]">{product.description}</div>
                //                             </div>
                //                             <div class="self-stretch justify-start items-center gap-0.5 inline-flex">
                //                                 <div class="text-teal-950 text-xl font-semibold font-['Poppins'] leading-normal">{product.price}</div>
                //                             </div>
                //                         </div>
                //                     </div>
                //                 </div>
                //             </div>
                //         </div>
                //     </div>
                // </div>

