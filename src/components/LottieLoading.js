import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../assets/loading.json'
import styled from 'styled-components'

const LottieContainer = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  p {
    color: #fff;
    font-size: 20px;
  }
`

export const LottieLoading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <LottieContainer>
      <Lottie options={defaultOptions} height={350} width={250} />
      <p>Loading...</p>
    </LottieContainer>
  )
}
