import React from 'react'
import styled from 'styled-components/macro'
import { Button } from 'lib/Button'

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
  margin: 20px 0;

  @media (min-width: 1024px){
    width: 70%;
  }
`
const Tag = styled.p`
  margin: 10px 10px 0 0;
  padding: 6px 10px;
  background: #e0e8e4;
  color: #000;
  font-family: 'Poiret One', cursive;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;

  :hover {
    background: #f7c5bb;
  }
`

export const Tech = () => {
  const techArr = ['HTML', 'CSS', 'JavaScript', 'ES6', 'JSX', 'React', 'Styled Components', 'React Hooks', 'React Native', 'Redux', 'Node.js', 'Mongo DB', 'Web Accessibility', 'API:s', 'mob-programming', 'pair-programming', 'GitHub']

  return (
    <>
      <Tags>
        {techArr.map((item, index) => (
          <Tag key={index} item={item}>{item}</Tag>
        ))}
      </Tags>
      <Button title="More skills" />
    </>
  )
}
