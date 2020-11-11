import React from 'react';
import cn from 'classnames';

import s from './Button.module.scss';

type Size = 'small' | 'normal';

type Color = 'yellow' | 'green';

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  block?: boolean;
  color?: Color;
  size: Size;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, block = false, color = 'green', size }) => {
  const classNames = cn(block, color, s[size], s[color], s.root);

  return (
    <button type="button" className={classNames} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
