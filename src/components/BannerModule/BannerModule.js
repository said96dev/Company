import * as React from 'react'
import { Link, navigate } from 'gatsby'
import { BannerModuleStyles } from './BannerModuleStyles'
import { StaticImage } from 'gatsby-plugin-image'
import Button from '../Button/Button'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const BannerModule = ({ img, title, subTitle, price, enquire }) => {
  function scrollToArea() {
    navigate('#topContent')
  }
  const imgs = getImage(img)

  return (
    <>
      <BannerModuleStyles>
        <GatsbyImage
          className="banner__image"
          imgClassName="banner__image--content"
          image={imgs}
          alt="Banner Image"
          layout="fullWidth"
        />

        <div className="container container__tight">
          <div className="banner__content">
            {title && (
              <h1>
                {title}
                <span style={{ color: 'var(--primary)' }}>.</span>
              </h1>
            )}
          </div>
        </div>
        <div className="gradient"></div>
      </BannerModuleStyles>
      <span id="topContent"></span>
    </>
  )
}

export default BannerModule
