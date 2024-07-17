import {redirect, type loaderfunctionargs} from '@shopify/remix-oxygen';

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
    <div className='bg-color-clay h-full' >

      <section className="w-64 bg-amber-100 fixed h-full">
        <div className='my-2 mb-2'>
        <h1 className="text-2xl text-black font-bold">Society6</h1>
        </div>
        <hr />
        <ul className="mt-3 text-black font-bold ml-3">
          <li className="mb-2 rounded hover:shadow hover:bg-blue-400 py-2">
            ∆
            <a href="" className="px-3">
              Home
            </a>
          </li>
          <li className="mb-2 rounded hover:shadow hover:bg-blue-400 py-2">
            ∆
            <a href="" className="px-3">
              Designs
            </a>
          </li>
          <li className="mb-2 rounded hover:shadow hover:bg-blue-400 py-2">
            ∆
            <a href="" className="px-3">
              Pricing
            </a>
          </li>
          <li className="mb-2 rounded hover:shadow hover:bg-blue-400 py-2">
            ∆
            <a href="" className="px-3">
              Earnings
            </a>
          </li>
          <li className="mb-2 rounded hover:shadow hover:bg-blue-400 py-2">
            ∆
            <a href="" className="px-3">
              Analytics
            </a>
          </li>
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
