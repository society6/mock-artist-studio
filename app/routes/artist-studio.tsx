import {redirect, type loaderfunctionargs} from '@shopify/remix-oxygen';

// fallback wild card for all unauthenticated routes in account section
export async function loader({context}: loaderfunctionargs) {
  return null;
}

export default function ArtistStudio() {
  return (
    <div>
      <h1>Artist Studio</h1>
    </div>
  );
}
