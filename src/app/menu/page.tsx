import Image from 'next/image';
import background from '../../../public/bg.png';
import Card from './(presentation)/(components)/card';
import DetailCard from './(presentation)/(components)/detail.card';

const MenuPage = () => {

  return (
    <main className="flex h-[1100px] lg:h-[1700px] flex-col items-center justify-between relative lg:overflow-hidden overflow-y-hidden">
      <Image src={background} alt="Background" className="w-full h-full object-cover" />
      {/* Category */}
      <div className="absolute w-full flex flex-col justify-center items-center mt-20">
        <h1 className="text-2xl font-semibold">Top Category</h1>
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-y-20 gap-10 mt-10">
          <Card />
        </div>
      </div>
    </main>
  );
};

export default MenuPage;
