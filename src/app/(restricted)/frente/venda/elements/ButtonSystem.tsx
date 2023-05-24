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
        bg-gradient-to-r from-indigo-200 to-pink-300 hover:from-pink-500 hover:to-rose-300 text-black font-black md:rounded-full rounded-lg h-14 w-full p-2       
        `}
      `}
      onClick={props.onClick}
    >
      {props.name}
    </button>
  )
}