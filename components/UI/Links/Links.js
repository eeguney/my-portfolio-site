import Link from "next/link"
import Icons from "../Icons"

const Links = {
  Home: ({ href, active }) => {
    return (
      <Link href={href}>
        <a className={active ? "activeLink" : ""} data-title="Home">
          <Icons.Home size={30} />
        </a>
      </Link>
    )
  },
  About: ({ href, active }) => {
    return (
      <Link href={href}>
        <a className={active ? "activeLink" : ""} data-title="About Me">
          <Icons.About size={30} />
        </a>
      </Link>
    )
  },
  Portfolio: ({ href, active }) => {
    return (
      <Link href={href}>
        <a className={active ? "activeLink" : ""} data-title="Portfolio">
          <Icons.Portfolio size={30} />
        </a>
      </Link>
    )
  },
  Contact: ({ href, active }) => {
    return (
      <Link href="">
        <a className={active ? "activeLink" : ""} data-title="Contact">
          <Icons.Contact size={30} />
        </a>
      </Link>
    )
  },
  Blog: ({ href, active }) => {
    return (
      <Link href={href}>
        <a className={active ? "activeLink" : ""} data-title="Blog">
          <Icons.Blog size={30} />
        </a>
      </Link>
    )
  },
  Github: ({ href }) => {
    return (
      <Link href={href}>
        <a className="github">
          <Icons.Github size={22} />
        </a>
      </Link>
    )
  },
  Linkedin: ({ href }) => {
    return (
      <Link href={href}>
        <a className="linkedin">
          <Icons.Linkedin size={22} />
        </a>
      </Link>
    )
  },
  Twitter: ({ href }) => {
    return (
      <Link href={href}>
        <a className="twitter">
          <Icons.Twitter size={22} />
        </a>
      </Link>
    )
  },
  Email: ({ mail }) => {
    return (
      <Link href={`mailto:${mail}`}>
        <a className="email" data-title="Email">
          <Icons.Contact size={22} />
        </a>
      </Link>
    )
  },
  MoreAboutMe: ({ href }) => {
    return (
      <Link href={href}>
        <a className="moreaboutme">
          <span>MORE ABOUT ME <Icons.RightArrow size={22} /></span>
        </a>
      </Link>
    )
  },
}

export default Links