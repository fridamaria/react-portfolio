import React from 'react'
import styled from 'styled-components/macro'
import { Button } from '../lib/Button'

const ThoughtsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 25px;
  justify-items: center;
  margin: 0 50px;
`
const Thought = styled.div`
  width: 100%;
`
const ThoughtImg = styled.img`
  width: 100%;
`

export const Thoughts = () => {
  return (
    <>
      <ThoughtsWrapper>
        <Thought>
          <ThoughtImg src="https://fridamaria.netlify.app/assets/backend-thoughts.jpg" />
          <h3>MAY 2020</h3>
          <h3>Backend development is not as scary as I thought</h3>
          <p>I was hesitant when the backend sprint started, semi-terrified to be honest. I imagined that it would be hard and complicated and was not as keen on it as I was going into previous sprints. The sprint is now over, and I have had some time throughout to reflect. Any surprises? Yes!</p>
          <p>&#62;&#62;</p>
        </Thought>
        <Thought>
          <ThoughtImg src="https://fridamaria.netlify.app/assets/diversity-thoughts.png" />
          <h3>MAR 2020</h3>
          <h3>Gender diversity in tech</h3>
          <p>I was originally thinking about posting this yesterday, but I got stuck coding and here we are. Then again, the subject is important regardless of it being Women’s Day or not. Seeing as the technology developed today will take part in shaping the future, it is only fair to say that we need diverse tech teams to help create a future inclusive to all of us.</p>
          <p>&#62;&#62;</p>
        </Thought>
      </ThoughtsWrapper>
      <Button title="More thoughts" />
    </>
  )
}