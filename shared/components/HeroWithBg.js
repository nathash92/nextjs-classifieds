import React from 'react'

function HeroWithBg({ title = "", description = "" }) {
  return (
    <div className="hero h-44" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div>
          <h1 className="mb-2 mt-5 text-3xl font-bold">{title}</h1>
          <p className="mb-5">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default HeroWithBg