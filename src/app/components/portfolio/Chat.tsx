"use client";

import { useEffect, useRef, useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";

const SUGGESTIONS = ["what's your stack?", "are you available?", "show me your work"];

export default function Chat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [showSuggest, setShowSuggest] = useState(true);

  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  const thinking = status === "submitted";
  const streaming = status === "streaming";

  const bodyRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [messages, thinking, streaming, open]);

  function send(text: string) {
    const t = text.trim();
    if (!t || thinking || streaming) return;
    setInput("");
    setShowSuggest(false);
    sendMessage({ text: t });
  }

  function openChat() {
    setOpen(true);
    setTimeout(() => inputRef.current?.focus(), 100);
  }

  return (
    <>
      {!open && (
        <button
          onClick={openChat}
          className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 px-[18px] py-3 bg-ink text-bg rounded-full text-[13px] font-medium cursor-pointer border-none shadow-[0_8px_28px_rgba(0,0,0,0.18)] transition-[background-color,transform] hover:bg-accent hover:-translate-y-0.5"
        >
          <span className="dot-live w-2 h-2 rounded-full" /> ask my agent
        </button>
      )}

      <div
        className={`fixed bottom-6 right-6 z-[41] w-[min(380px,calc(100vw-40px))] h-[min(520px,calc(100vh-48px))] bg-bg border border-rule rounded-2xl shadow-[0_24px_60px_rgba(0,0,0,0.18)] flex-col overflow-hidden ${open ? "flex" : "hidden"}`}
      >
        <div className="flex justify-between items-center px-[18px] py-3.5 border-b border-rule">
          <div className="flex items-center gap-2 text-[13px] font-medium">
            <span className="w-2 h-2 rounded-full bg-accent" />
            marlon&apos;s agent
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="bg-transparent border-none cursor-pointer text-ink-3 text-lg hover:text-ink"
          >
            ×
          </button>
        </div>
        <div ref={bodyRef} className="flex-1 overflow-y-auto px-[18px] py-4 flex flex-col gap-2.5 text-sm">
          {messages.length === 0 && (
            <div className="max-w-[85%] px-3.5 py-2.5 rounded-2xl leading-relaxed whitespace-pre-wrap bg-bg-2 self-start">
              hey — i&apos;m marlon&apos;s agent. ask about his stack, current builds, or availability.
            </div>
          )}
          {messages.map((m) => {
            const text = m.parts
              .map((p) => (p.type === "text" ? p.text : ""))
              .join("");
            if (!text) return null;
            return (
              <div
                key={m.id}
                className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl leading-relaxed whitespace-pre-wrap ${
                  m.role === "user" ? "bg-ink text-bg self-end" : "bg-bg-2 self-start"
                }`}
              >
                {text}
              </div>
            );
          })}
          {thinking && (
            <div className="max-w-[85%] px-3.5 py-2.5 rounded-2xl bg-bg-2 self-start italic text-ink-3">
              thinking…
            </div>
          )}
          {error && (
            <div className="max-w-[85%] px-3.5 py-2.5 rounded-2xl bg-bg-2 self-start text-ink-3">
              couldn&apos;t reach the model. email marlon: maruronu@gmail.com
            </div>
          )}
        </div>
        {showSuggest && messages.length === 0 && (
          <div className="flex flex-wrap gap-1.5 px-[18px] pb-3">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                className="text-xs px-3 py-1.5 border border-rule rounded-full bg-transparent text-ink-2 cursor-pointer hover:border-ink hover:text-ink"
              >
                {s}
              </button>
            ))}
          </div>
        )}
        <div className="px-3.5 py-3 border-t border-rule flex gap-2">
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") send(input);
            }}
            type="text"
            placeholder="ask about my work…"
            className="flex-1 border border-rule rounded-full px-3.5 py-2.5 text-[13px] outline-none bg-bg text-ink font-sans focus:border-ink"
          />
          <button
            onClick={() => send(input)}
            aria-label="Send"
            disabled={thinking || streaming}
            className="bg-ink text-bg border-none rounded-full w-9 h-9 cursor-pointer flex items-center justify-center disabled:opacity-50"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
