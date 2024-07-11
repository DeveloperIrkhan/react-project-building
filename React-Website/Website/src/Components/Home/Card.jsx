import React from 'react'
import SmallCard from './SmallCard'

const Card = () => {
    return (
        <div>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl sm:text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple no-tricks pricing</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.</p>
                    </div>
                    <div className="mx-auto rounded-3xl sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                        <div className="flex lg:flex-row md:flex-none sm:flex-shrink justify-center items-center min-h-screen 
                        p-2 gap-2 lg">
                            <SmallCard />
                            <SmallCard />
                            <SmallCard />
                            <SmallCard />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card
