import React, { useState } from "react";
import hero from '../Images/fit-dark-skinned-man-athlete-drinking-water-out-plastic-bottle-after-hard-cardio-running-workout 1.png'
import image1 from '../Images/assortment-tumbler-with-copy-space 1.png'
import image2 from '../Images/Infuser.png'
import image3 from '../Images/Collapsible.png'
import image4 from '../Images/Glass.png'
import image5 from '../Images/Straw Lid.png'
import image6 from '../Images/Wide Mouth.png'
import image7 from '../Images/Sport.png'
import image8 from '../Images/Sport.png'
import naira from '../Images/Vector.jpg'
import button from '../Images/Button.png'
import Footer from "../component/Footer";
import { Link, NavLink } from "react-router-dom";
import search from'../Images/octicon_search-24.png'
import profile from '../Images/Group.png'
import cart from '../Images/Component 16.png'
import logo from '../Images/Group 1.jpg'
import logo1 from '../Images/VistaMart.jpg'
import navBar from '../Images/Vector (5).png'


const products = [
  {
    id: 1, 
    image: image1, 
    name: 'Bamboo Lid', 
    price: '20,000', 
    description: 'Durable bottle with a sustainable bamboo lid.'
  },
  {    
    id: 2, 
    image: image2, 
    name: 'Insulated', 
    price: '16,000', 
    description: 'Keep drinks cold or hot with this double-walled'
  },
  {  
    id: 3, 
    image: image3, 
    name: 'Infuser', 
    price: '20,000', 
    description: 'Durable bottle with a sustainable bamboo lid.'
  },
  {
    id: 4, 
    image: image4, 
    name: 'Collapsible', 
    price: '25,000', 
    description: 'Space-saving design, ideal for travel'
  },
  {
    id: 5, 
    image: image5, 
    name: 'Glass', 
    price: '27,000', 
    description: 'Pure and simple glass bottle, safe'
  },
  {
    id: 6, 
    image: image6, 
    name: 'Straw Lid', 
    price: '25,000', 
    description: 'Easy to drink straw lid, perfect for kids'
  },
  {
    id: 7, 
    image: image7, 
    name: 'Wide Mouth', 
    price: '22,000', 
    description: 'Wide mouth for easy filling and cleaning,'
  },
  {
    id: 8, 
    image: image8, 
    name: 'Sport', 
    price: '15,000', 
    description: 'Lightweight and durable, perfect for gym'
  },
]

export default function ProductList() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };
  return (    
    <>    
      <div className="w-[80%] h-[78px] bg-white mx-auto flex items-center justify-between md:gap-[47px]">
        <Link to="/">
          <div className='flex items-center justify-start'>
            <img src={logo} alt="logo" className='w-16 h-8' />
            <img src={logo1} alt="logo" className='h-8 w-28' />
          </div>
        </Link>
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
          <div className='hidden gap-3 xl:flex'>                  
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
        <div 
          onClick={toggleNavBar} 
          className='block xl:hidden'
        >
          {!isOpen ? 
            <img 
              src={navBar} 
              alt='navBar' 
            />
             : 
            <h1 className='text-2xl font-bold cursor-pointer'>
              X
            </h1>
          }
        </div>
      </div>        
        {isOpen && (
          <div className='flex-col items-center text-lg justify-center w-full h-[600px] gap-20 mt-3 flex border-y-2 border-black top-0 xl:hidden'>        
              <ul className='h-full py-32'>
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/checkout"}>Checkout</NavLink></li>
              </ul>
        </div>
        )}

      {isOpen ?      
        <div className="hidden bg-blue-100">
          <div className="w-[80%] mx-auto flex justify-center">
            <div className="flex flex-col pt-[96px] pb-[115px]">
              <h2 className="text-[48px] font-semibold">Every Slip is a Step Towards <br />Sustainability</h2>
              <p className="text-[16px] font-normal">Our eco-friendly water bottles offer sustainable hydration solutions.
                Enjoy pure refreshment while reducing environmental impact
              </p>
              <img src={button} alt="" className="w-32 h-10 mt-3 cursor-pointer" />
            </div>
            <div className="hidden md:block mt-36">              
              <img className="" alt="hero" src={hero} />
            </div>
          </div>
        </div> : 
        <div className="bg-blue-100">
          <div className="w-[80%] mx-auto flex justify-center">
            <div className="flex flex-col pt-[96px] pb-[115px]">
              <h2 className="text-[48px] font-semibold">Every Slip is a Step Towards <br />Sustainability</h2>
              <p className="text-[16px] font-normal">Our eco-friendly water bottles offer sustainable hydration solutions.
                Enjoy pure refreshment while reducing environmental impact
              </p>
              <img src={button} alt="" className="w-32 h-10 mt-3 cursor-pointer" />
            </div>
            <div className="hidden md:block mt-36">              
              <img className="" alt="hero" src={hero} />
            </div>
          </div>
        </div>
      }
        <div className="w-full bg-white"> 
          <h1 
            className="font-semibold px-10 text-[32px] 
            text-center font-[poppins]">
            Discover Our Products
          </h1>
          <ul className='w-[75%] mx-auto md:w-[80%] flex 
            flex-col flex-wrap items-center  justify-between gap-5 my-10 md:gap-8 
            sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
            xl:grid-cols-4'
          >
            {products.map(product => (
              <li className="w-full" key={product.id}>
                <div
                  data-testid="movie-card" 
                  className="w-full border-gray-300 text-white 
                  cursor-pointer items-center rounded-[15px] 
                  flex flex-col shrink-0 gap-5"
                >
                  <div className="self-center w-full bg-gray-200 rounded-[10px]">
                    <img 
                      data-testid="movie-poster"
                      src={product.image}
                      alt={product.name}
                      className="w-[100px] shrink-0 items-center mx-auto py-5"
                    />
                  </div>
                  <div className='flex flex-col self-stretch gap-3 text-center bg-white md:items-start'>
                    <div className="text-center text-black md:text-start">                      
                      <h2 className="text-2xl font-semibold">{product.name}</h2>
                      <p className="text-sm">{product.description}</p>
                    </div>
                    <div className="flex justify-center md:items-center items-center gap-[2px] "> 
                      <img src={naira} alt="naira" />                     
                      <p className="text-lg font-bold text-black"> {product.price}</p>
                    </div>
                  </div>
                </div>
                  {/* <div className="pb-3 my-10 text-white bg-gray-900">
                      <div class="w-[295px] h-[348px] bg-zinc-100 rounded-lg flex-col justify-center items-center flex">
                        <img className="rounded-[15px] w-full h-[50%]" alt="" src={product.image} />
                      </div>
                      <div class="self-stretch h-[86px] flex-col justify-start items-start gap-3 flex">
                          <div class="self-stretch h-[50px] flex-col justify-start items-start gap-1 flex">
                              <div class="w-[295px] h-8 justify-center items-center inline-flex">
                                  <h3 class="w-[295px] text-neutral-500 text-xl font-medium font-['Poppins'] leading-loose">{product.name}</h3>
                              </div>
                              <div class="self-stretch text-neutral-600 text-xs font-normal font-['Poppins'] leading-[14.40px]">{product.description}</div>
                          </div>
                          <div class="self-stretch justify-start items-center gap-0.5 inline-flex">
                              <div class="text-teal-950 text-xl font-semibold font-['Poppins'] leading-normal">{product.price}</div>
                          </div>
                      </div>
                  </div> */}
              </li>
            ))}
          </ul>
        </div>
      
      <Footer />
    </>
  );
};




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


