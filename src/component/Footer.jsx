import facebook from '../Images/Vector.png'
import linkedin from '../Images/Vector (1).png'
import twitter from '../Images/Vector (2).png'
import instagram from '../Images/hugeicons_instagram.png'

export default function Footer() {
  return (
    <>
      <div class="w-full px-[20px] py-[40px] md:px-[100px] md:py-16 bg-sky-950 flex-row justify-center items-start gap-2 xl:gap-16 md:flex-row text-white">
        <div class="w-full flex justify-between items-start gap-44 flex-col xl:flex-row">
          <div class="w-full flex-col justify-start items-start gap-8 md:inline-flex ">
            <div class="self-stretch text-black text-base font-medium font-['Poppins'] leading-none">Link</div>
            <div class="self-stretch h-28 flex-col justify-start items-start gap-4 flex">
              <div class="w-[89px] justify-start items-center inline-flex">
                  <div class="grow shrink basis-0 text-base font-normal font-['Poppins'] leading-none">Categories</div>
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
  )
}
