import { Back } from "@/app/style/icons";
import Button from "./elements/Button";
import Input from "./elements/Input";

import { ProductsContext } from "@/app/utils/ProductsContext";
import { useContext } from "react";

export default function PaymentScreenComponent(props: any) {
  const { removeProduct, removeAllProducts } = useContext(ProductsContext);

  return (
    <div className="h-full flex flex-col shadow-xl overflow-y-auto bg-gradient-to-tl from-pink-100 to-green-100">
      <div className="flex flex-row items-center justify-end text-5xl font-bold bg-indigo-900">
        <div className="flex flex-row justify-between flex-grow text-white">
          <p className='p-4 text-bold'>{props.product.name}</p>
        </div>
      </div>
      <div className="flex flex-col w-full fixed bottom-0 max-h-[calc(100vh-20px)]  text-black pb-6 px-6">
        <div className='flex flex-row items-center justify-between px-2 my-10 h-12 rounded-md bg-lime-300'>
          <p>ID: {props.product.id}</p>
          <p>Sequência: {props.product.entryNumber}</p>
          <p>Preço: {props.product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
        </div>
        <Input />
        <div className='flex flex-row items-center justify-between'>
          <Button
            name={`-`}
            onClick={() => { removeProduct(props.product.entryNumber); props.setOpen(false); }}
            className={`
                                        bg-red-800 hover:bg-red-700 mt-10
                                        font-extrabold text-5xl
                                    `}
          />
          <p className='text-black font-black text-center text-5xl pt-10 mx-10'>1</p>
          <Button
            name={`+`}
            onClick={() => { }}
            // bg-green-800 hover:bg-green-700 mt-10
            className={`
                                      bg-gray-200 hover:bg-gray-200 mt-10 
                                      font-extrabold text-5xl
                                  `}
          />
        </div>
        <Button
          name={`Desistir de Alterar`}
          onClick={() => props.setOpen(false)}
          icon={Back}
          className={`
                                    bg-indigo-900 hover:bg-indigo-700 mt-10                                    
                                `}
        />
        <Button
          name={`Limpar Produtos Ainda Não Confirmados`}
          onClick={() => { removeAllProducts(); props.setOpen(false); }}
          className={`
                                    bg-orange-700 hover:bg-orange-600 mt-10                                     
                                `}
        />
      </div>
    </div>
  );
}
