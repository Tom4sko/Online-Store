import React from 'react'

// components
import Cards from '@/components/cards'
import Filter from '@/components/filter'

const main = () => {
  return (
    <main className="h-auto px-2 md:px-10 overflow-y-hidden bg-primary">
        <div className="flex flex-col">
            <h2 className="text-secondary font-bold text-7xl my-14">Products/Jackets</h2>
            <div className="grid grid-cols-3 md:grid-cols-4 grid-rows-1 mb-14 gap-3">
                <div className="col-span-1">
                    <Filter />
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