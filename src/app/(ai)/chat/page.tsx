'use client';

import { cn } from '@/lib/utils';
import { useChat } from 'ai/react';
import { Bot, SendHorizonal, User } from 'lucide-react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      {messages.map(m => (
        <div key={m.id} className={cn("chat", {
          "chat-end": m.role === "user",
          "chat-start": m.role !== "user"
        })}>
          <div className="chat-image">
            <div className="w-10 h-10 rounded-full inline-flex items-center justify-center bg-base-content/80">
              {m.role === "user" ? (
                <User className="w-6 h-6 text-white" />
              ) : (
                <Bot className="w-6 h-6 text-white" />
              )}
            </div>
          </div>
          <div className={cn("chat-bubble text-white whitespace-pre-wrap", {
            "chat-bubble-success": m.role !== "user",
            "chat-bubble-neutral": m.role === "user",
          })}>{m.content}</div>
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <label className="fixed bottom-10 w-full max-w-md input input-bordered flex items-center gap-2">
          <input value={input} type="text" className="grow" placeholder="Say something..." onChange={handleInputChange} />
          <button type="submit" className="btn btn-sm btn-primary">
            <SendHorizonal className="w-4 h-4" />
          </button>
        </label>
      </form>
    </div>
  );
}
