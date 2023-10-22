import Footer from "@/shared/components/Footer"
import Header from "@/shared/components/Header"

function Page() {
  return (
    <>
      <Header />

      <div>

        <div className="mb-8 container mx-auto p-6">
          <div className="text-3xl font-bold mb-1">Why Ads?</div>
          <div className="leading-7">
            At Innovate Ads, we believe in the power of advertising to connect businesses with their ideal customers and drive meaningful results. Our mission is to empower businesses of all sizes to create and manage effective advertising campaigns that resonate with their target audience.

            Founded in 2023, Innovate Ads was born out of a desire to simplify the complexities of advertising and make it accessible to businesses of all levels of expertise. We believe that every business deserves the opportunity to harness the power of advertising to achieve their growth goals.

            Our team of experienced advertising professionals is passionate about helping businesses succeed. We provide a comprehensive suite of services, from campaign creation and optimization to analytics and reporting, ensuring that your advertising efforts are aligned with your business objectives.

            We are committed to providing our clients with a transparent and collaborative experience. We believe in building strong partnerships with our clients, understanding their unique needs and goals, and working together to achieve success.
          </div>
        </div>

        <section className="bg-white px-6 py-12">
          <div className="mb-5 container mx-auto">
            <div className="text-3xl font-bold text-center mb-5">How it works?</div>
            <div className="flex justify-between">
              {
                [1, 2, 3, 4].map(x => <div className="text-center" key={x}>
                  <div className="w-36 h-36 mx-auto mb-2 rounded-full shadow-md bg-gray-100"></div>
                  <h2 className="text-lg font-bold">
                    Product
                  </h2>
                  <p className="text-sm text-gray-400">
                    Innovative design meets cutting-edge technology, transforming everyday tasks
                  </p>
                </div>)
              }
            </div>
          </div>
        </section>

        <div className="hero" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="p-6">
              <h1 className="mb-5 text-5xl font-bold">
                Smart advertising, simplified
              </h1>
              <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              <button className="btn btn-success">
                Post Ad
              </button>
            </div>
          </div>
        </div>

        <section className="bg-gray-50 px-6 py-12">
          <div className="mb-5 container mx-auto">
            <div className="text-3xl font-bold text-center mb-5">
              Why Choose Us?
            </div>
            <div className="grid grid-cols-3 gap-4">
              {
                [1, 2, 3, 4, 5, 6].map(x => <div className="p-6 text-center bg-white" key={x}>
                  <div className="rounded-full bg-orange-400 w-12 h-12 inline-flex items-center justify-center text-xl text-white">
                    +
                  </div>
                  <h2 className="text-lg font-semibold my-1">
                    Product
                  </h2>
                  <p className="text-sm text-gray-400">
                    Innovative design meets cutting-edge technology, transforming everyday tasks
                  </p>
                </div>)
              }
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </>
  )
}

export default Page