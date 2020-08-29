import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { Hamburger } from './Hamburger'

const HeaderContainer = styled.header`
  width: 100%;
  margin: auto;
  box-sizing: border-box;
`
const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-transform: uppercase;
`
const Title = styled.h1`
  font-size: 18px;
  font-family: 'Poiret One', cursive;
  text-align: center;
`

export const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <Hamburger />
        <Link to="/">
          <Title>Frida Maria</Title>
        </Link>
      </Nav>
    </HeaderContainer>
  )
}