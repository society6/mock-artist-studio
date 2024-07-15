import {redirect, type loaderfunctionargs} from '@shopify/remix-oxygen';

// fallback wild card for all unauthenticated routes in account section
export async function loader({context}: loaderfunctionargs) {
  return null;
}

export default function ArtistStudio() {
  return (
    <div className="grid grid-cols-8 grid-rows-8 gap-3">
      <section className="col-start-1 col-span-1 row-start-1 row-span-8 row-end-8 bg-green-600 rounded">Nav</section>
      <section className="row-span-2 col-span-7 bg-yellow-500 rounded">Body</section>
    </div>
  );
}
