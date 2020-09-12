import React from 'react'
import styled from 'styled-components/macro'
import { Button } from 'lib/Button'
import { Projects } from 'components/Projects'
import { Tech } from 'components/Tech'
import { Thoughts } from 'components/Thoughts'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;

 /*  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr)
  } */
`
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* height: 800px; */
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  background: ${(props) => (props.background || '#f1f1f3')};
  font-family: 'EB Garamond', serif;
`
const SectionTitle = styled.h2`
  font-family: 'Poiret One', cursive;
  font-size: 20px;
  text-transform: uppercase;
`
const Symbols = styled.h3`
  font-family: 'Poiret One', cursive;
  font-size: 80px;
`

export const LandingPage = () => {
  return (
    <Container>
      <Section background="#f7c5bb">
        <Symbols>&#60; &#47; &#62;</Symbols>
        Project Manager turned Frontend Developer
        <Button title="About me" />
      </Section>
      <Section>
        <SectionTitle>Tech</SectionTitle>
        <Tech />
      </Section>
      <Section background="#e0e8e4">
        <SectionTitle>Portfolio Highlights</SectionTitle>
        <Projects />
      </Section>
      <Section>
        <SectionTitle>Thoughts on tech</SectionTitle>
        <Thoughts />
      </Section>
      <Section background="#e0e8e4">
        <SectionTitle>Contact</SectionTitle>
      </Section>
    </Container>
  )
}