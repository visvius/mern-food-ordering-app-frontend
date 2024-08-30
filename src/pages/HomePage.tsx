import landingImage from '../assets/landing.png'
import appDownloadImage from '../assets/appDownload.png'

function HomePage() {
  return (
    <div className="flex flex-col gap-12">
        <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
            <h1 className="text-5xl font-bold tracking-tight text-orange-600">
                Tuck into a takeaway today
            </h1>
            <span className="text-xl">Food is just a click away!</span>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
            <img src={landingImage} alt="landing img" />
            <div className='flex flex-col item-center justify-center gap-4 text-center'>
                <span className='font-bold text-3xl tracking-tight'>
                    Order takeaway even faster!
                </span>
                <span>
                    Download MernEats App for faster ordering and personalised recommendations
                </span>
                <img src={appDownloadImage} className='w-full max-w-xs mx-auto h-auto"' alt="App Download Img"/>
            </div>
        </div>
    </div>
  )
}

export default HomePage