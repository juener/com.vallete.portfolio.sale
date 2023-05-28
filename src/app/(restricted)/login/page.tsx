import Link from "next/link"
import { Store } from "@/app/style/icons"

export default function Login() {
  return (
    <div className="flex flex-row w-screen h-screen">
      <div className="w-2/3 bg-gradient-to-r flex flex-col items-center justify-center from-blue-100 to-green-100">
        <h1 className="font-extrabold text-cyan-950 text-7xl">Olá!</h1>
      </div>
      <div className="flex w-1/3 h-screen items-center justify-center bg-blue-950">
        <div className="flex flex-col items-center justify-center w-2/3 h-3/5 bg-gradient-to-b from-blue-100 to-green-100 rounded-md shadow-xl shadow-blue-400">
          <p className="text-3xl text-cyan-900 font-bold m-6">Nome do Sistema</p>
          <input className="w-5/6 m-2 p-2 rounded-md bg-gray-300 border-b-4 border-blue-950" type="text" placeholder="e-mail" />
          <input className="w-5/6 m-2 p-2 rounded-md bg-gray-300 border-b-4 border-blue-950" type="password" placeholder="senha" />
          <Link href="./frente/moedas" className="w-5/6 m-2 p-2 rounded-md bg-blue-950 flex flex-row justify-center"><div className="text-white font-bold flex flex-row"><span className="mx-2">{Store}</span>Frente</div></Link>
          <Link href="./retaguarda/cadastro" className="w-5/6 m-2 p-2 rounded-md bg-blue-950 text-white text-center font-bold"><button>Retaguarda</button></Link>
          <button className="w-5/6 m-2 p-2 rounded-md bg-blue-950 text-white font-bold">Esqueci a Senha</button>
        </div>
      </div>
    </div>
  )
}