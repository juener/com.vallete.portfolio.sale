interface ButtonSystemProps {
  name: string,
  onClick?: any,
  className?: string
}

export default function Button(props: ButtonSystemProps) {
  return (
    <button className={`
      
      ${props.className ?
        props.className
        :
        `
        bg-gradient-to-r from-indigo-200 to-pink-300 text-black font-black rounded-full h-16 w-full p-2
        focus:border-blue-700 focus:border-y-8
        
        `}
      `}
      onClick={props.onClick}
    >
      {props.name}
    </button>
  )
}