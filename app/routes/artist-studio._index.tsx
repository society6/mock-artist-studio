import {redirect, type loaderfunctionargs} from '@shopify/remix-oxygen';
import ArtistStudioLayout from '~/components/ArtistStudioLayout';
import ArtistStudioSidebar from '~/components/ArtistStudioSidebar';
import CardBanner from '~/components/CardBanner';

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


import component here 
create component and what it'll look like
within component...make it recyclable

*/
export default function ArtistStudio() {
  return (
    <div>
      <ArtistStudioLayout>
        <CardBanner />
      </ArtistStudioLayout>
    </div>
  );
}
