import * as React from 'react'
import { PerkStyles } from './PerksModuleStyles'
import { MdOutlineClose as Cross } from 'react-icons/md'

const Perk = (step) => {
  return (
    <PerkStyles>
      {step.title && (
        <h3>
          <span className='index'>{step.index} </span>
          {step.title}
        </h3>
      )}
      {step.description && <p>{step.description}</p>}
      {step.steps.steps && (
        <ul>
          {step.steps.steps.map((item, index) => {
            return (
              <li key={index}>
                <Cross className='index' /> {item}
              </li>
            )
          })}
        </ul>
      )}
    </PerkStyles>
  )
}

export default Perk
