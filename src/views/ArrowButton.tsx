'use client';
import React from 'react';
import { MoveRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useDispatch, useSelector } from 'react-redux';
import { toggleReset } from '@/features/BattleTextSlice';
import { toggleDisplayCard , setAddCards} from '@/features/QuizCardSlice';
import { setCard } from '@/features/CorrectSlice';
import { RootState } from '@/reducers/Store';


interface ArrowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  textColor?: string;
  buttonOverlayColor?: string;
  borderColor?: string;
  iconColor?: string;
  className?: string;
}

export default function ArrowButton({
  text = 'Open',
  textColor = 'white',
  buttonOverlayColor = 'black',
  borderColor = 'blue',
  iconColor = 'white',
  className,
  ...props
}: ArrowButtonProps) {

  const newCorrectRandom = useSelector(
    (state: RootState) => state.quizCard.newCard[0]
  );

const dispatch = useDispatch();
  const handleButtonClick = () => {
    dispatch(toggleReset());
    dispatch(toggleDisplayCard());   
    dispatch(setAddCards())
    dispatch(setCard([newCorrectRandom]));
  };

  return (
    <div className="absolute bottom-[-160px] right-[60px]">
      <button
        style={{ borderColor: borderColor }}
        {...props}
        className={cn(
          'group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-blue-400 bg-background px-12 py-6 text-lg font-medium shadow-md transition duration-300 ease-out',
          className
        )}
        onClick={handleButtonClick}
      >
        <span
          style={{ background: buttonOverlayColor }}
          className={cn(
            'ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-blue-400 text-white duration-300 group-hover:translate-x-0 '
          )}
        >
          <MoveRight
            style={{ color: iconColor, width: '24px', height: '24px' }}
          />
        </span>
        <span
          style={{ color: textColor }}
          className={cn(
            'absolute flex h-full w-full transform items-center justify-center text-lg font-bold transition-all duration-300 ease-in-out group-hover:translate-x-full'
          )}
        >
          {text}
        </span>
        <span className="invisible relative">Button</span>
      </button>
    </div>
  );
}
