import * as React from 'react'
import Button from '../Button/Button'
import { AboutTextModuleStyles } from './AboutTextModuleStyles'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const BasicTextModule = ({ title, content, link, linkText, paragraph }) => {
  return (
    <AboutTextModuleStyles className="section section_padding">
      <div className="container container__tight">
        <div>
          {title && <h2>{title}</h2>}
          {content && <p style={{ marginBottom: '60px' }}>{content}</p>}
          {paragraph && (
            <p style={{ marginBottom: '40px', maxWidth: '27rem ' }}>
              {paragraph}
            </p>
          )}
          <Button text={linkText} as={Link} to={link} />
        </div>
      </div>
    </AboutTextModuleStyles>
  )
}

export default BasicTextModule
