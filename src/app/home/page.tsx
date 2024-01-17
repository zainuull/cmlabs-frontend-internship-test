'use client'
import Image from 'next/image';
import background from '../../../public/bg.png';
import Card from './(presentation)/(components)/card';
import Banner from './(presentation)/(components)/banner';

const HomePage = () => {


  return (
    <main className="flex h-[1100px] lg:h-screen flex-col items-center justify-between relative lg:overflow-hidden overflow-y-hidden">
      <Image src={background} alt="Background" className="w-full h-full object-cover" />
      {/* Banner */}
      <Banner />
      <div className="absolute bottom-5 grid grid-cols-2 lg:grid-cols-12 gap-y-20 gap-10">
        {/* Card */}
        <Card />
      </div>
    </main>
  );
};

export default HomePage;
