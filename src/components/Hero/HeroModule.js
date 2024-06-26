import React from 'react'
import { Link, navigate } from 'gatsby'
import { HeroModuleStyles } from './HeroModuleStyles'
import { StaticImage } from 'gatsby-plugin-image'
import Button from '../Button/Button'

const HeroModule = ({ children, title, subTitle, price, enquire }) => {
  function scrollToArea() {
    navigate('#topContent')
  }

  return (
    <>
      <HeroModuleStyles>
        {children ? (
          children
        ) : (
          <StaticImage
            className="banner__image"
            imgClassName="banner__image--content"
            src="../../assets/images/hero4.jpg"
            alt="Banner Image"
            layout="fullWidth"
            placeholder="blurred"
          />
        )}

        <div className="container container__tight">
          <div className="banner__content">
            {title && (
              <h1>
                {title}
                <span style={{ color: 'var(--primary)' }}>.</span>
              </h1>
            )}
            {subTitle && <h2>{subTitle}</h2>}

            <div className="banner__btns">
              {enquire && (
                <Button
                  className="btn"
                  text="Enquire Now"
                  as={Link}
                  to="/contact"
                />
              )}
              <Button onClick={scrollToArea} text="Lär dig mer" />
            </div>
          </div>
        </div>
        <div className="gradient"></div>
      </HeroModuleStyles>
      <span id="topContent"></span>
    </>
  )
}

export default HeroModule
