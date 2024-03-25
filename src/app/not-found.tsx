import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex flex-col h-screen p-6 justify-center items-center">
      <div className="container px-4 mx-auto">
        <Image
          src="/404.svg"
          alt="404"
          width={300}
          height={300}
          className="mx-auto"
        />
        <h2 className="text-4xl md:text-6xl text-red-500 text-center font-bold font-heading transform -rotate-3 tracking-px-2n mt-4">
          404!
        </h2>
        <p className="mt-4 mb-6 text-xl text-base-content text-center font-medium leading-relaxed md:max-w-md mx-auto">
          Sorry, but the requested page is not found. You might go to home.
        </p>
      </div>
      <Link href="/" className="btn">Go to Home</Link>
    </main>
  )
}
