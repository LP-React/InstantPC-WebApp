import { DiscoverGames, FAQ, GamingBanner, GamingFeatures, GamingNews } from './components'

const GamingPage = () => {
  return (
    <main>
      <div className='w-full mt-13'>
        <GamingBanner />
      </div>
      <div className='w-[70%] m-auto py-15'>
        <GamingFeatures />
      </div>
      <div className='w-full py-6'>
        <DiscoverGames />
      </div>
      {/* <div className='w-[80%] m-auto'>
        <GamingNews />
      </div> */}

      <div className='w-[50%] m-auto py-10'>
        <FAQ />
      </div>
    </main>
  )
}

export default GamingPage
