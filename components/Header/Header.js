import React from 'react'
import Links from '../UI/Links/Links'
import { useRouter } from 'next/router'

const Header = () => {

  const { route } = useRouter()

  return (
    <heade id="header">
          <Links.About href="aboutme" active={route == "/aboutme" && true} />
          <Links.Blog href="https://emreguney.xyz" />
          <Links.Home href="/" active={route == "/" && true} />
          <Links.Portfolio href="portfolio" active={route == "/portfolio" && true}  />
          <Links.Contact />
        </heade>
  )
}

export default Header