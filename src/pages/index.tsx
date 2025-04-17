import React from 'react'
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="relative flex flex-col min-h-screen w-screen justify-center items-center align-middle bg-primary">
        <div className="absolute left-10 bottom-40 text-5xl noto-sans-jp flex flex-col text-slate-200">
          <span>こ</span>
          <span>ん</span>
          <span>に</span>
          <span>ち</span>
          <span>は</span>
          <span>世</span>
          <span>界</span>
        </div>
        <div className="absolute right-2 top-2 text-5xl noto-sans-jp flex flex-col text-slate-200">
          <span>ト</span>
          <span>マ</span>
          <span>ス</span>
          <span>・</span>
          <span>ゼ</span>
          <span>レ</span>
          <span>ナ</span>
          <span>ク</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black z-10">The Bloomstore</h1>
        <Link href="/products" className="z-10 cursor-pointer flex justify-center items-center w-40 h-12 bg-secondary text-primary gap-2 my-6 group transition-all duration-300 hover:bg-primary hover:border-secondary hover:border-2 hover:text-secondary">Explore!</Link>
      </div>
    </>
  );
}
