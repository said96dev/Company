import * as React from 'react'
import Button from '../Button/Button'
import { BasicTextModuleStyles } from './BasicTextModuleStyles'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const BasicTextModule = ({ title, content, link, linkText, paragraph }) => {
  return (
    <BasicTextModuleStyles className='section section_padding'>
      <div className='container container__tight'>
        <div>
          {title && <h2>{title}</h2>}
          {content && <p style={{ marginBottom: '60px' }}>{content}</p>}
          {paragraph && (
            <p style={{ marginBottom: '40px', maxWidth: '27rem' }}>
              {paragraph}
            </p>
          )}
          <Button text={linkText} as={Link} to={link} />
        </div>
        <StaticImage
          src='../../assets/images/basic.svg'
          alt='Banner Image'
          layout='fullWidth'
          placeholder='blurred'
        />
      </div>
    </BasicTextModuleStyles>
  )
}

export default BasicTextModule
