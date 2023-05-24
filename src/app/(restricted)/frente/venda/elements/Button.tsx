interface ButtonProps {
  group?: boolean,
  name: string,
  onClick?: any, 
  key: string
}

export default function Button(props: ButtonProps) {
  return (
    <button key={props.key} className={`
      bg-blue-950 text-white rounded-md h-24 w-full p-2
      ${props.group ?
        'bg-blue-950 hover:bg-blue-700'
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