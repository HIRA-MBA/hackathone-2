
import Popularcar from "@/components/popularcar";
import Recomended from "@/components/Recomended";
import Heroimage from "@/components/heroimage";
import Purpose from "@/components/purpose";










export default function Home() {
  return (
    <div className="mt-2 gap-1 bg-[#C3D4E9] ">
      
     
      
      <Heroimage/>
      <Purpose/>
      <div className="mt-6  ">
  {/* Section Header */}
  <div className="w-full flex justify-between">
    <p className="font-semibold text-sm text-[#90A3BF]">Popular Car</p>
    <p className="font-semibold text-xs text-[#3563E9] cursor-pointer">View All</p>
  </div>
{/* Responsive Popular Cars */}
<div className="mt-4 w-full">
  {/* Show only 1 Popularcar on small screens */}
  <div className="sm:hidden">
    <Popularcar 
      carname="Koenigsegg" 
      cartype="sports" 
      img="/images/HeroCar.svg" 
      fuel="90L" 
      type="manual" 
      people="2" 
      price="99.00" 
    />
  </div>

  {/* Flex layout for larger screens, covering full width */}
  <div className="hidden sm:flex flex-wrap gap-4 w-full">
    <Popularcar 
      carname="Koenigsegg" 
      cartype="sports" 
      img="/images/HeroCar.svg" 
      fuel="90L" 
      type="manual" 
      people="2" 
      price="99.00" 
    />
    <Popularcar 
      carname="Nissan GT - R" 
      cartype="sports" 
      img="/images/car2.svg" 
      fuel="80L" 
      type="Manual" 
      people="2" 
      price="80.00" 
      Avg="$100.00" 
    />
    <Popularcar 
      carname="Rolls - Royce" 
      cartype="sedan" 
      img="/images/Car3.svg" 
      fuel="70L" 
      type="manual" 
      people="4" 
      price="96.00" 
    />
    <Popularcar 
      carname="Rolls - Royce" 
      cartype="sports" 
      img="/images/Car4.svg" 
      fuel="80L" 
      type="manual" 
      people="2" 
      price="80.00" 
    />
  </div>
</div>

 
  {/* Responsive Layout for Recommended Cars */}
  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
  </div>
</div>

<div className="w-full flex justify-between items-center mt-6 px-4   sm:px-0">
  {/* Show More Car Button */}
  <button className="w-[120px]  h-[36px] rounded-sm bg-[#3563E9] font-semibold text-xs sm:text-sm ml-16 sm:ml-22">
    Show More Car
  </button>
  {/* Car count text */}
  <span className="font-bold text-sm sm:text-xs text-[#90A3BF] ">
    120 Cars
  </span>
</div>




    </div>)}



















