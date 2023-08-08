import React from 'react'
import Link from 'next/link'

const HeroBanner = ({heroBanner}) => {
/*   if(!heroBanner) {
    return null;
  } */

  return (
    <div className='hero-banner-container'>
      <div>
        {/* <p className='best-bass'>{heroBanner.smallText}</p> */}
        <h3>MID TEXT</h3>
        <img src="" alt="instumentalist" className='hero-banner-image' />

        <div>
          {/* a link is like a href but in next js */}
          <Link href="/products/ID"  >
            <button type='button' >BUTTON</button>
          </Link>
          <div className='desc'>
            <h5>Description</h5>
            <p>DESCRIPTION</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HeroBanner