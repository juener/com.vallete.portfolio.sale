import { ProductsContext } from '@/app/utils/ProductsContext';
import { useContext } from 'react';

import { Menu } from '@headlessui/react'
import SideNav from "./elements/SideNav";

interface ProductInterface {
  id: string;
  name: string;
  price: number;
  entryNumber: number;
}

export default function CartRowsComponent() {

  const { productsList } = useContext(ProductsContext);

  return (
    <>
      {productsList.map((product: ProductInterface, index: number) => (
        <>
          <Menu as="div">
            <Menu.Button className='w-full'>
              <SideNav product={product}>
                <div key={index} className={`
                        flex w-full h-14 rounded-sm mb-1 items-center p-2
                        bg-gradient-to-r from-indigo-200 via-indigo-200 to-pink-100
                        hover:from-indigo-700 hover:to-indigo-500 hover:text-white hover:font-extrabold 
                    `}>
                  <div className='flex flex-row w-full justify-between'>
                    <p>{product.name}</p><p>{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                  </div>
                </div>
              </SideNav>
            </Menu.Button>
          </Menu>
        </>
      ))}
    </>
  )
}