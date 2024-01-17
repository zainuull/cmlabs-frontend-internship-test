'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { IDetailCategoryDataModel, IDetailCategoryModel } from '../../model/model';
import { useRouter } from 'next/navigation';

const DetailCard = ({ id }: { id: string }) => {
  const [datas, setDatas] = useState<IDetailCategoryModel>();
  let data = datas?.meals;
  const router = useRouter();

  useEffect(() => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`).then((res) => {
      setDatas(res.data);
    });
  }, [id]);

  const handleDetail = (id: string) => {
    router.push(`/meals/${id}`);
  };


  return (
    <>
      {data?.map((data: IDetailCategoryDataModel, index: number) => (
        <div
          onClick={() => handleDetail(data.idMeal)}
          key={index}
          className="w-[250px] h-[250px] lg:w-[300px] lg:h-[220px] bg-white rounded-lg shadow-xl flex flex-col justify-between relative lg:col-span-3 cursor-pointer z-20 hover:scale-105 transition-all">
          <div>
            <Image
              src={data.strMealThumb}
              alt={data.strMeal}
              width={150}
              height={150}
              className="absolute -top-5 translate-x-1/2 w-[125px] h-[125px] lg:w-[150px] lg:h-[150px]"
            />
          </div>
          <div className="flex flex-col items-center justify-center p-4">
            <h1 className="text-xl font-semibold">{data.strMeal.slice(0, 20)}</h1>
            <p className="text-gray-500">Rp. {Number(data.idMeal).toLocaleString()}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default DetailCard;
