import { useSelector } from 'react-redux';
import { RootState } from '../reducers/Store';



const CardSelectCardCorrect = () => {
  const selectedCard = useSelector(
    (state: RootState) => state.correct.card[0]
  );

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
          <div className="absolute inset-0 bg-white bg-opacity-50 " />
          <div className="absolute inset-0 bg-[url('public/Img/back1.jpg')] bg-cover bg-center bg-opacity-50"></div>
          <div className="relative z-10 ">
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
export default CardSelectCardCorrect;
