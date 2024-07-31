import  { useState, useEffect } from 'react';
import { CardData } from "../components/types";

interface Card {
  card:CardData[];
}


const url = 'http://localhost:3000/data/';

const Card = () => {
  const [cards, setCards] = useState<CardData[]>([]);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setCards(data));
  }, []);

  const filteredCards = cards.filter(card => card.id == 5);
 
  

  return (
    <>
      {filteredCards.map(card => (
        <div
          style={{
            backgroundImage: `url(public/Img/back1.jpg`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
          }}
          key={card.id}
          className=" w-[300px] h-[450px] border-[6px] border-gray-600 p-1 rounded relative"
        >
          <div className="absolute inset-0 bg-white bg-opacity-50 " />

          <div className="relative z-10 ">
            <div className="">
              <p className="bg-white pl-2 pt-1 mx-2">{card.name}</p>
              <p className="bg-white pt-1 pl-2 pb-1 mx-2 text-xs">{card.formal}</p>
            </div>

            <div className="flex justify-center items-center mt-2 mb-2 ">
              <img
                src={card.img}
                alt={card.name}
                className=" w-56 h-56 border-[6px] border-gray-600  "
              />
            </div>
            <div >
              <p className="mx-2  bg-opacity-75 bg-white pl-2 pt-1 pb-1">
                【{card.category}】
              </p>

              <p
               
                className="mx-2  bg-opacity-75 pl-2 bg-white text-sm h-[90px]"
              >
                {card.description}
              </p>
            </div>
            {/* <p className="">{card.id}</p> */}
          </div>
        </div>
      ))}
    </>
  );
};
export default Card;
