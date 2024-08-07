import society6 from '/public/society6-logo-black-nav.png';
import {TbPalette} from 'react-icons/tb';
import {BiHome} from 'react-icons/bi';
import {LiaTagSolid} from 'react-icons/lia';
import {AiOutlineDollarCircle} from 'react-icons/ai';
import {BsBarChart} from 'react-icons/bs';
import {CiShop} from 'react-icons/ci';
import {GoQuestion} from 'react-icons/go';
import {IoPeopleCircleOutline} from 'react-icons/io5';
import {HiDotsVertical} from 'react-icons/hi';
import {NavLink} from '@remix-run/react';

export default function ArtistStudioSidebar() {
  return (
    <section className="w-72 h-max bg-mainColorTheme">
      <div className="my-2 mb-2">
        <div className="ml-4">
          <img src={society6} className="size-1/2" alt="" />
          <div className="text-sm font-display font-thin pt-2 pb-5">
            Artist Studio
          </div>
        </div>
      </div>

      <ul className="mt-3 text-black font-bold ml-3">
        <NavLink
          className="flex flex-row items-center mb-2 rounded hover:shadow hover:bg-blue-400 py-2"
          to={'/'}
        >
          <BiHome />
          <span className="px-3">Home</span>
        </NavLink>
        <NavLink
          className="flex flex-row items-center mb-2 rounded hover:shadow hover:bg-blue-400 py-2"
          to={'/artist-studio/designs'}
        >
          <TbPalette />
          <span className="px-3">Designs</span>
        </NavLink>
        <NavLink
          className="flex flex-row items-center mb-2 rounded hover:shadow hover:bg-blue-400 py-2"
          to={'/artist-studio/pricing'}
        >
          <LiaTagSolid />
          <span className="px-3">Pricing</span>
        </NavLink>
        <NavLink
          className="flex flex-row items-center mb-2 rounded hover:shadow hover:bg-blue-400 py-2"
          to={'/artist-studio/earnings'}
        >
          <AiOutlineDollarCircle />
          <span className="px-3">Earnings</span>
        </NavLink>
        <NavLink
          className="flex flex-row items-center mb-2 rounded hover:shadow hover:bg-blue-400 py-2"
          to={'/artist-studio/analytics'}
        >
          <BsBarChart />
          <span className="px-3">Analytics</span>
        </NavLink>

        <hr className="border-1 border-indigo-600 my-6 mr-2.5" />

        <NavLink
          className="flex flex-row items-center mb-2 rounded hover:shadow hover:bg-blue-400 py-2"
          to={''}
        >
          <CiShop />
          <span className="px-3">Your Shop</span>
        </NavLink>

        <div className="my-48">
          <NavLink
            className="flex flex-row items-center mb-2 rounded hover:shadow hover:bg-blue-400 py-2"
            to={''}
          >
            <GoQuestion />
            <span className="px-3">Help</span>
          </NavLink>
          <hr className="py-2.5 bg-red-300" />

          <div className="flex items-center">
            <IoPeopleCircleOutline className="size-8" />
            <div className="flex flex-col px-2">
              <p className="font-normal">Test User Name</p>
              <p className="font-thin text-xs">
                Basic Plan - up to 100 designs
              </p>
            </div>
            <HiDotsVertical className="size-5" />
          </div>
        </div>
      </ul>
    </section>
  );
}
