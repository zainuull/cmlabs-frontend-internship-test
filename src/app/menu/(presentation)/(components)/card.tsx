'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ICategoryDataModel, ICategoryModel } from '../../model/model';
import { useRouter } from 'next/navigation';

const Card = () => {
  const [datas, setDatas] = useState<ICategoryModel>();
  let data = datas?.categories;
  const router = useRouter();

  useEffect(() => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`).then((res) => {
      setDatas(res.data);
    });
  }, []);

  const handleClick = (id: string) => {
    router.push(`/menu/detail/${id}`);
  };

  return (
    <>
      {data?.map((data: ICategoryDataModel, index: number) => (
        <div
          key={index}
          onClick={() => handleClick(data.strCategory)}
          className="w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] bg-white rounded-lg shadow-xl flex flex-col justify-between relative lg:col-span-3 cursor-pointer z-20">
          <div>
            <Image
              src={data.strCategoryThumb}
              alt={data.strCategory}
              width={150}
              height={150}
              className="absolute -top-10 translate-x-1/2 w-[125px] h-[125px] lg:w-[150px] lg:h-[150px] object-cover"
            />
          </div>
          <div className="flex flex-col items-center justify-center p-4">
            <h1 className="text-xl font-semibold">{data.strCategory}</h1>
            <h1 className="text-gray-500 mb-4">{index + 10} calories</h1>
            <div className="flex items-center justify-between w-full border-t-2 border-gray-300 py-2">
              <p className="text-gray-500">Time</p>
              <p className="text-gray-500">Person</p>
            </div>
            <div className="flex items-center justify-between w-full">
              <p>{index + 25} Minute</p>
              <p>{index + 1} Person</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
