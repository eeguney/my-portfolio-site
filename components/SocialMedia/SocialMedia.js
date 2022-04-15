import Links from '../UI/Links/Links'

const SocialMedia = () => {
    return (
        <div className="social-media">
            <Links.Linkedin href="https://www.linkedin.com/in/emre-guney/"/>
            <Links.Github href="https://github.com/eeguney" />
            <Links.Twitter href="https://twitter.com/eeguney7" />
            <Links.Email mail="emreguney@outlook.com.tr" />
        </div>
    )
}

export default SocialMedia