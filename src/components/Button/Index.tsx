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
  const classNames = cn(block, color, s[size], s[color], s.root);

  return (
    <button type="button" className={classNames} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

// className={cn(s.root, {[s.yellow]:yellow})}
