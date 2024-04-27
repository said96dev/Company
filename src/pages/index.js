import * as React from 'react'
import Layout from '../components/Layout'
import HeroModule from '../components/Hero/HeroModule'
import BasicTextModule from '../components/BasicTextModule/BasicTextModule'
import PerksModule from '../components/PerksModule/PerksModule'
import Perk from '../components/PerksModule/Perk'
import Features from '../components/Features/Projects'
export default function Home() {
  return (
    <Layout>
      <HeroModule
        title="Välkomna till AL Alltjänst."
        subTitle=" Din pålitliga partner för hem och företag!"
      />
      <BasicTextModule
        title=" AL Alltjänst: Ditt förstahandsval för måleri, renovering och underhåll av fastigheter"
        content="
På AL Alltjänst har vi engagerat oss i att leverera förstklassiga tjänster inom måleri, renovering och underhåll av fastigheter. Med vår långa erfarenhet och ett team av dedikerade proffs, ser vi till att varje projekt hanteras med yrkesskicklighet. Från första planering till slutförande, är vår högsta prioritet att du ska bli helt nöjd. Vi erbjuder pålitliga lösningar som inte bara gör din fastighet vackrare utan också förbättrar derens hållbarhet och funktion. Välj AL Alltjänst för att göra din vardag enklare och mer njutbar."
        link="/services"
        linkText="Visa tjänster"
      />
      {/*    <PerksModule>
        <Perk title="The Title" content="The content" />
      </PerksModule> */}
      <Features
        title="Vivamus Interdum Neque Scelerisque"
        introduction="Vivamus quam mauris, pulvinar vel mauris id, interdum semper neque. Proin malesuada libero eget tellus scelerisque, id egestas tortor egestas."
      />
      {/*       <LatestPosts
        title='The Latest from Barcadia'
        introduction='Cras scelerisque, tellus sed gravida tincidunt, velit tellus blandit justo, nec viverra augue erat in erat. Maecenas iaculis sed purus non fringilla.'
      /> */}
    </Layout>
  )
}
