import React from 'react'
import styled from 'styled-components/macro'

const Container = styled.article`
  width: 250px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12);
`

const CoverImage = styled.img`
  width: 100%
`

const Content = styled.div`
  padding: 20px;
`

const Description = styled.p`
`

const Title = styled.h3`
`

export const Card = ({ coverImage, title, intro }) => {
  return (
    <Container>
      <CoverImage src={coverImage} />
      <Content>
        <Description>
          <Title>{title}</Title>
          {intro}
        </Description>
      </Content>
    </Container>
  )
}