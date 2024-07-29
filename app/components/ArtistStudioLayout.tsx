import ArtistStudioSidebar from './ArtistStudioSidebar';

type Props = {
  children: any;
};

export default function ArtistStudioLayout({children}: Props) {
  return (
    <div className="flex bg-color-clay h-full">
      <ArtistStudioSidebar />
      <section>{children}</section>
    </div>
  );
}
