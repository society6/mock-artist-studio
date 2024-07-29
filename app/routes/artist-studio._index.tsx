import {redirect, type loaderfunctionargs} from '@shopify/remix-oxygen';
import ArtistStudioLayout from '~/components/ArtistStudioLayout';
import ArtistStudioSidebar from '~/components/ArtistStudioSidebar';

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
    <div>
      <ArtistStudioLayout>
        <h1>Main Artist Studio Page</h1>
      </ArtistStudioLayout>
    </div>
  );
}
