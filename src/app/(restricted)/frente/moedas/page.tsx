import Link from "next/link";

import PaymentScreenMethodsComponent from '../venda/PaymentScreenMethodsComponent';

export default function Moedas() {
  return (
    <div className="flex flex-row w-screen h-screen">
      <div className="w-2/3 bg-gradient-to-r flex flex-col items-center justify-center from-indigo-300 to-blue-200">
        <h1 className="font-extrabold text-cyan-950 text-7xl">Fundo de Troco</h1>
      </div>
      <div className="flex w-1/3 h-screen items-center justify-center bg-white">
        <div className="flex flex-col items-center justify-center w-2/3 h-3/5 bg-gradient-to-b from-indigo-50 to-blue-50 rounded-md shadow-xl shadow-black">
          <p className="text-2xl m-6 text-cyan-900 font-bold">Com quanto você irá começar?</p>
          <PaymentScreenMethodsComponent />
          <Link href="../frente/venda" className="w-5/6 m-6 p-2 rounded-md bg-blue-950 text-white text-center font-bold"><button >Abrir o Caixa</button></Link>
          <Link href="../login" className="w-5/6 m-2 p-2 rounded-md bg-blue-950 text-white text-center font-bold"><button>Voltar para o Login</button></Link>
        </div>
      </div>
    </div>
  )
}