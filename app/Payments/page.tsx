import React from 'react'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa'
import { FaCircle } from 'react-icons/fa'
import { FaRegSquare } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";

const Paymentspage = () => {
  return (
    <div className=' m-1 sm:flex gap-1'>
         <div className=' sm:w-[33%] gap-1 m-2'>
      <div className='w-[327px] h-[424px] sm:w-auto '>
        <div className='w-[295px] h-[44px]  sm:w-auto m-1'>
        <h2 className='font-bold text-base'>Rental Summary</h2>
        <p className='font-medium text-xs text-sec'>Prices may change depending on the length of the rental and the price of your rental car.</p>
        <div className='flex justify-between items-center m-2'>
            <div className='w-[116px] h-[80px] bg-pri flex justify-center items-center'>
                <Image src={'./images/HeroCar.svg'} alt="caar" width={102} height={32}/>

            </div>
            <div className='w-[151px] h-[68px] mt-5 '>
                <p>Nissan GT - R</p>
                <div className='flex gap-1'>
                <FaStar color='yellow'/>
                <FaStar color='yellow'/>
                <FaStar color='yellow'/>
                <FaStar color='yellow' />
                <FaStar color='grey'/>
                </div>
                <p className='font-mediumn text-sm text-[#3D5278]'>440+ Reviewer</p>

            </div>
         


        </div>
        <div className='w-[294px] h-[16px] flex justify-between items-end mt-3 sm:w-auto'>
                <span className='font-semibold text-xs text-sec'>Subtotal</span>
                <span className='font-semibold text-base'>$80.00</span>


            </div>
            <div className='w-[294px] h-[16px] flex justify-between items-end mt-3 sm:w-auto'>
                <span className='font-semibold text-xs text-sec'>Tax</span>
                <span className='font-semibold text-base'>$00.00</span>


            </div>
            <div className='w-[294px] h-[16px]  flex justify-between items-end rounded-md mt-4 mb-4 sm:w-auto'>
                <input type='text' placeholder='Apply promo code' className='font-medium text-xs text-sec '/>
                <p className='font-semibold text-xs'>Apply now</p>

            </div>
        </div>  



      </div>
      
   
     <div className=' sm:w-[67%]'>
      <div  className='w-[295px] h-[16px] flex justify-between items-end mt-3 mb-3' >
        <div className='w-[140px] h-[48px]'>
    <h2 className='font-bold text-base'>Total Rental Price        </h2>
    <p className='text-xs text-sec'>Overall price rental</p>
    </div>
    <div className='w-[116px] h-[48px]'>
<p className='font-bold text-xl'>$80.00</p> </div>
        </div>

        </div></div>
        <div>
        <div  className='w-[327px] h-[516px] sm:w-auto sm:h-[300px]'>
            <div className='w-[295px] h-[48px] flex justify-between items-center m-2 sm:w-full '>
        <div className='w-[116px] h-[48px] '>
            <p className='font-bold text-base'> Billing Info</p>
            <p className='font-medium text-xs text-sec'> Please enter your billing info</p>

        </div>
   
 <p  className='font-medium text-xs text-sec'>Step 1 of 4</p></div>


 

 
 <div className=' w-[295px] h-[412px]  '>
     <div className='sm:flex gap-1'>
    <div className=' w-[295px] h-[88px] '>
        <p className='font-semibold text-sm'>Name</p>
        <input type="text" placeholder='your name' className='font-medium text-xs text-sec w-[295px] h-[48px] text-center bg-[#e0e3eb] rounded-md' />

    </div>

    <div className=' w-[295px] h-[88px] '>
        <p className='font-semibold text-sm'>Address</p>
        <input type="text" placeholder='Your Address' className='font-medium text-xs text-sec w-[295px] h-[48px] text-center bg-[#e0e3eb] rounded-md' />

    </div>
    </div>
     <div className='sm:flex gap-1'>
    <div className=' w-[295px] h-[88px] '>
        <p className='font-semibold text-sm'>Phone Number</p>
        <input type="text" placeholder='Your Phone Number' className='font-medium text-xs text-sec w-[295px] h-[48px] text-center bg-[#e0e3eb] rounded-md' />

    </div>

    <div className=' w-[295px] h-[88px] '>
        <p className='font-semibold text-sm'>Town/City</p>
        <input type="text" placeholder='Your City' className='font-medium text-xs text-center text-sec w-[295px] h-[48px] bg-[#e0e3eb] rounded-md' />

    </div> </div>
       </div>
    </div>
       <div className='w-[327px] h-[816px] sm:w-full sm:h-[500px]'>
       <div className='w-[295px] h-[48px] flex justify-between items-center m-2 sm:w-full'>
        <div className='w-[116px] h-[48px] '>
            <p className='font-bold text-base'> Rental Info</p>
            <p className='font-medium text-xs text-sec'> Please select your rental date</p>

        </div>
   
 <p  className='font-medium text-xs text-sec'>Step 2 of 4</p>
 </div>
 <div className='w-[295px] h-[244] m-2 sm:w-auto gap-2'>
 <div className="flex gap-2 w-[120px] h-[24px]">
                <FaCircle size={10} color="#3563E9" className='mt-2'/>
                <p className="font-semibold text-base">Drop-ofF</p>
              </div>

<div className='grid grid-cols-1 sm:grid-cols-2 sm:w-full gap-1'>
     <div className=' w-[295px] h-[88px] sm:w-auto'>
        <p className='font-semibold text-sm'>Location</p>
        <input type="text" placeholder='Your Pickup Location' className='font-medium text-xs text-sec w-[295px] h-[48px] text-center bg-[#e0e3eb] rounded-md' />

    </div>
     <div className=' w-[295px] h-[88px] '>
        <p className='font-semibold text-sm sm:w-auto'>Time</p>
        <input type="text" placeholder='Your Pickup Time' className='font-medium text-xs text-sec w-[295px] h-[48px] text-center bg-[#e0e3eb] rounded-md' />

    </div>
     <div className=' w-[295px] h-[88px] '>
        <p className='font-semibold text-sm'>Date</p>
        <input type="text" placeholder='Your Pick-up Date' className='font-medium text-xs text-sec w-[295px] h-[48px] text-center bg-[#e0e3eb] rounded-md' />

    </div>

</div>              

 </div>

 <div className='w-[295px] h-[244] m-2 sm:w-auto gap-2'>
 <div className="flex gap-2 w-[120px] h-[24px]">
                <FaCircle size={10} color="#3563E9" className='mt-2'/>
                <p className="font-semibold text-base">Pick-Up</p>
              </div>

<div className='grid grid-cols-1 sm:grid-cols-2 sm:w-full gap-1'>
     <div className=' w-[295px] h-[88px] sm:w-auto'>
        <p className='font-semibold text-sm'>Location</p>
        <input type="text" placeholder='Your Pickup Location' className='font-medium text-xs text-sec w-[295px] h-[48px] text-center bg-[#e0e3eb] rounded-md' />

    </div>
     <div className=' w-[295px] h-[88px] '>
        <p className='font-semibold text-sm sm:w-auto'>Time</p>
        <input type="text" placeholder='Your Pickup Time' className='font-medium text-xs text-sec w-[295px] h-[48px] text-center bg-[#e0e3eb] rounded-md' />

    </div>
     <div className=' w-[295px] h-[88px] '>
        <p className='font-semibold text-sm'>Date</p>
        <input type="text" placeholder='Your Pick-up Date' className='font-medium text-xs text-sec w-[295px] h-[48px] text-center bg-[#e0e3eb] rounded-md' />

    </div>
</div>








              

 </div>
 </div>
 <div className='w-[327px] h-[732px]  sm:w-full sm:h-[450px]'>
 <div className='w-[295px] h-[48px] flex justify-between items-center mt-2 mb-2 sm:w-auto'>
        <div className='w-[216px] h-[48px] '>
            <p className='font-bold text-base'> Payment Method</p>
            <p className='font-medium text-xs text-sec'> Please enter your payment method</p>

        </div>
   
 <p  className='font-medium text-xs text-sec'>Step 3 of 4</p>
 </div>
<div className='flex justify-between items-center'>
  <div className="flex gap-2 w-[120px] h-[24px]">
                <FaCircle size={10} color="#3563E9" className='mt-2'/>
                <p className="font-semibold text-base">Credit Card</p>
              </div>
    <div>
     <Image src={'./images/Visacard.svg'} alt={'visa logo'} height={22} width={92}/>
    </div>
</div>




 <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 m-1'>
      <div className=' w-[295px] h-[88px] '>
        <p className='font-semibold text-sm sm:w-auto'>Card number</p>
        <input type="text" placeholder='Your card number' className='font-medium text-xs text-sec w-[295px] h-[48px] text-center bg-[#e0e3eb] rounded-md' />

    </div>
     <div className=' w-[295px] h-[88px] '>
        <p className='font-semibold text-sm'>Card Holder</p>
        <input type="text" placeholder='Your Card Holder ' className='font-medium text-xs text-sec w-[295px] h-[48px] text-center bg-[#e0e3eb] rounded-md' />

    </div>
          <div className=' w-[295px] h-[88px] '>
        <p className='font-semibold text-sm sm:w-auto'>Expiration Date</p>
        <input type="text" placeholder='Card expiration date' className='font-medium text-xs text-sec w-[295px] h-[48px] text-center bg-[#e0e3eb] rounded-md' />

    </div>
     <div className=' w-[295px] h-[88px] '>
        <p className='font-semibold text-sm'>CVC</p>
        <input type="text" placeholder='CVC' className='font-medium text-xs text-sec w-[295px] h-[48px] text-center bg-[#e0e3eb] rounded-md' />

    </div>
    



 </div>

 <div className='w-[295px] h-[52px] flex justify-between items-end sm:w-auto mr-1'>
  <div className='flex gap-2'>
    <FaRegCircle/>
    <p>PayPal</p>
  </div>
    <Image src={'./images/PayPal.svg'} alt={'visa logo'} height={15} width={62}/>
    
 </div>

 <div className='w-[295px] h-[52px] flex justify-between items-end sm:w-auto mr-1'>
  <div className='flex gap-2'>
    <FaRegCircle/>
    <p>Bitcoin</p>
  </div>
    <Image src={'./images/Bitcoin.svg'} alt={'visa logo'} height={15} width={62}/>
    
 </div>
 

 </div>

 <div className='w-[327px] h-[476px]  sm:w-full '>
 <div className='w-[295px] h-[48px] flex justify-between items-center mt-2 mb-2 sm:w-full'>
        <div className='w-[198px] h-[68px]  '>
            <p className='font-bold text-base mt-2'>Confirmation</p>
            <p className='font-medium text-xs text-sec '> We are getting to the end. Just few
            clicks and your rental is ready!</p>

        </div>
   
 <p  className='font-medium text-xs text-sec'>Step 4 of 4</p>
 </div>

 <div className='w-[295px] h-[52px] flex gap-2 m-2 sm:w-full'>
      <FaRegSquare size={20}/>
    <p className='font-medium text-xs text-[#1F2544] sm:text-base sm:font-semibold' >I agree with sending an Marketing and newsletter emails. No spam, promissed!</p>

 </div>

 <div className='w-[295px] h-[52px] flex gap-2 m-2 sm:w-full'>
      <FaRegSquare size={20}/>
    <p className='font-medium text-xs text-[#1F2544] sm:text-base sm:font-semibold' >I agree with our terms and conditions and privacy policy.</p>

 </div>

 <button className='w-[100px] h-[36px] rounded-md '>Rent now</button>
 <Image src={'./images/security.svg'} alt="icon" width={32} height={32} className=' mt-2'/>

 <div className='w-[295px] h-[px]'>
    <p className='font-bold text-base text-[#1A202C]'>All your data are safe</p>
    <p className='font-medium text-xs text-sec'>We are using the most advanced security to provide you the best experience ever.</p>
 </div>




 </div>
 </div>


        </div>


    
  )
}

export default Paymentspage