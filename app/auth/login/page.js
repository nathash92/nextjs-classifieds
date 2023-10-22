import Footer from "@/shared/components/Footer"
import Header from "@/shared/components/Header"
import HeroWithBg from "@/shared/components/HeroWithBg"
import Link from "next/link"

function Page() {
  return (
    <>
      <Header />
      <HeroWithBg title="Login" description="Welcome back, it's been waiting for you." />
      <div className="py-20">
        <div className="flex item-center justify-center">
          <div className="card w-3/12 bg-white shadow-2xl">
            <div className="card-body">
              <div className="text-center text-xl">
                Login
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Email ID</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full" />
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="Type here" className="input input-bordered w-full" />
              </div>

              <button className="btn btn-error text-white my-3">Login</button>

              <div className="text-center text-sm mb-3">
                <Link href="/auth/forgot-password" className="link link-error">
                  Forgot Password?
                </Link>
              </div>

              <div className="text-center text-sm mb-3">
                <span>Dont have an account? </span>
                <Link href="/auth/register" className="link link-error">
                  Register
                </Link>
              </div>



            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Page