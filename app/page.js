import Footer from '@/shared/components/Footer'
import Header from '@/shared/components/Header'

export default function Home() {
  return (
    <>
      <Header />
      <div className="hero h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-5xl font-bold">
              Smart advertising, simplified
            </h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
