import Image from 'next/image'
import { Inter } from 'next/font/google'
import ContadorPalavras from '@/components/ContadorPalavras'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='grid gap-4 place-items-center min-h-screen'>
      <ContadorPalavras />
    </main>
  )
}
