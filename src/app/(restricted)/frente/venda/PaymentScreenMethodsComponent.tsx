import paymentMethod from "./_paymentMethod";

export default function PaymentRowsComponent() {
  return (
    <>
      {paymentMethod.map((method, index) => (
        <div key={index} className={`
                flex w-full h-14 rounded-sm mb-1 items-center p-2
                bg-gradient-to-r from-indigo-200 via-indigo-200 to-pink-100
                hover:from-indigo-700 hover:to-indigo-500 hover:text-white hover:font-extrabold 
            `}>
          <div className='flex flex-row w-full justify-between'>
            <p>{method.id}. {method.name}</p><p>0.00</p>
          </div>
        </div>
      ))}
    </>
  )
}