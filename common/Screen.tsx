import React, { FC, ReactNode } from 'react';
import Head from 'next/head';

import { SideNav } from '../SideNav';

export const Screen: FC<ScreenProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-5">
        <div className="col-span-1">
          <SideNav />
        </div>
        <div className="flex justify-center items-center col-span-4">{children}</div>
      </div>
    </>
  );
};

export interface ScreenProps {
  title?: string;
  children?: ReactNode;
}
