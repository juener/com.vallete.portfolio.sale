'use client'

import Row from "./elements/Row";

export default function MiddleLeftComponent(){
  return(
    <div className="flex flex-col m-2 md:w-1/4 w-1/2 bg-gradient-to-br from-indigo-50 to-fuchsia-100 rounded-md overflow-auto" style={{ maxHeight: 'calc(100vh - 145px)' }}>
        <Row />
      </div>
  )
}