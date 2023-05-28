'use client'

import Link from "next/link";
import InputRetaguarda from "../elements/InputRetaguarda";

import { Back, Store } from '@/app/style/icons';
import { CiFloppyDisk } from "react-icons/ci";


export default function Cadastro() {
  return (
    <div className="flex flex-row w-full h-screen">
      <div className="flex flex-col m-2 w-3/12">
        <div className=" rounded-md bg-blue-950 p-2 ">
          <p className="text-white text-lg text-center m-2">Módulos</p>
          <button className="w-full my-2 rounded-sm bg-gradient-to-tr from-blue-50 to-indigo-50">Cadastros</button>
          <button className="w-full my-2 rounded-sm bg-gradient-to-tr from-blue-50 to-indigo-50">Relatórios</button>
          <button className="w-full my-2 rounded-sm bg-gradient-to-tr from-blue-50 to-indigo-50">Estoque</button>
          <button className="w-full my-2 rounded-sm bg-gradient-to-tr from-blue-50 to-indigo-50">Financeiro</button>
        </div>
        <div className=" rounded-md  bg-blue-950 my-2 p-2">
          <p className="text-white text-lg text-center m-2">Cadastros</p>
          <button className="w-full my-2 rounded-sm bg-gradient-to-tr from-blue-50 to-indigo-50">Grupos</button>
          <button className="w-full my-2 rounded-sm bg-gradient-to-tr from-blue-50 to-indigo-50">Produtos</button>
          <button className="w-full my-2 rounded-sm bg-gradient-to-tr from-blue-50 to-indigo-50">Loja</button>
        </div>
        <div className="p-2 rounded-md bg-blue-950 h-full">
          <p className="text-white text-lg text-center m-2">Cadastro de Itens</p>
          <button className="w-full my-2 rounded-sm bg-gradient-to-tr from-blue-50 to-indigo-50">Bebidas</button>
          <button className="w-full my-2 rounded-sm bg-gradient-to-tr from-blue-50 to-indigo-50">Cervejas</button>
          <button className="w-full my-2 rounded-sm bg-gradient-to-tr from-blue-50 to-indigo-50">Executivos</button>
        </div>
      </div>
      <div className="w-9/12 m-2 rounded-md bg-gradient-to-r from-indigo-100 to-blue-100 flex flex-col justify-between">
        <form className="grid grid-cols-2 gap-4 text-lg p-2" onSubmit={() => { }}>
          <h2 className="text-3xl font-bold text-center col-span-full">Cadastro de Grupos</h2>
          <InputRetaguarda label="Código" />
          <InputRetaguarda label="Descrição" />
          <InputRetaguarda label="Posição" />
          <InputRetaguarda label="etc.." />
          <InputRetaguarda label="etc.." />
          <button className="col-span-full bg-blue-950 hover:bg-blue-900 text-white font-bold p-4 rounded-md flex flex-row items-center justify-center"><span className="mx-2 text-3xl"><CiFloppyDisk /></span>Salvar</button>
        </form>
        <div className="flex flex-row bg-blue-950 h-14 w-full justify-between items-center text-white p-4 rounded-md">
          <Link href="/login"><div className="flex flex-row items-center"><span className="mx-2">{Back}</span>Sair</div></Link>
          <Link href="/frente/venda"><div className="flex flex-row items-center"><span className="mx-2">{Store}</span>Frente</div></Link>
        </div>
      </div>
    </div>
  );
}