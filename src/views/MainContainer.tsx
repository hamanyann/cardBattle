import React, { ReactNode } from 'react';

type MainContainerProps = {
  children: ReactNode;
};


const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
    return (
        <div className="relative w-[1120px] h-[635px] flex justify-center items-center">
            <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: `url(public/Img/backImg.jpg)` }}></div>
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}

export default MainContainer