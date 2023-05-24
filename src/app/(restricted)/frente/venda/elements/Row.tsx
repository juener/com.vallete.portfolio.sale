import { ProductsContext } from '@/app/utils/ProductsContext';
import { useContext } from 'react';

import { Menu } from '@headlessui/react'
import SideNav from "./SideNav";

interface ProductInterface {
  id: string;
  name: string;
  price: number;
  entryNumber: number;
}

export default function Row() {

  const { productsList } = useContext(ProductsContext);

  return (
    <>
      {productsList.map((product: ProductInterface, index: number) => (
        <>
          <Menu as="div">
            {({ open }) => (
              <div><Menu.Button className='w-full'>
                <SideNav product={product}>
                  <div key={index} className={`
                        flex w-full h-14 rounded-sm mb-1 hover:bg-indigo-700 hover:text-white hover:font-extrabold items-center p-2
                        bg-indigo-200 
                    `}>
                    <div className='flex flex-row w-full justify-between'>
                      <p>{product.name}</p><p>{product.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
                    </div>
                  </div>
                </SideNav>
              </Menu.Button>
              </div>
            )}
          </Menu>
        </>
      ))}
    </>
  )
}