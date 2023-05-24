import { Fragment, useState, useContext } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export default function SideNav(props: any) {
  const [open, setOpen] = useState(false)

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
              <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
            <div className="fixed inset-y-0 left-0 max-w-full flex">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <div className="relative w-screen max-w-md">
                  <div className="h-full flex flex-col pt-6 shadow-xl overflow-y-auto bg-blue-950">
                    <div className="flex flex-row items-center justify-end text-5xl font-bold">
                      {/* <img src={props.partner?.avatar ?? "/favicon.ico"} className="rounded-full mr-3 w-24" /> */}
                      <div className="flex flex-row justify-between flex-grow text-white">
                        <p className='p-2 text-bold'>{props.name}</p>
                      </div>
                    </div>
                    <div className="mt-6 relative flex flex-col h-full bg-gradient-to-tl from-pink-100 to-green-100 text-white">
                      <div className="flex-grow px-6 pt-6 content-between">
                        <div className="sm:grid sm:grid-cols-3 sm:gap-4">
                          <dt className="text-sm font-medium text-gray-700">Name:</dt>
                          <dd className="mb-3 text-sm text-black sm:mt-0 sm:col-span-2">{props.name}</dd>
                        </div>
                      </div>
                      <div className="pb-6 px-6" aria-hidden="true">
                        <div className='flex flex-row items-center justify-between'>
                          <button onClick={() => dummy()} className={`
                                                    bg-red-900 px-3 py-2 rounded-md bottom-0
                                                    hover:cursor-pointer hover:bg-red-700 w-1/3 h-20
                                                    text-white font-black text-center text-5xl
                                                `}>-</button>
                          <p className='text-black font-black text-center text-5xl'>1</p>
                          <button onClick={() => dummy()} className={`
                                                    bg-green-900 px-3 py-2 rounded-md bottom-0 
                                                    hover:cursor-pointer hover:bg-green-700 w-1/3 h-20
                                                    text-white font-black text-center text-5xl
                                                `}>+</button>
                        </div>
                        <button onClick={() => setOpen(false)} className={`
                                                    bg-indigo-900 px-3 py-2 rounded-md bottom-0 mt-10
                                                    hover:cursor-pointer hover:bg-indigo-700 w-full h-20
                                                    text-white text-sm font-medium text-center
                                                `}>Desistir de Alterar</button>
                        <button onClick={() => setOpen(false)} className={`
                                                    bg-orange-700 px-3 py-2 rounded-md bottom-0 mt-10 
                                                    hover:cursor-pointer hover:bg-orange-500 w-full h-20
                                                    text-white text-sm font-medium text-center
                                                `}>Limpar Produtos Ainda Não Confirmados</button>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

function dummy() {
  // Router.push('/login');
}