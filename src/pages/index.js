import * as React from 'react'
import Layout from '../components/Layout'
import HeroModule from '../components/Hero/HeroModule'
import BasicTextModule from '../components/BasicTextModule/BasicTextModule'
import PerksModule from '../components/PerksModule/PerksModule'
import Perk from '../components/PerksModule/Perk'
import Features from '../components/Features/Projects'
import LatestPosts from '../components/Post/LatestPosts'
export default function Home() {
  return (
    <Layout>
      <HeroModule
        title='Willkommen in Company'
        subTitle='Website erstellen lassen –
Gedacht. Gemacht.'
      />
      <BasicTextModule
        title='Die eigene Website von Profis erstellen lassen'
        content='Keinen freien Moment? Überlassen Sie Ihre Website uns, während Sie sich auf Ihr Tagesgeschäft fokussieren! Wir bieten für jedes Vorhaben das passende Angebot.'
        paragraph='Weitere Informationen erhalten Sie auf unserer Produktseite oder telefonisch unter Tel: 0123 456 78912.'
        link='/services'
        linkText='Services anzeigen'
      />
      <PerksModule>
        <Perk title='The Title' content='The content' />
      </PerksModule>
      <Features
        title='Featured Products from Barcadia.'
        introduction='Vivamus quam mauris, pulvinar vel mauris id, interdum semper neque. Proin malesuada libero eget tellus scelerisque, id egestas tortor egestas.'
      />
      {/*       <LatestPosts
        title='The Latest from Barcadia'
        introduction='Cras scelerisque, tellus sed gravida tincidunt, velit tellus blandit justo, nec viverra augue erat in erat. Maecenas iaculis sed purus non fringilla.'
      /> */}
    </Layout>
  )
}
