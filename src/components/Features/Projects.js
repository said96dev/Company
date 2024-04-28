import * as React from 'react'
import { Link } from 'gatsby'
import { ProjectsStyles } from './ProjectsStyles'
import Project from './Project'
import useServices from '../../hooks/use-services'
import Button from '../Button/Button'

const Features = ({ title, introduction }) => {
  const allServices = useServices()
  let services = allServices
  const pathname = typeof window !== 'undefined' ? window.location.pathname : ''
  if (pathname !== '/services/')
    services = allServices.filter((service) => service.show === true)
  return (
    <ProjectsStyles className="section">
      {title || introduction ? (
        <div className="container container__tight">
          <div className="intro__area">
            {title && <h2>{title}</h2>}
            {introduction && <p>{introduction}</p>}
          </div>
        </div>
      ) : null}

      <div className="container container__tight container__scroll">
        {services.map((node, index) => {
          return <Project feature={node} key={index} />
        })}
      </div>
      {pathname !== '/services/' ? (
        <div className="container container__tight learn__more">
          <Button as={Link} to="/services" text="Alla tjänster" />
        </div>
      ) : (
        ''
      )}
    </ProjectsStyles>
  )
}

export default Features
