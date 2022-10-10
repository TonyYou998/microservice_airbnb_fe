import React from 'react'
import AnimatedText from 'react-animated-text-content';

export default function Slogan() {
  return (
    <AnimatedText
  type="words" // animate words or chars
  animation={{
    x: '200px',
    y: '-20px',
    scale: 1.1,
    ease: 'ease',
  }}
  animationType="lights"
  interval={0.3}
  duration={1.2}
  tag="h1"
  className="animated-paragraph header__slogan"
  includeWhiteSpaces
  threshold={0.1}
  rootMargin="20%"
>
  Come,stay and enjoy your trip
</AnimatedText>
  )
}
