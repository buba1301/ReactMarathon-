import React from 'react';

interface ClassName {
  className: string;
}
const Heading: React.FC<ClassName> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export default Heading;
