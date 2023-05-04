import React from 'react'
import About from './About'
import Mywork from './Mywork'
import Recommendation from './Recommendation'
import SkillsSection from './SkillsSection'
import Title from './Title'

export default function Homepage() {
  return (
    <div>
        <Title/>
        <About/>
        <SkillsSection/>
        <Mywork/>
        <Recommendation/>
    </div>
  )
}
