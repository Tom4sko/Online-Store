import React from 'react'

const filter = () => {
  return (
    <div className="w-full flex flex-col">
      <span className="border-secondary border-t-1 w-full uppercase font-bold py-5">Size</span>
      <div className="flex flex-col items-start gap-1 pb-5">
        <label className="flex items-center gap-2">
          <input type="checkbox" value="L" className="accent-black" />
          <span>L</span>
        </label>

        <label className="flex items-center gap-2">
          <input type="checkbox" value="XL" className="accent-black" />
          <span>XL</span>
        </label>

        <label className="flex items-center gap-2">
          <input type="checkbox" value="M" className="accent-black" />
          <span>M</span>
        </label>

        <label className="flex items-center gap-2">
          <input type="checkbox" value="S" className="accent-black" />
          <span>S</span>
        </label>

        <label className="flex items-center gap-2">
          <input type="checkbox" value="XS" className="accent-black" />
          <span>XS</span>
        </label>
      </div>
      <span className="border-secondary border-t-1 w-full uppercase font-bold py-5">Colours</span>
      <div className="flex flex-col md:flex-row items-start gap-2 pb-5">
        <span className="block size-6 bg-red-600"></span>
        <span className="block size-6 bg-yellow-300"></span>
        <span className="block size-6 bg-blue-500"></span>
        <span className="block size-6 bg-slate-800"></span>
      </div>
      <span className="border-secondary border-t-1 w-full uppercase font-bold py-5">Other</span>
      <div className="flex flex-col items-start gap-1 pb-5">
        <span>text1</span>
        <span>text2</span>
        <span>text3</span>
      </div>
    </div>
  )
}

export default filter