'use client'

import Button from "./elements/Button";
import { ProductsContext } from "@/app/utils/ProductsContext";
import { useContext, useEffect, useState } from "react";

import { table } from "./_table.js"

interface TableInterface {
  id: number
}

export default function PaymentScreenComponent(props: any) {
  const [tables, setTables] = useState<TableInterface[]>([]);

  useEffect(() => {
    const allTables = table.map<TableInterface>(t => ({
      id: t.id
    }));
    setTables(allTables);
  }, [])

  return (
    <>
      <div className="shadow-xl overflow-y-auto bg-gradient-to-tl from-pink-100 to-green-100">
        <div className="flex flex-row w-full text-black">
          <div className='flex flex-col p-10 w-1/3 h-screen bg-gradient-to-br from-cyan-400 via-white to-pink-300 text-red-400 text-5xl font-bold justify-center'>
            <div className='flex flex-row items-center justify-between'>
              <Button
                name={`Voltar`}
                onClick={() => { props.setOpen(false); }}
                className={`
                                        bg-blue-800 hover:bg-blue-700 m-4
                                        font-extrabold text-xl
                                    `}
              />
              <Button
                name={`Alguma Função_`}
                onClick={() => dummy()}
                className={`
                                    bg-green-800 hover:bg-green-700 m-4
                                      font-extrabold text-xl
                                  `}
              />
            </div>
          </div>
          <div className='w-2/3 m-10 items-center grid grid-cols-4 gap-4'>
            <h2 className="col-span-full w-full text-center text-5xl font-bold">Mesas</h2>
            {tables.map(t => (
              <div key={t.id} className="font-black text-5xl"><Button key={t.id} name={t.id.toString()} /></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
function dummy() {
  // Router.push('/login');
}

