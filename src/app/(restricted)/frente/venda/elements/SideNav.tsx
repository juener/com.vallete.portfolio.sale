import { Fragment, useState, useContext } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ProductsContext } from '@/app/utils/ProductsContext';
import Input from './Input';
import Button from './Button';

interface SelectedProduct {
  id: string,
  name: string,
  price: number,
  children: any
}

export default function SideNav(props: any) {
  const [open, setOpen] = useState(false)
  const { removeProduct, removeAllProducts } = useContext(ProductsContext);

  return (
    <>
      <a
        className="w-full"
        onClick={() => setOpen(true)}
      >
        {props.children}
      </a>
      <Transition.Root show={open} as={Fragment}>

        <Dialog as="div" static className="fixed inset-0 overflow-hidden" open={open} onClose={setOpen}>
          <div className="absolute inset-0 overflow-hidden">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="absolute inset-0 bg-blue-950 bg-opacity-90 transition-opacity" />
            </Transition.Child>
            <div className="fixed inset-y-0 left-0 max-w-full flex">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-100"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <div className="relative w-screen max-w-md">
                  <div className="h-full flex flex-col shadow-xl overflow-y-auto bg-gradient-to-tl from-pink-100 to-green-100">
                    <div className="flex flex-row items-center justify-end text-5xl font-bold bg-blue-950">
                      <div className="flex flex-row justify-between flex-grow text-white">
                        <p className='p-4 text-bold'>{props.product.name}</p>
                      </div>
                    </div>
                    <div className="flex flex-col w-full fixed bottom-0 max-h-[calc(100vh-20px)]  text-white pb-6 px-6">
                      <Input />
                      <div className='flex flex-row items-center justify-between'>
                        <Button
                          name={`-`}
                          onClick={() => { removeProduct(props.product.entryNumber); setOpen(false); }}
                          className={`
                                        bg-red-800 hover:bg-red-700 mt-10
                                        font-extrabold text-5xl
                                    `}
                        />
                        <p className='text-black font-black text-center text-5xl pt-10 mx-10'>1</p>
                        <Button
                          name={`+`}
                          onClick={() => dummy()}
                          // bg-green-800 hover:bg-green-700 mt-10
                          className={`
                                      bg-gray-200 hover:bg-gray-200 mt-10 
                                      font-extrabold text-5xl
                                  `}
                        />
                      </div>
                      <Button
                        name={`Desistir de Alterar`}
                        onClick={() => setOpen(false)}
                        className={`
                                    bg-indigo-900 hover:bg-indigo-700 mt-10                                    
                                `}
                      />
                      <Button
                        name={`Limpar Produtos Ainda Não Confirmados`}
                        onClick={() => { removeAllProducts(); setOpen(false); }}
                        className={`
                                    bg-orange-700 hover:bg-orange-600 mt-10                                     
                                `}
                      />
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog >
      </Transition.Root >
    </>
  )
}

function dummy() {
  // Router.push('/login');
}

