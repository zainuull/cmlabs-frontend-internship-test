import Image from 'next/image';
import useStore from '../store/store.data';
const Banner = () => {
  const [data] = useStore();

  return (
    <div className="absolute w-full h-full flex justify-between mt-40 px-12 ">
      <h1 className="uppercase hidden lg:block lg:text-4xl text-[#535353]">Simple</h1>
      <div className="w-full h-full flex justify-center absolute -top-20">
        <Image
          src={data.strCategoryThumb || 'https://www.themealdb.com/images/category/beef.png'}
          alt="Food"
          width={350}
          height={350}
          className="object-cover w-[350px] h-[350px] lg:w-[550px] lg:h-[350px] transition-all"
        />
      </div>
      <h1 className="uppercase hidden lg:block lg:text-4xl text-[#535353]">Quick</h1>
    </div>
  );
};

export default Banner;
