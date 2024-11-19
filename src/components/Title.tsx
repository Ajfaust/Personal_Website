import { IconType } from 'react-icons'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa6'

export function Title() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Avatar />
      <div className="text-center">
        <p className="text-4xl font-bold xl:text-5xl">Andrew Faust</p>
        <p className="mb-5 mt-2 text-xl">Software Engineer</p>
      </div>
      <div className="flex flex-row space-x-5">
        <Social Icon={FaGithub} url="https://github.com/Ajfaust" />
        <Social Icon={FaLinkedin} url="https://linkedin.com/in/ajfaust" />
        <Social Icon={FaEnvelope} url="mailto:hello@ajfaust.com" />
      </div>
    </div>
  )
}

function Avatar() {
  return (
    <div className="avatar">
      <div className="m-5 w-44 rounded-full">
        <img src="/profile.png" alt="Avatar" />
      </div>
    </div>
  )
}

function Social(props: { Icon: IconType; url: string }) {
  return (
    <a
      href={props.url}
      target="_blank"
      className="transition ease-in-out hover:scale-125 hover:transition-all"
    >
      <props.Icon size={32} className="hover:text-primary" />
    </a>
  )
}
