import { text } from "stream/consumers";

interface InputInterface {
  type?: string,
  placeholder?: string,
}

export default function Input(props: InputInterface) {
  return (
    <div className="flex flex-col w-full text-black text-sm">
      <label>Observação:</label>
      <input
        placeholder={props.placeholder ?? 'Digite alguma observação clicando aqui.'}
        className={`text-black px-2 bg-white rounded-sm h-16`} type={props.type ?? 'text'}
      />
    </div>
  )
}