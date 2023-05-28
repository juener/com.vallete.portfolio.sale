import { Back } from "@/app/style/icons";
import Button from "./elements/Button";
import Input from "./elements/Input";

export default function SideNavPreviewComponent(props: any) {

  return (
    <div className="h-full flex flex-col shadow-xl overflow-y-auto bg-gradient-to-tl from-pink-100 to-green-100">
      <div className="flex flex-row items-center justify-end text-5xl font-bold bg-indigo-900">
        <div className="flex flex-row justify-between flex-grow text-white">
          <p className='p-4 text-bold'>Imprimir Prévia</p>
        </div>
      </div>
      <div className="flex flex-col w-full fixed bottom-0 max-h-[calc(100vh-20px)]  text-black pb-6 px-6">
        <p className='text-black font-black text-center text-3xl m-4'>Quantas Pessoas?</p>
        <div className='flex flex-row items-center justify-between'>
          <Button
            name={`-`}
            onClick={() => { }}
            className={`
                      bg-red-800 hover:bg-red-700 my-10
                      font-extrabold text-5xl
                    `}
          />
          <p className='text-black font-black text-center text-5xl py-10 m-10'>1</p>
          <Button
            name={`+`}
            onClick={() => { }}
            // bg-green-800 hover:bg-green-700 mt-10
            className={`
                      bg-gray-200 hover:bg-gray-200 my-10 
                      font-extrabold text-5xl
                    `}
          />
        </div>
        <Input />
        <Button
          name={`Imprimir Conta`}
          onClick={() => { }}
          className={`
                    bg-indigo-900 hover:bg-indigo-700 mt-10                                    
                  `}
        />
        <Button
          name={`Desistir de Alterar`}
          onClick={() => props.setOpen(false)}
          icon={Back}
          className={`
                    bg-indigo-900 hover:bg-indigo-700 mt-10                                    
                  `}
        />
      </div>
    </div>
  );
}
