const EnemyContainer = () => {
  return (
    <>
      <div className="flex  justify-between w-full">
      <div className="w-[130px] h-[200px]  overflow-hidden">
          <img src="public/Img/enemy2.jpg" className="w-auto h-auto" alt="" />
        </div>
        <div
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
          className="bg-white w-[200px]"
        >
          <div className="m-4">
            <div className="text-2xl">HP</div>
            <div>*</div>
            <div className="text-2xl">ATK / 5 bit</div>
            <div className="text-2xl">DEF / 2 bit</div>
          </div>
        </div>
       
      </div>
    </>
  );
};
export default EnemyContainer;
