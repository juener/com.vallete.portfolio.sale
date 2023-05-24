import Row from "./elements/Row";

export default function MiddleLeftComponent() {
  return (
    <div className="flex flex-col m-2 w-1/4 bg-gradient-to-br from-indigo-50 to-fuchsia-100 rounded-md">
      <Row odd />
      <Row />
      <Row odd />
    </div>
  )
}