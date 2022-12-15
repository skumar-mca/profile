import React from 'react';

const BaseIcon = (props) => {
  const {
    width = 16,
    height = 16,
    fillColor = 'rgb(70, 70, 94)',
    viewBox = '0 0 16 16',
    d,
    d2
  } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill={fillColor}
      viewBox={viewBox}
    >
      <path d={d} />
      {d2 && <path d={d2} />}
    </svg>
  );
};

export default BaseIcon;
