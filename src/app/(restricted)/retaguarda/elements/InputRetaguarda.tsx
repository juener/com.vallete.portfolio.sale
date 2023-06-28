interface InputRetaguardaProps {
  label: string,
  register: any
}

export default function InputRetaguarda(props: InputRetaguardaProps) {
  return (
    <div className="flex flex-col">
      <label className="font-light text-base">{props.label}:</label>
      <input className={`w-full h-14 rounded-sm p-4`} type="text" placeholder={`Entre com o ${props.label}`} {...props.register} />
    </div>
  )
}