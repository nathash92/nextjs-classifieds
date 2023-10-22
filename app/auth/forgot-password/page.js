import Footer from "@/shared/components/Footer"
import Header from "@/shared/components/Header"
import HeroWithBg from "@/shared/components/HeroWithBg"
import Link from "next/link"

function Page() {
  return (
    <>
      <Header />
      <HeroWithBg title="Forgot Password" description="Unlock your account with a new password, just a few steps away." />
      <div className="py-20">
        <div className="flex item-center justify-center">
          <div className="card w-3/12 bg-white shadow-2xl">
            <div className="card-body">
              <div className="text-center text-xl">
                Forgot Password
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Email ID</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full" />
              </div>

              <button className="btn btn-error text-white my-3">
                Submit
              </button>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Page