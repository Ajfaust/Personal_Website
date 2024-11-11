import { IconType } from 'react-icons'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa6'

export function Title() {
  return (
    <>
      <Avatar />
      <div className="text-center">
        <h1 className="text-5xl font-bold">Hi, I'm Andrew</h1>
        <p className="py-6">
          I'm a .NET developer with a passion for building user-friendly
          applications.
        </p>
      </div>
      <div className="flex flex-row space-x-3">
        <Social Icon={FaGithub} url="https://github.com/Ajfaust" />
        <Social Icon={FaLinkedin} url="https://linkedin.com/in/ajfaust" />
        <Social Icon={FaEnvelope} url="mailto:hello@ajfaust.com" />
      </div>
    </>
  )
}

function Avatar() {
  return (
    <div className="avatar">
      <div className="w-48 rounded-full">
        <img src="/src/assets/profile.png" alt="Avatar" />
      </div>
    </div>
  )
}

function Social(props: { Icon: IconType; url: string }) {
  return (
    <a href={props.url}>
      <props.Icon size={28} className="hover:text-primary" />
    </a>
  )
}
