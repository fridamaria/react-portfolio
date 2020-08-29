import React from 'react'
import styled from 'styled-components/macro'

const Container = styled.article`
  width: 100%;
  margin: 10px 0px;
`

const CoverImage = styled.img`
  width: 100%
`

const Content = styled.div`
`

const Description = styled.div`
`

const Title = styled.h3`
  display: inline;
  font-size: 17px;
`

const Intro = styled.p`
  display: inline;
  font-size: 17px;
`

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Tag = styled.p`
  margin: 4px 4px 0 0;
  padding: 4px 8px;
  background: #f3d4d4;
  font-size: 9px;
`

export const Card = ({ coverImage, title, intro, arr }) => {
  return (
    <Container>
      <CoverImage src={coverImage} />
      <Content>
        <Description>
          <Title>{title}</Title>
          <Intro>{intro}</Intro>
        </Description>
        <Tags>
          {arr.map((item, index) => (
            <Tag key={index} item={item}>{item}</Tag>
          ))}
        </Tags>
      </Content>
    </Container>
  )
}