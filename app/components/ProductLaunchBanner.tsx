import {Link} from '@remix-run/react';
import {CiCircleChevRight} from 'react-icons/ci';

import type {copyData} from '~/routes/artist-studio._index';

export default function ProductLaunchBanner({data}: copyData) {
  return (
    <div className="bg-mainColorTheme">
      <div className="card-body flex flex-row justify-between gap-8">
        <img
          alt="ice cream cat pillow"
          className="w-32 h-32"
          src="public/iceCreamCat.png"
        />
        <div>
          <p className="uppercase font-extrabold text-xs mb-1">{data.title}</p>
          <p className="text-xl font-light mb-1">{data.product}</p>
          <p className="font-bold flex flex-row mb-1">{`${data.launch}: 1/4/24`}</p>
          <p className="font-extralight mb-3">{data.description}</p>
          <Link to={'/'} className="flex flex-row gap-1">
            Learn More
            <div className="mt-1">
              <CiCircleChevRight />
            </div>
          </Link>
        </div>
        <div className="card-actions">
          <button className=" btn-square btn-sm bg-mainColorTheme">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 bg-mainColorTheme"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.75"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
