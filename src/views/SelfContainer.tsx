import { useSelector } from 'react-redux';
import { RootState } from '../reducers/Store';

const SelfContainer = () => {
  const name = useSelector((state: RootState) => state.statusChange.name);
  const hp = useSelector((state: RootState) => state.statusChange.hp);
  const atk = useSelector((state: RootState) => state.statusChange.atk);
  const def = useSelector((state: RootState) => state.statusChange.def);

  return (
    <>
      <div className="flex  justify-between w-full">
        <div
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
          className="bg-white w-[200px]"
        >
          <div className="m-4">
            <div className="text-2xl font-noto-serif-jp">{name}</div>
            <div className="text-2xl">HP {hp}</div>
            <div className="text-2xl">ATK / {atk} bit</div>
            <div className="text-2xl">DEF / {def} bit</div>
          </div>
        </div>
        <div className="w-[130px] h-[200px]  overflow-hidden">
          <img src="public/Img/self.jpg" className="w-auto h-auto" alt="" />
        </div>
      </div>
    </>
  );
};
export default SelfContainer;
