import React from 'react'
import { MenuProvider } from './src/components/MenuContext'
import { AnimatePresence } from 'framer-motion'
import 'tailwindcss/tailwind.css' // Importieren Sie Tailwind CSS direkt in Ihren Komponenten

export function wrapPageElement({ element }) {
  return <AnimatePresence>{element}</AnimatePresence>
}

export function wrapRootElement({ element }) {
  return <MenuProvider>{element}</MenuProvider>
}
