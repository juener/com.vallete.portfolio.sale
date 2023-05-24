'use client'
import { useContext } from "react";

import ButtonSystem from "./elements/ButtonSystem";
import { ProductsContext } from "@/app/utils/ProductsContext";

export default function FooterComponent() {
  const { total } = useContext(ProductsContext);
  return (
    <div className="flex bg-white">
      <div className="flex flex-row m-2 md:w-1/4 w-1/2 h-20 items-center justify-between bg-indigo-900 rounded-md">
        <div className="w-full mx-4">
          <ButtonSystem name={`Pagar ${total}`} />
        </div>
        <div className="w-full mx-4">
          <ButtonSystem name={`Outra Função_`} />
        </div>
      </div>
      <div className="flex flex-row m-2 md:w-3/4 w-1/2 h-20 text-white items-center justify-between bg-indigo-900 rounded-md">
        <div className="w-1/6 mx-4">
          <ButtonSystem name="Comandas_" />
        </div>
        <div className="w-1/6 mx-4">
          <ButtonSystem name="Delivery_" />
        </div>
        <div className="w-1/6 mx-4">
          <ButtonSystem name="Mesas_" />
        </div>
      </div>
    </div>
  )
}