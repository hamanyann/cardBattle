import { toggleResult } from "@/features/BattleTextSlice";
import { useDispatch } from "react-redux";


const WinButton = () => {
    const dispatch = useDispatch();
  const handleButtonClick = () => {
   dispatch(toggleResult());
  
  };

  return (
    <>
      <button className="p-[3px] relative" onClick={handleButtonClick}>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent text-4xl">
          不具合修正完了
        </div>
      </button>
    </>
  );
};
export default WinButton;
