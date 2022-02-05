import React from 'react'
import ContentLoader from 'react-content-loader'

const ThreeDots = props => (
  <ContentLoader
    viewBox="0 0 400 140"
    height={140}
    width={400}
    backgroundColor="transparent"
    {...props}
  >
    <circle cx="95" cy="86" r="8" />
    <circle cx="139" cy="86" r="8" />
    <circle cx="183" cy="86" r="8" />
  </ContentLoader>
)

export { ThreeDots };
