import React from 'react'
import styled from 'styled-components/macro'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { Card } from 'components/Card'
import movieImg from './Media/movie-project.png'
import { Header } from 'components/Header'

const PrimaryContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 0px;
`

export const App = () => {

  return (
    <BrowserRouter>
      <Header />
      <PrimaryContainer>
        <Switch>
          <Route path="/" component={LandingPage} exact />
        </Switch>
      </PrimaryContainer>
    </BrowserRouter>
  )
}
