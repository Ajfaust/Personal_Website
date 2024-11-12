import { IconType } from 'react-icons'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa6'

export function Title() {
  return (
    <div className="hero max-h-screen">
      <div className="hero-content w-screen flex-col lg:flex-row lg:justify-between">
        <div className="w-auto justify-items-center">
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
        </div>
        <div className="my-auto w-1/3 space-y-5 text-left max-lg:mx-32 max-lg:w-full">
          <div className="text-3xl font-bold">About Me</div>
          <p>
            I am a software engineer with experience in both the medical device
            and aerospace fields. I am most comfortable with C# and Python, but
            can adjust to other languages quickly and with ease. My favorite
            work has been that where I can see real-world impact or learning new
            skills, and where I can collaborate with multiple teams to create
            products end-users will enjoy and find intuitive.
          </p>
          <p>
            During my free time, I like to rock climb, run, play video games,
            and hang out with my girlfriend and my cat. I love to get into new
            hobbies and ideas, my most recent of which have been drawing and
            flight simulation.
          </p>
        </div>
      </div>
    </div>
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
