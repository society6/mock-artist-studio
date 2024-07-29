import {redirect, type loaderfunctionargs} from '@shopify/remix-oxygen';
import society6 from '/public/society6-logo-black-nav.png'
import { TbPalette } from "react-icons/tb";
import { BiHome } from "react-icons/bi";
import { LiaTagSolid } from "react-icons/lia";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { BsBarChart } from "react-icons/bs";
import { CiShop } from "react-icons/ci";
import { GoQuestion } from "react-icons/go";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { HiDotsVertical } from "react-icons/hi";








// fallback wild card for all unauthenticated routes in account section
export async function loader({context}: loaderfunctionargs) {
  return null;
}
/*
        w: width
        mt: margin-top
        mb: margin-bottom
        my: margin top/bottom
        py: padding top/bottom
        px: padding right
*/
export default function ArtistStudio() {
  return (
    <div className='flex bg-color-clay h-full' >

      <section className="w-64 bg-siteBackground">
        <div className='my-2 mb-2'>
          <div className='ml-4'>
            <img src={society6} className='size-1/2'/>
          <div className='text-sm font-display font-thin pt-2 pb-5'>
            Artist Studio
          </div>
          </div>
        </div>
        
        <ul className="mt-3 text-black font-bold ml-3">
          <li className="flex flex-row items-center mb-2 rounded hover:shadow hover:bg-blue-400 py-2">
          <BiHome />
            <a href="" className="px-3">
              Home
            </a>
          </li>
          <li className="flex flex-row items-center mb-2 rounded hover:shadow hover:bg-blue-400 py-2">
          <TbPalette />
            <a href="" className="px-3">
              Designs
            </a>
          </li>
          <li className="flex flex-row items-center mb-2 rounded hover:shadow hover:bg-blue-400 py-2">
          <LiaTagSolid />
            <a href="" className="px-3">
              Pricing
            </a>
          </li>
          <li className="flex flex-row items-center mb-2 rounded hover:shadow hover:bg-blue-400 py-2">
          <AiOutlineDollarCircle />
            <a href="" className="px-3">
              Earnings
            </a>
          </li>
          <li className="flex flex-row items-center mb-2 rounded hover:shadow hover:bg-blue-400 py-2">
          <BsBarChart />
            <a href="" className="px-3">
              Analytics
            </a>
          </li>

          <hr className="border-1 border-indigo-600 my-6 mr-2.5" />

          <li className="flex flex-row items-center mb-2 rounded hover:shadow hover:bg-blue-400 py-2">
          <CiShop />
            <a href="" className="px-3">
              Your Shop
            </a>
          </li>
          
        <div className='my-48'>
        <li className="flex flex-row items-center mb-2 rounded hover:shadow hover:bg-blue-400 py-2">
          <GoQuestion />
            <a href="" className="px-3">
              Help
            </a>
          </li>
          <hr className='py-2.5 bg-red-300' />

          <div className='flex items-center'>
          <IoPeopleCircleOutline className='size-8' />
          <div className='flex flex-col px-2'>
            <p className='font-normal'>Test User Name</p>
            <p className='font-thin text-xs'>Basic Plan - up to 100 designs</p>
          </div>
          <HiDotsVertical className='size-5' />

          </div>
      
        </div>

        </ul>

      </section>

      
      <section>Body</section>
    </div>
  );
}

/*
    <div className="grid grid-cols-8 grid-rows-8 gap-3">
      <section className="col-start-1 col-span-1 col-end-1 row-start-1 row-span-8 row-end-1 bg-green-600 rounded">
        Nav
      </section>
      <section className="row-span-1 col-span-7 bg-yellow-500 rounded">
      Body
      </section>
    </div>
*/
