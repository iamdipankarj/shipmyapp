"use client";

import { CheckCheck } from "lucide-react";

export default function AuthVerification() {
  return (
    <main className="flex flex-col h-screen p-6 justify-center items-center bg-base-200">
      <div className="w-full md:w-1/3 mx-auto">
        <div className="flex flex-col p-6 rounded-2xl bg-base-100">
          <div className="flex flex-col items-center text-center gap-2">
            <div className="inline-block p-4 bg-success/20 rounded-full mb-1">
              <CheckCheck className="w-8 h-8 text-success" />
            </div>
            <h2 className="font-semibold text-2xl text-gray-800">
              Check Email
            </h2>
            <p className="text-md text-gray-600 leading-relaxed">
              We've sent you an email with a link to verify your account.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
