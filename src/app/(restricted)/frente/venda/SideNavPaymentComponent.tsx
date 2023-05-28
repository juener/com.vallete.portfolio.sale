import Button from "./elements/Button";
import { ProductsContext } from "@/app/utils/ProductsContext";
import { useContext } from "react";

import PaymentScreenMethodsComponent from "./PaymentScreenMethodsComponent";
import CartRowsComponent from "./CartRowsComponent";
import { Back } from "@/app/style/icons";

export default function PaymentScreenComponent(props: any) {
  const { total } = useContext(ProductsContext);

  return (
    <div className="shadow-xl overflow-y-auto bg-gradient-to-tl from-pink-100 to-green-100">
      <div className="flex flex-row w-full text-black">
        <div className='flex flex-col p-10 w-1/3 h-screen bg-gradient-to-br from-cyan-400 via-white to-pink-300 text-red-400 text-5xl font-bold justify-center'>
          <div className='text-center'>
            Logo do Cliente
          </div>
        </div>
        <div className='w-1/3 m-10 h-screen justify-center'>
          <div className='flex flex-row items-center justify-center px-2 my-10 h-24 rounded-md bg-indigo-300 text-white text-5xl font-bold'>
            <p>Lançamentos</p>
          </div>
          <p className='text-xl text-center m-2'>Produtos lançados</p>
          <CartRowsComponent />
        </div>
        <div className='w-1/3 m-10'>
          <div className='flex flex-row items-center justify-center px-2 my-10 h-24 rounded-md bg-lime-500 text-white text-5xl font-bold'>
            <p>PAGAMENTO</p>
          </div>
          <p className='text-xl text-center m-2'>Formas de Pagamento</p>
          <PaymentScreenMethodsComponent />
          <div className='flex flex-row items-center justify-center px-2 mt-10 h-14 rounded-md bg-lime-500 text-white text-xl font-bold'>
            <p>Falta Pagar: {total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
          </div>
          <div className='flex flex-row items-center justify-between'>
            <Button
              name={`Desistir de Pagar`}
              onClick={() => { props.setOpen(false); }}
              icon={Back}
              className={`
                                        bg-red-800 hover:bg-red-700 mt-10
                                        font-extrabold text-xl
                                    `}
            />
            <p className='text-black font-black text-center text-5xl pt-10 mx-10'>ou</p>
            <Button
              name={`Confirmar Pagamento_`}
              onClick={() => { }}
              className={`
                                    bg-green-800 hover:bg-green-700 mt-10
                                      font-extrabold text-xl
                                  `}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
