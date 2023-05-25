import { useContext } from 'react';
import { ProductsContext } from '@/app/utils/ProductsContext';

import Button from "./elements/Button";
import Input from "./elements/Input";
import Row from './elements/Row';


export default function PaymentScreenComponent(props: any) {
  const { removeProduct, removeAllProducts } = useContext(ProductsContext);
  return (
    <>
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
            <Row />
          </div>
          <div className='w-1/3 m-10'>
            <div className='flex flex-row items-center justify-center px-2 my-10 h-24 rounded-md bg-lime-500 text-white text-5xl font-bold'>
              <p>PAGAMENTO</p>
            </div>
            <p className='text-xl text-center m-2'>Formas de Pagamento</p>
            <Row />
            <div className='flex flex-row items-center justify-between'>
              <Button
                name={`Desistir de Pagar`}
                onClick={() => { props.setOpen(false); }}
                className={`
                                        bg-red-800 hover:bg-red-700 mt-10
                                        font-extrabold text-xl
                                    `}
              />
              <p className='text-black font-black text-center text-5xl pt-10 mx-10'>ou</p>
              <Button
                name={`Confirmar Pagamento_`}
                onClick={() => dummy()}
                className={`
                                    bg-green-800 hover:bg-green-700 mt-10
                                      font-extrabold text-xl
                                  `}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function dummy() {
  // Router.push('/login');
}

