import React from 'react'
import styled from 'styled-components/macro'
import { Button } from 'lib/Button'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr)
  }
`
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  background: ${(props) => (props.background || '#f1f1f3')};
`
const Symbols = styled.h2`
  font-family: 'Poiret One', cursive;
`

export const LandingPage = () => {
  return (
    <Container>
      <Section background="#f7c5bb">
        <Symbols>&#60; &#47; &#62;</Symbols>
        Project Manager turned Frontend Developer
        <Button title="About me" />
      </Section>
      <Section background="#b5cbc2">
        Projects placeholder
        <Button title="Portfolio" />
      </Section>
      <Section background="#f2c6a5">
        Tech highlights
        <Button title="More skills" />
      </Section>
      <Section background="#ecc7cf">
        Thoughts on tech
        <Button title="Test" />
      </Section>
      <Section background="#d7cec3">
        More
        <Button title="Test" />
      </Section>
      <Section background="#c4d3e5">Contact</Section>
    </Container>
  )
}