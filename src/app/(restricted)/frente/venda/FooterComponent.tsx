import ButtonSystem from "./elements/ButtonSystem";

export default function FooterComponent() {
  return (
    <div className="h-20 bg-blue-950 text-white flex items-center justify-between ">
      <div className="w-1/6 mx-4">
        <ButtonSystem name="Pagar" />
      </div>
      <div className="w-1/6 mx-4">
        <ButtonSystem name="Funções" />
      </div>
    </div>
  )
}