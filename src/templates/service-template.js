import React from 'react'
import Seo from '../components/SEO'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import Features from '../components/Features/Projects'
import BannerModule from '../components/BannerModule/BannerModule'
import RichText from '../components/RichText'

const ProductTemplateStyles = styled.div`
  .container {
    display: flex;
    flex-wrap: wrap;
    .column {
      flex: 0 0 100%;

      @media (min-width: 768px) {
        flex-basis: 50%;

        &:nth-child(1) {
          padding-right: 20px;
        }

        &:nth-child(2) {
          padding-left: 20px;
        }

        > * {
          &:last-child {
            margin-bottom: 0;
          }
        }
      }

      > * {
        &:first-child {
          margin-top: 0;
        }
      }
    }
  }
`

const ProductGallery = styled.section`
  width: 100%;

  > .container {
    display: flex;
    flex-wrap: wrap;
    gap: calc(var(--gap) / 2);

    @media (min-width: 1024px) {
      gap: var(--gap);
    }

    > * {
      width: calc(50% - 10px);

      @media (min-width: 768px) {
        width: calc(33.333% - 14px);
      }

      @media (min-width: 1024px) {
        width: calc(25% - 30px);
      }
    }
  }
`

const Producttemplate = (contentfulProduct) => {
  const { headerImage, title, price, introduction, description, img, gallery } =
    contentfulProduct
  const productHeaderImage = getImage(headerImage)
  console.log(description)
  return (
    <>
      <Seo title={title} />
      <BannerModule
        className="container container__tight"
        title={title}
        price={price}
        subTitle={introduction}
        enquire={true}
        img={img}
      >
        <GatsbyImage
          className="banner__image"
          image={productHeaderImage}
          alt={title}
        />
      </BannerModule>
      <ProductTemplateStyles className="section">
        <div className="container container__tight">
          {description && (
            <div className="">
              <RichText richText={description} />
            </div>
          )}
        </div>
      </ProductTemplateStyles>
    </>
  )
}

export default Producttemplate
