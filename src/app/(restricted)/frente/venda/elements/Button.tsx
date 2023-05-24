interface ButtonProps {
  group?: boolean,
  name: string,
  onClick?: any, 
  key: string
}

export default function Button(props: ButtonProps) {
  return (
    <button key={props.key} className={`
      bg-blue-950 text-white rounded-md h-24 w-full p-2 focus:border-blue-700 focus:border-y-8
      ${props.group ?
        'bg-cyan-950 hover:bg-cyan-700'
        :
        'bg-blue-900 hover:bg-blue-600 font-bold'
      }
      `}
      onClick={props.onClick}
    >
      {props.name}
    </button>
  )
}