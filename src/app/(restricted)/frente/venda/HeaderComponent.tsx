import Link from "next/link";
import { Exit, Retaguarda } from '@/app/style/icons';
import LinkParagraph from "./elements/LinkParagraph";

export default function HeaderComponent() {
  return (
    <div className="flex bg-white text-white font-light text-sm">
      <div className="flex flex-row m-2 px-2 md:w-1/4 w-1/2 h-10 items-center justify-between bg-indigo-900 rounded-md">
        <LinkParagraph name="Alguma Coisa" href="" />
        <LinkParagraph name="Outra Coisa" href="" />
      </div>
      <div className="flex flex-row m-2 px-2 md:w-3/4 w-1/2 h-10 items-center justify-between bg-indigo-900 rounded-md">
        <LinkParagraph href="/login" name="Sair" icon={Exit} />
        <LinkParagraph name="Venda de Balcão" href="" />
        <LinkParagraph name="Marcelo Oliveira | Caixa 01" href="" />
        <LinkParagraph name="Gerencial" href="" />
        <LinkParagraph name="Retaguarda" href="/retaguarda/cadastro" icon={Retaguarda} />
      </div>
    </div>
  );
}