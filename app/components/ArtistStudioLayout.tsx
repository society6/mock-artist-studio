import ArtistStudioSidebar from './ArtistStudioSidebar';

type Props = {
  children: any;
};

export default function ArtistStudioLayout({children}: Props) {
  return (
    <div className="flex bg-color-clay h-screen -ml-4">
      <ArtistStudioSidebar />
      <section className="w-screen h-screen">{children}</section>
    </div>
  );
}
