interface ButtonProps {
  product?: boolean,
  name: string,
  onClick?: any,
  key?: string | number,
  className?: string
  icon?: any
}

export default function Button(props: ButtonProps) {
  return (
    <button key={props.key} className={`
      bg-blue-950 text-white rounded-md w-full p-2 flex flex-row items-center justify-center
      ${props.className}
      ${props.product ?
        'bg-blue-900 hover:bg-blue-700 font-bold h-24 focus:bg-blue-500'
        :
        'bg-indigo-900 hover:bg-indigo-700 h-20'
      }
      `}
      onClick={props.onClick}
    >
      {props.icon ? <span className="m-2">{props.icon}</span> : null}{props.name}
    </button>
  )
}