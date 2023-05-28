'use client'
import { useContext } from "react";

import ButtonSystem from "./elements/ButtonSystem";
import { ProductsContext } from "@/app/utils/ProductsContext";
import SideNavComponent from "./SideNavComponent";
import { Payment, Preview, Table } from "@/app/style/icons";

export default function FooterComponent() {
  const { total } = useContext(ProductsContext);
  return (
    <div className="flex bg-white">
      <div className="grid grid-cols-2 gap-x-4 px-4 m-2 md:w-1/4 w-1/2 h-20 items-center justify-between bg-indigo-900 rounded-md">
        <SideNavComponent type="preview">
          <ButtonSystem name={`Prévia`} icon={Preview} />
        </SideNavComponent>
        <SideNavComponent type="payment" full>
          <ButtonSystem icon={Payment} name={`Pagar ${total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`} />
        </SideNavComponent>
      </div>
      <div className="grid grid-cols-5 gap-4 m-2 md:w-3/4 w-1/2 h-20 px-4 text-white items-center justify-between bg-indigo-900 rounded-md">
        <ButtonSystem name="Comandas_" />
        <ButtonSystem name="Delivery_" />
        <ButtonSystem name="Função 1_" />
        <ButtonSystem name="Função 2_" />
        <SideNavComponent type="table" full right>
          <ButtonSystem name="Mesas" icon={Table} />
        </SideNavComponent>
      </div>
    </div>
  )
}