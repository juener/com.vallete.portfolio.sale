export default function HeaderComponent() {
  return (
    <div className="flex bg-white">
      <div className="flex flex-row m-2 md:w-1/4 w-1/2 h-12 items-center justify-between bg-indigo-900 rounded-md">

      </div>
      <div className="flex flex-row m-2 px-2 md:w-3/4 w-1/2 h-12 text-white items-center justify-between bg-indigo-900 rounded-md">
        <div className="w-1/3 text-left">_Sair_</div>
        <div className="w-1/3 text-center">Venda de Balcão</div>
        <div className="w-1/3 text-right">João Almeida | Turno Manhã</div>
      </div>
    </div>
  );
}