import * as React from 'react'
import { Link } from 'gatsby'
import { ProjectsStyles } from './ProjectsStyles'
import Project from './Project'
import usePorject from '../../hooks/use-project'

import Button from '../Button/Button'

const Features = ({ title, introduction }) => {
  const allProjects = usePorject()

  return (
    <ProjectsStyles className='section'>
      {title || introduction ? (
        <div className='container container__tight'>
          <div className='intro__area'>
            {title && <h2>{title}</h2>}
            {introduction && <p>{introduction}</p>}
          </div>
        </div>
      ) : null}

      <div className='container container__tight container__scroll'>
        {allProjects.map((node, index) => {
          return <Project feature={node} key={index} />
        })}
      </div>
      <div className='container container__tight learn__more'>
        <Button as={Link} to='/products' text='All Products' />
      </div>
    </ProjectsStyles>
  )
}

export default Features
