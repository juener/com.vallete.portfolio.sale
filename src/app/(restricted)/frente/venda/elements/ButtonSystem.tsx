interface ButtonSystemProps {
  name: string
  onClick?: any
  className?: string
  icon?: any
}

export default function ButtonSystem(props: ButtonSystemProps) {
  return (
    <div className={`
      ${props.className ?
        props.className
        :
        `
          flex items-center justify-center
          bg-gradient-to-r from-indigo-200 to-pink-300 
        hover:from-pink-500 hover:to-rose-300 hover:cursor-pointer
        text-black font-black
         md:rounded-full rounded-lg h-14 w-full p-2       
        `}
      `}
      onClick={props.onClick}
    >
      <span className="mx-2">{props.icon}</span>{props.name}
    </div>
  )
}