import React from 'react'

// components
import Cards from '@/components/cards'
import Filter from '@/components/filter'

const main = () => {
  return (
    <main className="min-h-screen px-2 md:px-10 bg-primary">
        <div className="flex flex-col">
            <h2 className="text-secondary font-bold text-7xl my-14">Products/Explore</h2>
            <div className="grid grid-cols-3 md:grid-cols-4 grid-rows-1 mb-14 gap-5 xl:gap-22">
                <div className="col-span-1">
                    <div className="sticky top-20">
                        <Filter />
                    </div>
                </div>
                <div className="col-span-2 md:col-span-3">
                    <Cards />
                </div>
            </div>
        </div>
    </main>
  )
}

export default main