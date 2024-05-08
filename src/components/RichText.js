import React from 'react'
import 'tailwindcss/tailwind.css' // Importieren Sie Tailwind CSS direkt in Ihren Komponenten

const RichText = ({ richText }) => {
  console.log(richText.description)
  return <div className="richText">{richText.description}</div>
}

export default RichText
