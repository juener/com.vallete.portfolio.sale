import { Menu } from '@headlessui/react'
import SideNav from "./SideNav";

interface RowProps {
  odd?: boolean,
  product?: any,
  selectedProducts?: any,
  children: any
}

export default function Row(props: RowProps) {
  return (
    <>
      {props.selectedProducts.map((product: any) => (


        <>


          {/* <div className="absolute inset-y-0 left-0 flex items-center pr-2 sm:static sm:inset-auto sm:mr-6 sm:ml-6 sm:pr-0"> */}
          {/* Profile dropdown */}
          {/* <Menu as="div" className="ml-3 relative"> */}
          <Menu as="div">
            {({ open }) => (
              <div>
                {/* <Menu.Button className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"></Menu.Button> */}
                <Menu.Button className='w-full'>
                  <SideNav partner='This is a partner TST REMOVE IT' name={product.name}>
                    <div key={product.id} className={`
                        flex w-full h-14 rounded-sm mb-1 hover:bg-indigo-700 hover:text-white hover:font-extrabold items-center p-2
                        ${props.odd ? 'bg-indigo-200' : 'bg-blue-200 '} 
                    `}>
                      <div className='flex flex-row w-full justify-between'>
                        <p>{product.name}</p><p>R$9,90</p>
                      </div>

                    </div>
                  </SideNav>
                </Menu.Button>
              </div>
            )}
          </Menu>
          {/* </div> */}


        </>
      ))}
    </>
  )
}