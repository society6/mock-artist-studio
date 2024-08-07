import {type loaderfunctionargs} from '@shopify/remix-oxygen';
import ArtistStudioLayout from '~/components/ArtistStudioLayout';
import ProductLaunchBanner from '~/components/ProductLaunchBanner';

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

export interface copyData {
  title: string;
  product: string;
  launch: string;
  description: string;
}

export default function ArtistStudio() {
  const newProductCopyData: copyData = {
    title: 'New Product Launch',
    product: 'Custom Linen Pillows',
    launch: 'Launch Date',
    description:
      'Lorem ipsum dolor sit amet consectetur. Nunc volutpat vel feugiat in hendrerit est nam dolor. Urna rhoncus lorem odio vestibulum massa nunc augue auctor id. Eget maecenas sodales ac enim quam nisl molestie.',
  };
  return (
    <div className="bg-asBackground">
      <ArtistStudioLayout>
        <div className="flex justify-between">
          <div className="ml-4 mb-5">
            <p className="font-normal text-3xl mb-2">Hello, Test User Name!</p>
            <p className="font-light">
              Welcome to your artist studio dashboard
            </p>
          </div>
          <div>
            <button className="btn btn-neutral mr-4 rounded-none uppercase w-[225px]">
              Upload New Design
            </button>
          </div>
        </div>
        <div className="mb-5 mx-4">
          <ProductLaunchBanner data={newProductCopyData} />
        </div>
        <div className="mx-4">
          <ProductLaunchBanner data={'goodbye'} />
        </div>
      </ArtistStudioLayout>
    </div>
  );
}
