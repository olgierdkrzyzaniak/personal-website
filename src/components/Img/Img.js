import React from 'react';
import Image from 'next/image';

function Img(props) {
  return (
      <Image
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        {...props}
      />
);
}

export default Img;
