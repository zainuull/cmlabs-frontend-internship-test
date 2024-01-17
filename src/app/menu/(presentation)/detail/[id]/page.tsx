import Image from 'next/image';
import background from '../../../../../../public/bg.png';
import DetailCard from '../../(components)/detail.card';

const DetailPage = ({ params }: { params: { id: string } }) => {
  const id = params.id;

  return (
    <main className="flex h-[1100px] lg:min-h-[3500px] flex-col items-center justify-between relative lg:overflow-hidden overflow-y-hidden">
      <Image src={background} alt="Background" className="w-full h-full" />
      <div className="absolute w-full flex flex-col justify-center items-center mt-20">
        <h1 className="text-2xl font-semibold">Detail Category</h1>
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-y-10 gap-10 mt-10">
          <DetailCard id={id} />
        </div>
      </div>
    </main>
  );
};

export default DetailPage;
