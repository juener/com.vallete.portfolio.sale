import Image from 'next/image'
import HeaderComponent from './HeaderComponent'
import MiddleComponent from './MiddleComponent'
import FooterComponent from './FooterComponent'

export default function Home() {
  return (
    <div className='flex flex-col h-screen bg-yellow-400'>
      <HeaderComponent />
      <MiddleComponent />
      <FooterComponent />
    </div>
  )
}
