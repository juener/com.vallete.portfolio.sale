interface RowProps {
  odd?: boolean,
  product?: any,
  selectedProducts?: any
}

export default function Row(props: RowProps) {

  return (
    <>
      {props.selectedProducts.map((product: any) => (
        <div key={product.id} className={`
                        flex w-full h-14 rounded-sm mb-1 hover:bg-indigo-700 hover:text-white hover:font-extrabold items-center justify-between p-2
                        ${props.odd ? 'bg-indigo-200' : 'bg-blue-200 '} 
                    `}>
          <p>{product.name}</p><p>3,99</p>
        </div>

      ))}
    </>
  )
}