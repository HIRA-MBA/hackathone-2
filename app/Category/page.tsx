import React from 'react'
import Purpose from '@/components/purpose'
import Recomended from '@/components/Recomended'
import Cardetails from '@/components/cardetails';

const Category = () => {
  return (
    <div className='flex bg-[#C3D4E9]'>
     <div className='sm:w-1/4'>
      <Cardetails/>
     </div>

        







         
        
        <div className='w-3/4'>
        <Purpose/>
        {/* Responsive Layout for Recommended Cars */}
  <div className=" mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
    <Recomended 
      carname="All New Rush" 
      cartype="suv" 
      fuel="70L" 
      type="manual" 
      people="6" 
      price="72.00" 
      Avg="80" 
      img="./images/recomCar/car1.svg" 
    />
    <Recomended 
      carname="CR - V" 
      cartype="suv" 
      fuel="80L" 
      type="manual" 
      people="6" 
      price="80.00" 
      img="./images/recomCar/car2.svg" 
    />
    <Recomended 
      carname="All New Terios" 
      cartype="suv" 
      fuel="90" 
      type="manual" 
      people="6" 
      price="76" 
      img="./images/recomCar/car3.svg" 
    />
    <Recomended 
      carname="CR - V" 
      cartype="suv" 
      fuel="80L" 
      type="manual" 
      people="6" 
      price="80" 
      img="./images/recomCar/car4.svg" 
    />
    <Recomended 
      carname="MG ZX Exclusive" 
      cartype="Hatchback" 
      fuel="70L" 
      type="manual" 
      people="4" 
      price="76" 
      Avg="80.00" 
      img="./images/recomCar/car5.svg" 
    />
    <Recomended 
      carname="New MG ZS" 
      cartype="suv" 
      fuel="80L" 
      type="manual" 
      people="6" 
      price="80.00" 
      Avg="90.00" 
      img="./images/recomCar/car4.svg" 
    />
    <Recomended 
      carname="MG ZX Excite" 
      cartype="Hatchback" 
      fuel="90L" 
      type="manual" 
      people="4" 
      price="74" 
      Avg="80" 
      img="./images/recomCar/car1.svg" 
    />
    <Recomended 
      carname="New MG ZS" 
      cartype="suv" 
      fuel="80L" 
      type="manual" 
      people="6" 
      price="80" 
      img="./images/recomCar/car5.svg" 
    />
    <Recomended 
      carname="CR - V" 
      cartype="suv" 
      fuel="80L" 
      type="manual" 
      people="6" 
      price="80.00" 
      img="./images/recomCar/car2.svg" 
    />
  </div>
  </div>
</div>
        
     
    
  )
}

export default Category
