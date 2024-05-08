import * as React from 'react'
import { Link } from 'gatsby'
import Button from '../Button/Button'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { FeaturedProductStyles } from './ProjectsStyles'

const Project = ({ feature }) => {
  const {
    slug,
    img,
    title,
    description: { description },
  } = feature
  const imgs = getImage(img)
  return (
    <FeaturedProductStyles>
      <Link to={`/${slug}`}>
        <GatsbyImage
          className="features__item--img"
          image={imgs}
          alt="Product Image"
        />
        {title && description && (
          <div className="features__item--content">
            {title && <h4>{title}</h4>}
            <Button text="Lär dig mer" as="span" arrow={true} />
          </div>
        )}
      </Link>
    </FeaturedProductStyles>
  )
}

export default Project
