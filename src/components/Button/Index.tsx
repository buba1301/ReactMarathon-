import React from 'react';
import cn from 'classnames';

import s from './Button.module.scss';

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  block?: boolean;
  color?: string;
  size: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, block = false, color = 'green', size }) => {
  const classNames = cn(block, color, s[size as keyof typeof s], s[color as keyof typeof s], s.root);

  return (
    <button type="button" className={classNames} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
