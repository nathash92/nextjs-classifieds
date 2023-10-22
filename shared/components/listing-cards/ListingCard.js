import Image from 'next/image'
import Link from 'next/link'

function ListingCard() {
  return (
    <Link href="/listings/1">
      <div className="card bg-base-100 shadow-md">
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
        </div>
      </div>
    </Link>
  )
}

export default ListingCard