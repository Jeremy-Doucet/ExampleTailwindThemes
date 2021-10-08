import React, { FC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Chevron from '../../public/icons/Vector.png';

import { Button } from './Button';

export const BackButton: FC = () => {
  const router = useRouter();

  const goBack = (): void => {
    router.back();
  };

  return (
    <Button variant="link" onClick={goBack}>
      <Image src={Chevron} height={'10px'} width={'10px'} /> Back
    </Button>
  );
};
