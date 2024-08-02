import { useSelector } from 'react-redux';
import { RootState } from '../reducers/Store';

const CardSelectCardSelect = () => {
  const selectedCard = useSelector(
    (state: RootState) => state.quizCard.cards[0]
  );
  const correct = useSelector((state: RootState) => state.correct.card[0]);

  return (
    <>
      <div className="flex justify-center items-center ">
        <div
          style={{
            backgroundImage: `url(public/Img/back1.jpg`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
          }}
          key={selectedCard.id}
          className=" w-[250px] h-[400px] border-[4px] border-gray-600  rounded relative "
        >

          {selectedCard.name !== correct.name ? (
            <div className="absolute inset-0 bg-black bg-opacity-50 " style={{ zIndex: 20 }}></div>
          ) : null}
          
          
          
          <div className="relative " >
            <div className="">
              <p
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
                className="bg-white flex justify-center items-center text-xm w-[242px] h-[52px] "
              >
                {selectedCard.name}
              </p>
              <p
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
                className="bg-white flex justify-center items-center text-xs w-[242px] h-[24px]"
              >
                {selectedCard.formal}
              </p>
            </div>

            <div className="flex justify-center items-center mt-2 mb-2 ">
              <img
                src={selectedCard.img}
                alt={selectedCard.name}
                className=" w-56 h-56 border-[4px] border-gray-600  "
              />
            </div>
            <div>
              <p
                className="text-left text-xm bg-opacity-75 pl-2 bg-white  h-[70px] pt-2  "
                dangerouslySetInnerHTML={{ __html: selectedCard.status }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardSelectCardSelect;
