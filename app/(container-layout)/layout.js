import Footer from '@/shared/components/Footer';
import Header from '@/shared/components/Header';

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="hero" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className='py-6'>
            <h1 className="mb-5 text-5xl font-bold">
              Smart advertising, simplified
            </h1>
            <div>
              <input type="text" placeholder="Search by Location" className="input input-bordered input-primary w-full" />
            </div>
          </div>
        </div>
      </div>
      <div className='container mx-auto p-6'>{children}</div>
      <Footer />
    </>
  )
}

export default Layout