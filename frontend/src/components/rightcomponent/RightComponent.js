import React from 'react'
import Events from '../Events/Events'
import OnlineContact from '../OnlineContact/OnlineContact'
import { Wrapper } from './RightComponent.styled'

const RightComponent = () => {
  return (
    <Wrapper>
      <Events />
      <OnlineContact />
    </Wrapper>
  )
}

export default RightComponent