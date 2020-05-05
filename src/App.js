import React from 'react'
import { Card } from 'Components/Card'
import movieImg from './Media/movie-portrait.png'

export const App = () => {
  return (
    <div>
      <Card
        coverImage={movieImg}
        title='MOVIE SITE'
        intro='Web app listing movies based on the The Movie Database API' />
    </div>
  )
}
