import Link from "next/link";
import { Back, Retaguarda } from '@/app/style/icons';

export default function HeaderComponent() {
  return (
    <div className="flex bg-white font-light text-sm">
      <div className="flex flex-row m-2 px-2 md:w-1/4 w-1/2 h-10 items-center justify-between bg-indigo-900 rounded-md">

      </div>
      <div className="flex flex-row m-2 px-2 md:w-3/4 w-1/2 h-10 text-white items-center justify-between bg-indigo-900 rounded-md">
        <Link href="/login"><div className="flex flex-row items-center"><span className="mx-2">{Back}</span>Sair</div></Link>
        <div>Venda de Balcão</div>
        <div>João Almeida | Caixa 01</div>
        <div>Gerencial</div>
        <Link href="/retaguarda/cadastro"><div className="flex flex-row items-center"><span className="mx-2">{Retaguarda}</span>Retaguarda</div></Link>
      </div>
    </div>
  );
}