import { Fragment, useState, useContext } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import SideNavTableComponent from './SideNavTableComponent';
import SideNavPaymentComponent from './SideNavPaymentComponent';
import SideNavProductComponent from './SideNavProductComponent';
import SideNavPreviewComponent from './SideNavPreviewComponent';

interface SideNavInterface {
  type: string
  children: any
  product?: any
  full?: boolean
  right?: boolean
}

export default function SideNavComponent(props: SideNavInterface) {
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
              <Dialog.Overlay className="absolute inset-0 bg-blue-950 bg-opacity-90 transition-opacity" />
            </Transition.Child>
            <div className="fixed inset-y-0 left-0 max-w-full flex">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300 sm:duration-300"
                enterFrom={props.right ? "translate-x-full" : "-translate-x-full"}
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-300"
                leaveFrom="translate-x-0"
                leaveTo={props.right ? "translate-x-full" : "-translate-x-full"}
              >
                <div className={`relative w-screen ${props.full ? null : "max-w-md"}`}>
                  {props.type === 'product' ? <SideNavProductComponent setOpen={setOpen} product={props.product} /> : null}
                  {props.type === 'table' ? <SideNavTableComponent setOpen={setOpen} /> : null}
                  {props.type === 'payment' ? <SideNavPaymentComponent setOpen={setOpen} /> : null}
                  {props.type === 'preview' ? <SideNavPreviewComponent setOpen={setOpen} product={props.product} /> : null}
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog >
      </Transition.Root >
    </>
  )
}

