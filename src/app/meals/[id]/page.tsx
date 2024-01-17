import Image from 'next/image';
import background from '../../../../public/bg.png';
import Card from '../(presentation)/(components)/card';

const MealsPage = ({ params }: { params: { id: string } }) => {
  return (
    <main className="flex h-[1100px] lg:h-[1700px] flex-col items-center justify-between relative lg:overflow-hidden">
      <Image src={background} alt="Background" className="w-full h-full object-cover" />
      {/* Category */}
      <div className="absolute w-full flex flex-col justify-center items-center mt-20">
        <h1 className="text-2xl font-semibold">Detail Meals</h1>
        <Card id={params.id} />
      </div>
    </main>
  );
};

export default MealsPage;
