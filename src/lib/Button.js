import React from 'react'
import styled from 'styled-components/macro'

const StyledButton = styled.button`
  display: block;
  width: 90%;
  max-width: 500px;
  margin-top: 15px;
  padding: 8px 14px;
  border: 1px solid ${(props) => (props.border || '#000')};
  background: ${(props) => (props.background || 'none')};
  color: ${(props) => (props.color || '#1a1a1a')};
  font-family: 'Poiret One', cursive;
  font-size: ${(props) => (props.fontSize || '16px')};
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;

  :hover {
    background: #000;
    color: #fff;
  }

  @media (max-width: 400px) {
    font-size: 12px;
  }
`

export const Button = ({ border, background, color, title, onClick, fontSize }) => (
  <StyledButton
    onClick={onClick}
    border={border}
    background={background}
    color={color}
    fontSize={fontSize}>
    {title}
  </StyledButton>
)