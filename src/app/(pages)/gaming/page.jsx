'use client'
import Link from 'next/link'
import { CarouselGames, GamingBanner, GamingFeatures, GamingNews } from './components'

const GamingPage = () => {
    return (
        <>
            <GamingBanner />
            <GamingFeatures />
            <div className='w-full text-center py-6'>
                <h3 className='text-4xl font-semibold py-6'>Discover all the trending games on InstantPC</h3>
                <CarouselGames />
                <Link href={'/gaming/games'} className='text-[18px] block mt-4' >
                    Discover games
                </Link>
            </div>
            <div className='w-[80%] m-auto'>
                <GamingNews />
            </div>
        </>
    )
}

export default GamingPage
