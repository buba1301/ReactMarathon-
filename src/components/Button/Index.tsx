import React from 'react';

import s from './Button.module.scss';

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button type="button" className={s.root} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

// className={cn(s.root, {[s.yellow]:yellow})}
