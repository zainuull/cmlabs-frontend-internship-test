'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { IMealsModel, IMealsDataModel } from '../../model/model';
import { useRouter } from 'next/navigation';
import YouTube, { YouTubeProps } from 'react-youtube';

const Card = ({ id }: { id: string }) => {
  const [datas, setDatas] = useState<IMealsModel>();
  let data = datas?.meals;
  const router = useRouter();

  useEffect(() => {
    axios.get(`http://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then((res) => {
      setDatas(res.data);
    });
  }, []);


  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps['opts'] = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  // Function to extract video ID from YouTube URL
  const extractVideoId = (url: string) => {
    const urlObj = new URL(url);
    return urlObj.searchParams.get('v') || '';
  };

  // Extract video IDs from the array of objects
  const resultArray = data?.map((item) => extractVideoId(item.strYoutube)) || [];

  // Combine video IDs into a single string
  const result = resultArray.join(',');


  return (
    <>
      {data?.map((data: IMealsDataModel, index: number) => (
        <div key={index} className="flex flex-col gap-y-6">
          <div className="w-[80vw]  bg-white rounded-lg shadow-xl grid grid-cols-1 lg:grid-cols-2 relative z-20 mt-10 lg:mt-20">
            <div className="w-full lg:col-span-1">
              <Image
                src={data.strMealThumb}
                alt={data.strMealThumb}
                width={150}
                height={150}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-4 lg:col-span-1">
              <h1 className="text-xl font-semibold">{data.strCategory}</h1>
              <h1 className="text-gray-500 text-sm">Category : {data.strCategory}</h1>
              <h1 className="text-gray-500 text-sm">Area : {data.strArea}</h1>
              <h1 className="text-gray-500 mb-4 text-xs mt-2">{data.strInstructions}</h1>
              <div className="flex items-center justify-between w-full border-t-2 border-gray-300 py-2">
                <div className="flex flex-col gap-y-2">
                  <p className="text-gray-500">Ingredients</p>
                  <p>{data.strIngredient1}</p>
                  <p>{data.strIngredient2}</p>
                  <p>{data.strIngredient3}</p>
                  <p>{data.strIngredient4}</p>
                  <p>{data.strIngredient5}</p>
                  <p>{data.strIngredient6}</p>
                  <p>{data.strIngredient7}</p>
                  <p>{data.strIngredient8}</p>
                  <p>{data.strIngredient9}</p>
                  <p>{data.strIngredient10}</p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="text-gray-500">Measure</p>
                  <p>{data.strMeasure1}</p>
                  <p>{data.strMeasure2}</p>
                  <p>{data.strMeasure3}</p>
                  <p>{data.strMeasure4}</p>
                  <p>{data.strMeasure5}</p>
                  <p>{data.strMeasure6}</p>
                  <p>{data.strMeasure7}</p>
                  <p>{data.strMeasure8}</p>
                  <p>{data.strMeasure9}</p>
                  <p>{data.strMeasure10}</p>
                </div>
              </div>
            </div>
          </div>
          {/* Tutorials */}
          <div className="flex flex-col items-center gap-y-2 w-full h-[500px] lg:h-[700px]">
            <h1 className="text-xl font-semibold">Tutorials</h1>
            <YouTube videoId={result} opts={opts} onReady={onPlayerReady} className="w-full h-full mb-20" />
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
