import Image from 'next/image'
import SocialMedia from '../SocialMedia/SocialMedia'
import Links from '../UI/Links/Links'

const Hero = () => {
  return (
    <section className="section-box">
      <div className="user-image">
        <Image src="/images/user.jpg" width={350} height={350} objectFit="cover" className="rounded-full" />
      </div>
      <div className="hero-user-info">
        <h1>Emre Güney</h1>
        <h2>Frontend Developer</h2>
        <SocialMedia />
        <p>I am Turkish, a self-taught frontend developer who is open to learning and innovation, works hard and learns fast. Also interested backend technologies and Web 3.0 👌</p>
        <Links.MoreAboutMe href="aboutme" />
      </div>
    </section>
  )
}

export default Hero