import React from 'react'
import styled from 'styled-components/macro'
import { Button } from 'lib/Button'
import Happy from '../media/happy-project.png'
import Hippo from '../media/hippo-clothing.png'
import Productive from '../media/B-Productive.png'

const ProjectContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(1fr);
  grid-row-gap: 25px;
  justify-items: center;
  height: 100%;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr)
  }
`
const ProjectImage = styled.img`
  height: auto;
  width: 90%;
`
export const Projects = () => {
  return (
    <>
      <ProjectContainer>
        <ProjectImage src={Hippo} />
        <ProjectImage src={Happy} />
        <ProjectImage src={Productive} />
      </ProjectContainer>
      <Button title="Portfolio" />
    </>
  )
}