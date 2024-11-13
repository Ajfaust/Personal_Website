import { IconType } from 'react-icons'
import { FaServer } from 'react-icons/fa6'
import { FaReact } from 'react-icons/fa'

interface Project {
  id: number
  title: string
  desc: string
  icon: IconType
  tech: string[]
}

const projects: Project[] = [
  {
    id: 0,
    title: 'This website!',
    desc: 'My personal website, put together with React, Tailwind CSS, and Vite. A fun little project to get hands on experience with frontend frameworks and a place to express my interests.',
    icon: FaReact,
    tech: ['React', 'Typescript', 'Tailwind CSS', 'Vite'],
  },
  {
    id: 1,
    title: 'Home Server',
    desc: 'A personal home server hosting several open source self-hosted applications using Proxmox. More of a hobby than an actual project, but taught me a lot about networking and using Docker. ',
    icon: FaServer,
    tech: ['Proxmox', 'Debian Linux', 'Ubuntu', 'Docker'],
  },
]

export function ProjectList() {
  return (
    <div className="flex flex-row justify-center max-xl:flex-col">
      {projects.map((p) => (
        <div key={p.id} className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="card-title space-x-2">
              <p.icon size={32} />
              <h2 className="card-title">{p.title}</h2>
            </div>
            <p>{p.desc}</p>
            <div className="justify-end space-x-2">
              {p.tech.map((t, idx) => (
                <div key={idx} className="badge badge-primary">
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
