"use client";

import { ShieldAlert } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation"

export default function AuthError() {
  const searchParams = useSearchParams()
  const { push } = useRouter()
  const errorCode = searchParams.get('error') || 'UnknownError'

  const onHomeClick = () => {
    push('/')
  }

  const onTryAgain = () => {
    push('/login')
  }

  return (
    <main className="flex flex-col h-screen p-6 justify-center items-center bg-base-200">
      <div className="w-full md:w-1/3 mx-auto">
        <div className="flex flex-col p-6 rounded-2xl bg-base-100">
          <div className="flex flex-col items-center text-center gap-2">
            <div className="inline-block p-4 bg-error/20 rounded-full mb-1">
              <ShieldAlert className="w-8 h-8 text-error" />
            </div>
            <h2 className="font-semibold text-2xl text-gray-800">
              {errorCode}
            </h2>
            <p className="text-md text-gray-600 leading-relaxed">
              Something went wrong. Please try again.
            </p>
          </div>
          <div className="flex mt-4 flex-col md:flex-row gap-4">
            <button onClick={onTryAgain} className="flex-1 btn text-xl btn-primary">Try Again</button>
            <button onClick={onHomeClick} className="flex-1 btn text-xl">Home</button>
          </div>
        </div>
      </div>
    </main>
  );
}
