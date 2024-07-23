import React from "react";
import Header from "../component/Header";
import hero from '../Images/fit-dark-skinned-man-athlete-drinking-water-out-plastic-bottle-after-hard-cardio-running-workout 1.png'
import image1 from '../Images/assortment-tumbler-with-copy-space 1.png'
import image2 from '../Images/Infuser.png'
import image3 from '../Images/Collapsible.png'
import image4 from '../Images/Glass.png'
import image5 from '../Images/Straw Lid.png'
import image6 from '../Images/Wide Mouth.png'
import image7 from '../Images/Sport.png'
import image8 from '../Images/Sport.png'
import facebook from '../Images/Vector.png'
import linkedin from '../Images/Vector (1).png'
import twitter from '../Images/Vector (2).png'
import instagram from '../Images/hugeicons_instagram.png'
import naira from '../Images/Vector.jpg'
import button from '../Images/Button.png'


const products = [
  {
    id: 1, image: image1, name: 'Bamboo Lid', price: '20,000', description: 'Durable bottle with a sustainable bamboo lid.'
  },
  {
    id: 2, image: image2, name: 'Insulated', price: '16,000', description: 'Keep drinks cold or hot with this double-walled'
  },
  {
    id: 3, image: image3, name: 'Infuser', price: '20,000', description: 'Durable bottle with a sustainable bamboo lid.'
  },
  {
    id: 4, image: image4, name: 'Collapsible', price: '25,000', description: 'Space-saving design, ideal for travel'
  },
  {
    id: 5, image: image5, name: 'Glass', price: '27,000', description: 'Pure and simple glass bottle, safe'
  },
  {
    id: 6, image: image6, name: 'Straw Lid', price: '25,000', description: 'Easy to drink straw lid, perfect for kids'
  },
  {
    id: 7, image: image7, name: 'Wide Mouth', price: '22,000', description: 'Wide mouth for easy filling and cleaning,'
  },
  {
    id: 8, image: image8, name: 'Sport', price: '15,000', description: 'Lightweight and durable, perfect for gym'
  },
]

const productList = ({ addToCart }) => {
  return (    
    <>
      <Header />
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
        <div className="w-full bg-[rgb(240,240,240)]"> 
          <h1 
            className="font-semibold px-10 text-[32px] 
            text-center font-[poppins]">
            Discover Our Products
          </h1>
          <ul className='w-[90%] mx-auto md:w-[80%] flex 
            flex-col flex-wrap items-center content-center 
            self-stretch justify-center gap-5  md:gap-8 
            sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
            xl:grid-cols-4'
          >
            {products.map(product => (
              <li className="" key={product.id}>
                <div
                  data-testid="movie-card" 
                  className="w-full border-gray-300 text-white 
                  cursor-pointer justify-center items-center rounded-[15px] 
                  flex flex-col shrink-0 bg-white"
                >
                  <div className="flex w-full h-[348px] justify-center items-center">                    
                    <img 
                      data-testid="movie-poster"
                      src={product.image}
                      alt={product.name}
                      className="w-[133px] h-[269px] shrink-0 items-center"
                    />
                  </div>
                  <div className='flex flex-col self-stretch gap-3 text-center bg-white md:items-start'>
                    <div className="text-center md:text-start text-[#777777]">                      
                      <h2 className="text-xl">{product.name}</h2>
                      <p className="text-sm">{product.description}</p>
                    </div>
                    <div className="flex justify-center md:items-center items-center gap-[2px] "> 
                      <img src={naira} alt="naira" />                     
                      <p className="font-bold text-black"> {product.price}</p>
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
      </div>
      
      <div class="w-full px-[20px] py-[40px] md:px-[100px] md:py-16 bg-sky-950 flex-col justify-center items-start gap-16 inline-flex text-white">
        <div class="w-full justify-evenly items-start gap-44 flex-col text-black md:inline-flex">
            <div class="w-full flex-col justify-start items-start gap-8 md:inline-flex ">
                <div class="self-stretch text-black text-base font-medium font-['Poppins'] leading-none">Link</div>
                <div class="self-stretch h-28 flex-col justify-start items-start gap-4 flex">
                    <div class="w-[89px] justify-start items-center inline-flex">
                        <div class="grow shrink basis-0 text-black text-base font-normal font-['Poppins'] leading-none">Categories</div>
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
            <div class="w-[151px] flex-col justify-start items-start gap-8 md:inline-flex">
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
};

export default productList;


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


