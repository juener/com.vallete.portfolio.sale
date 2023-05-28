'use client'

import CartRows from "./CartRowsComponent";

export default function MiddleLeftComponent() {
  return (
    <div className="flex flex-col mt-2 mx-2 md:w-1/4 w-1/2 bg-gradient-to-br from-indigo-50 to-fuchsia-100 rounded-md p-2 overflow-auto" style={{ maxHeight: 'calc(100vh - 17vh)' }}>
      <CartRows />
    </div>
  )
}