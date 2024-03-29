/* eslint-disable react/button-has-type */
import React from 'react';
import cn from 'classnames';

import s from './Button.module.scss';

interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  block?: boolean;
  color?: string;
  size: string;
  name?: string;
  type: 'button' | 'submit' | 'reset' | undefined;
}

const Button: React.FC<ButtonProps> = ({ children, type, onClick, block = false, color = 'green', size, name }) => {
  const classNames = cn(block, color, s[size as keyof typeof s], s[color as keyof typeof s], s.root);

  return (
    <button type={type} className={classNames} name={name} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
