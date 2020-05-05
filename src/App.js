import React from 'react'
import styled from 'styled-components/macro'
import { Card } from 'Components/Card'
import movieImg from './Media/movie-project.png'

const PrimaryContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  background: #F4F4F4;
  padding: 40px;
`

export const App = () => {
  const movie = ['JavaScript ES6', 'React.js', 'JSX', 'CSS3', 'API']

  return (
    <div>
      <PrimaryContainer>
        <Card
          coverImage={movieImg}
          title="MOVIE SITE. "
          intro="Web app listing movies based on the The Movie Database API"
          arr={movie} />

        <Card
          coverImage={movieImg}
          title="MOVIE SITE. "
          intro="Web app listing movies based on the The Movie Database API"
          arr={movie} />

        <Card
          coverImage={movieImg}
          title="MOVIE SITE. "
          intro="Web app listing movies based on the The Movie Database API"
          arr={movie} />

        <Card
          coverImage={movieImg}
          title="MOVIE SITE. "
          intro="Web app listing movies based on the The Movie Database API"
          arr={movie} />

      </PrimaryContainer>
    </div>
  )
}
