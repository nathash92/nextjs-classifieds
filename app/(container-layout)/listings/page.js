import PageInfo from "@/shared/components/PageInfo"
import Image from "next/image"

function Page() {
  return (
    <>
      <div className="mb-3">
        <PageInfo title="Ad Listings" />
      </div>
      <div className='flex'>

        <div className='w-3/12 me-5'>
          <div className="bg-white mb-10">
            <div className="p-4 border-b font-semibold">
              Categories
            </div>
            <div className="p-4">
              {
                [1, 2, 3, 4, 5].map(x => <div key={x} className="flex justify-between items-center mb-2">
                  <div>
                    <input type="checkbox" className="checkbox checkbox-sm checkbox-secondary align-middle" />
                    <span className="align-middle ms-2">Category 1</span>
                  </div>
                  <div>
                    <div className="badge badge-primary font-bold">+99</div>
                  </div>
                </div>)
              }
            </div>
          </div>

          <div className="bg-white mb-10">
            <div className="p-4 border-b font-semibold">
              Popular Locations
            </div>
            <div className="p-4">
              {
                [1, 2, 3, 4, 5].map(x => <div key={x} className="flex justify-between items-center mb-2">
                  <div>
                    <input type="checkbox" className="checkbox checkbox-sm checkbox-secondary align-middle" />
                    <span className="align-middle ms-2">Location 1</span>
                  </div>
                  <div>
                    <div className="badge badge-primary font-bold">+99</div>
                  </div>
                </div>)
              }
            </div>
          </div>
        </div>

        <div className='w-9/12'>

          <div className="bg-white p-3 mb-5 flex justify-between items-center">
            <div className="text-gray-500">
              Showing 1 out of 40 listings
            </div>
            <div>
              <select className="select select-bordered select-sm w-full max-w-xs">
                <option selected>Sort By Newest</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(x => <div className="card bg-base-100 shadow-md" key={x}>
                <figure>
                  <Image src="/imgs/sample.jpg" width="400" height="120" alt="img" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Rs.5000 /sqft
                    <div className="badge badge-secondary text-sm">NEW</div>
                  </h2>
                  <p className="text-base">
                    Kengeri Mysore Road, BDA complex
                  </p>
                  <p className="text-gray-400 text-sm">
                    Posted on: 10 Oct 2024
                  </p>
                  {/* <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                  </div> */}
                </div>
              </div>)
            }
          </div>

        </div>




      </div>
    </>
  )
}

export default Page