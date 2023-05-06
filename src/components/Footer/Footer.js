import * as React from 'react'
import { Link } from 'gatsby'
import { menuItems } from '../../constants/links'
import { FooterStyles, FooterMenuStyles, CopyrightStyles } from './FooterStyles'
import usePorject from '../../hooks/use-project'
import socialLinks from '../../constants/social_links'
/* import { UseSiteMetadata } from '../../hooks/useSiteMetadata'
 */ import {
  FaFacebookSquare as Facebook,
  FaTwitterSquare as Twitter,
  FaInstagram as Instagram,
  FaLinkedin as Linkedin,
} from 'react-icons/fa'

const Footer = () => {
  const allProjects = usePorject()
  /*   const siteMeta = UseSiteMetadata() */
  return (
    <FooterStyles style={{ marginBottom: 0 }} className='section'>
      <div className='container container__tight'>
        <FooterMenuStyles className='footer__menu'>
          <h5>
            Links<span style={{ color: 'var(--primary)' }}>.</span>
          </h5>
          <ul>
            {menuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.path} activeClassName='menu__item--active'>
                    {item.text}
                    <span style={{ color: 'var(--primary)' }}>.</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </FooterMenuStyles>
        {allProjects.length > 0 && (
          <FooterMenuStyles className='footer__menu products__menu'>
            <h5>
              <Link to='/products'>
                Alle Produkte
                <span style={{ color: 'var(--primary)' }}>.</span>
              </Link>
            </h5>
            <ul>
              {allProjects.map((item, index) => {
                const { url, title } = item

                return (
                  <li key={index}>
                    <Link to={url}>
                      {title}
                      <span>.</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </FooterMenuStyles>
        )}
        <FooterMenuStyles className='footer__menu social__menu'>
          <h5>
            Follow Compnay<span style={{ color: 'var(--primary)' }}>.</span>
          </h5>
          <ul>
            {socialLinks.map((link, index) => {
              return (
                <li key={index}>
                  <a
                    href={link.url}
                    rel='nofollow noreferrer noopener'
                    target='_blank'
                  >
                    {link.icon}
                  </a>
                </li>
              )
            })}
          </ul>
        </FooterMenuStyles>
      </div>
      <CopyrightStyles>
        <div className='container container__tight'>
          <p>
            Designed & developed by{' '}
            <a
              href='https://said-al-hendi.netlify.app'
              target='_blank'
              rel='noopener noreferrer'
            >
              Said Al Hendi
            </a>
            <span>.</span>
          </p>
        </div>
      </CopyrightStyles>
    </FooterStyles>
  )
}

export default Footer
