import search from'../Images/octicon_search-24.png'
import profile from '../Images/Group.png'
import cart from '../Images/Component 16.png'
import logo from '../Images/Group 1.jpg'
import logo1 from '../Images/VistaMart.jpg'


export default function Header() {
  return (
          <div className="w-full h-20 px-[100px] py-[32px] flex justify-evenly items-center">
            <div className="flex items-center justify-start">
                  <div className='flex items-center justify-start'>
                     <img src={logo} alt="logo" />
                     <img src={logo1} alt="logo" />
                  </div>
                  <div className="flex items-center justify-center gap-3 px-6">
                      <div className='px-[24px] py-[12px] font-normal text-[12px]'>
                          <p className='text-black text-[16px] font-sans font-normal '>Categories</p>
                      </div>
                      <div className='px-[24px] py-[12px] font-normal text-[12px]'>
                          <p className='text-black text-[16px] font-sans font-normal '>New Arrivals</p>
                      </div>
                      <div className='px-[24px] py-[12px] font-normal text-[12px]'>
                        <p className='text-black text-[16px] font-sans font-normal '>Contact Us</p>
                      </div>
                  </div>
                  <div className="flex items-center justify-end gap-10 text-center">
                      <div className="flex">
                          <input type="search" name="search" id="search" placeholder='Search Product' className="border rounded-full bg-slate-100 text-[12px] px-[20px] items-center py-[6px]" />
                          <img src={search} alt="search" className="relative items-center w-6 h-6 pt-[4px] right-8" />
                      </div>
                         <div className='flex gap-2'>
                            <img src={profile} alt="profile" />
                            <h3>Account</h3>
                         </div>
                         <div>
                            <img src={cart} alt="cart" />
                         </div>
                  </div>
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

