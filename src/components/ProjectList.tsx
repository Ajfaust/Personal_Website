import { IconType } from 'react-icons'
import { FaServer } from 'react-icons/fa6'
import { FaReact } from 'react-icons/fa'

interface Project {
  id: number
  title: string
  desc: string
  icon: IconType
  tech: string[]
  url?: string
}

const projects: Project[] = [
  {
    id: 0,
    title: 'This website!',
    desc: 'My personal website, put together with React, Tailwind CSS, and Vite. A fun little project to get hands on experience with frontend frameworks and a place to express my interests.',
    icon: FaReact,
    tech: ['React', 'Typescript', 'Tailwind CSS', 'Vite'],
    url: 'https://github.com/Ajfaust/Personal_Website',
  },
  {
    id: 1,
    title: 'Home Server',
    desc: 'A personal home server hosting several open source self-hosted applications using Proxmox. More of a hobby than an actual project at this point, but taught me a lot about networking and using Docker. ',
    icon: FaServer,
    tech: ['Proxmox', 'Debian Linux', 'Ubuntu', 'Docker'],
  },
]

export function ProjectList() {
  return (
    <div className="flex flex-row justify-between max-xl:flex-col max-xl:items-center">
      {projects.map((p) => (
        <a
          href={p.url}
          target="_blank"
          key={p.id}
          className="card card-bordered max-w-80 bg-base-100 shadow-xl hover:cursor-pointer hover:border-primary/100 hover:shadow-accent"
        >
          <div className="card-body">
            <div className="card-title mb-5 space-x-2">
              <p.icon size={26} />
              <div className="card-title">{p.title}</div>
            </div>
            <p>{p.desc}</p>
            <div className="flex flex-row flex-wrap">
              {p.tech.map((t, idx) => (
                <div key={idx} className="badge badge-primary m-1 text-nowrap">
                  {t}
                </div>
              ))}
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}
