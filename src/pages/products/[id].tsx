import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router';

// icons
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

// database
import productInformations from '@/data/catalog.json';
import usersInformations from '@/data/events.json';

const goBack = () => {
  window.history.back();
};

const productPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const product = productInformations.find(
    (item) => item.id?.toString() === id
  );

  const watchers = usersInformations.filter(
    (entry) => entry.product_id?.toString() === id && entry.action === 'view'
  );

  return (
    <main className="flex flex-col bg-primary min-h-screen w-screen px-2 md:px-10">
      <button
        type="button"
        onClick={goBack}
        className="cursor-pointer flex justify-center items-center w-40 h-12 bg-secondary text-primary gap-2 my-6 group transition-all duration-300 hover:bg-primary hover:border-secondary hover:border-2 hover:text-secondary"
      >
        Go Back
        <FaLongArrowAltRight className="transform transition-transform duration-300 group-hover:translate-x-1" />
      </button>
      <div className="flex flex-col-reverse md:flex-row w-full gap-12">
        <div className="w-full">
          <div className="relative size-max bg-slate-200 mr-28 w-full h-[350px] md:h-[550px] p-10">
            <Image
              src="/images/tshirt.png"
              alt="Product Image"
              fill
              className="p-5"
            />
          </div>
        </div>
        <div className="flex flex-col w-full items-start gap-2">
          <h2 className="text-3xl md:text-6xl font-black">{product?.title}</h2>
          <div className="flex flex-row justify-between items-center align-middle w-full">
            <button type="button" className="bg-secondary text-primary px-8 py-2">{product?.category}</button>
            <h3 className="silkscreen-regular tracking-tighter">/ {product?.brand} /</h3>
          </div>
          <div className="mt-5 border-secondary border-t-1 w-full flex flex-row justify-between">
            <h3 className="mt-3">Sizes:</h3>
            <span className="mt-3">{product?.sizes.join(', ')}</span>
          </div>
          <div className="mt-5 border-secondary border-t-1 w-full flex flex-row justify-between">
            <h3 className="mt-3">Material:</h3>
            <span className="mt-3">{product?.material}</span>
          </div>
          <div className="mt-5 border-secondary border-t-1 w-full flex flex-row justify-between">
            <h3 className="mt-3">Colors:</h3>
            <span className="mt-3">{product?.color}</span>
          </div>
          <div className="mt-5 border-secondary border-t-1 w-full flex flex-row justify-between">
            <h3 className="mt-3">Price:</h3>
            <span className="mt-3 font-bold text-3xl">{product?.price}$</span>
          </div>
          <div className="flex flex-row justify-between w-full items-center align-middle">
            <button
              type="button"
              onClick={goBack}
              className="cursor-pointer flex justify-center items-center w-40 h-12 bg-secondary text-primary gap-2 my-6 group transition-all duration-300 hover:bg-primary hover:border-secondary hover:border-2 hover:text-secondary"
            >
              Buy Now
            </button>
            <span className="silkscreen-regular tracking-tighter text-slate-400 flex flex-row items-center align-middle">(<IoEyeOutline />) {watchers.length}</span>
          </div>
        </div>
      </div>
    </main>
  )
}

export default productPage