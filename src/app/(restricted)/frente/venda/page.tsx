import React from 'react';
import { ProductsProvider } from '@/app/utils/ProductsContext';

import HeaderComponent from './HeaderComponent'
import MiddleComponent from './MiddleComponent'
import FooterComponent from './FooterComponent'

export default function Home() {
  return (
    <ProductsProvider>
      <div className='flex flex-col h-screen bg-yellow-400'>
        <HeaderComponent />
        <MiddleComponent />
        <FooterComponent />
      </div>
    </ProductsProvider>
  )
}
