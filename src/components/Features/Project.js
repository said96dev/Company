import * as React from 'react'
import { Link } from 'gatsby'
import Button from '../Button/Button'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { FeaturedProductStyles } from './ProjectsStyles'

const Project = ({ feature }) => {
  const {
    url,
    image,
    title,
    description: { description },
  } = feature
  const img = getImage(image)
  return (
    <FeaturedProductStyles>
      <Link to={url}>
        <GatsbyImage
          className='features__item--img'
          image={img}
          alt='Product Image'
        />
        {title && description && (
          <div className='features__item--content'>
            {title && <h4>{title}</h4>}

            <Button text='Mehr erfahren' as='span' arrow={true} />
          </div>
        )}
      </Link>
    </FeaturedProductStyles>
  )
}

export default Project
