import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

const MenuToggle = styled.div`
  display: block;
/*   position: fixed; */
  /* top: 10px;
  left: 18px; */
  width: 26px;
  height: 20px;
  padding-top: 20px;
  padding-left: 20px;
  border-radius: 50px;
  background: rgba(255,255,255, 0.4);
  
  z-index: 2;
  
  -webkit-user-select: none;
  user-select: none;

  a {
    text-decoration: none;
    color: #232323;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #fb958b;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`
const Span = styled.span`
  display: block;
  width: 21px;
  height: 2px;
  margin-bottom: 3px;
  border-radius: 0px;
  position: relative;
  background: #000;
  
  z-index: 1;

  transform-origin: 4px 0px;
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;

  &:first-child {
    transform-origin: 0% 0%;
  }

  &:nth-last-child(2) {
    transform-origin: 0% 100%;
  }
`
const MobileNav = styled.ul`
  position: fixed;
  width: 150px;
  height: 100vh;
  margin: -100px 0 0 -50px;
  padding: 50px 50px 0 50px;
  padding-top: 100px;
  background: #ededed;

  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  
  transform-origin: 0% 0%;
  transform: translate(-100%, 0%);
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
`
const Li = styled.li`
  padding: 10px 0;
  font-size: 20px;
`
const Input = styled.input`
  display: block;
  width: 25px;
  height: 25px;
  position: absolute;
  top: -7px;
  left: -5px;

  cursor: pointer;

  opacity: 0;
  z-index: 2;

  -webkit-touch-callout: none;

  &:checked ~ ${Span} {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #1a1a1a;
  }

  &:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  &:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
  }

  &:checked ~ ${MobileNav} {
    transform: none;
  }
`

export const Hamburger = () => {
  const [check, setCheck] = useState(false)

  const menuClick = () => setCheck(!check)

  return (
    <nav>
      <MenuToggle>
        <Input type="checkbox" checked={check} onChange={menuClick} />
        <Span></Span>
        <Span></Span>
        <Span></Span>
        <MobileNav>
          <Link to="/" onClick={menuClick}>
            <Li>Home</Li>
          </Link>
          <Link to="/" onClick={menuClick}>
            <Li>About</Li>
          </Link>
          <Link to="/" onClick={menuClick}>
            <Li>Projects</Li>
          </Link>
          <Link to="/" onClick={menuClick}>
            <Li>Thoughts</Li>
          </Link>
        </MobileNav>
      </MenuToggle>
    </nav>
  )
}