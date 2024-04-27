import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { PerksModuleStyles } from './PerksModuleStyles'
import { MdOutlineClose as Cross } from 'react-icons/md'
import Perk from './Perk'
import useSteps from '../../hooks/use-steps'
const PerksModule = () => {
  const steps = useSteps()
  return (
    <PerksModuleStyles className="section section__padding">
      <StaticImage
        className="perks__image--bg"
        src="../../assets/images/abstract-building.jpg"
        alt="Perks Module"
        layout="constrained"
        placeholder="tracedSVG"
      />
      <div className="perks__image--overlay">
        <h2>In 3 Schritten zu Ihrer Website</h2>
        <p>
          Moderne Webseiten, optimiert für mobile Endgeräte und Suchmaschinen
        </p>
      </div>

      <div className="container container__tight">
        {steps.map((step, index) => {
          return (
            <Perk key={index} {...step}>
              {step.index}
            </Perk>
          )
        })}
      </div>
    </PerksModuleStyles>
  )
}

export default PerksModule
