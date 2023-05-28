import { ProductsContext } from '@/app/utils/ProductsContext';
import { useContext } from 'react';
import SideNavComponent from './SideNavComponent';

interface ProductInterface {
  id: string;
  name: string;
  price: number;
  entryNumber: number;
}

interface CartRowsInterface{
  withSidaNav?: boolean
}

export default function CartRowsComponent(props: CartRowsInterface) {

  const { productsList } = useContext(ProductsContext);

  return (
    <>
      {productsList.map((product: ProductInterface, index: number) => (
        props.withSidaNav ?
          <>
            <SideNavComponent type="product" product={product}>
              <div key={index} className={`
                      flex w-full h-14 rounded-sm mb-1 items-center p-2
                      bg-gradient-to-r from-indigo-200 via-indigo-200 to-pink-100
                      hover:from-indigo-700 hover:to-indigo-500 hover:text-white hover:font-extrabold hover:cursor-pointer
                  `}>
                <div className='flex flex-row w-full justify-between'>
                  <p>{product.name}</p><p>{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                </div>
              </div>
            </SideNavComponent>
          </>
          :
          <>
            <div key={index} className={`
                      flex w-full h-14 rounded-sm mb-1 items-center p-2
                      bg-gradient-to-r from-indigo-200 via-indigo-200 to-pink-100
                      hover:from-indigo-700 hover:to-indigo-500 hover:text-white hover:font-extrabold 
                  `}>
              <div className='flex flex-row w-full justify-between'>
                <p>{product.name}</p><p>{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
              </div>
            </div>
          </>
      ))}
    </>
  )
}