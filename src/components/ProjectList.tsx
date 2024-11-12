interface Project {
  title: string
  desc: string
  tech: string[]
}

const projects: Project[] = [
  {
    title: 'This website!',
    desc: 'My personal website, put together with React, Tailwind CSS, and Vite. Gave me a great introduction to React and Typescript.',
    tech: ['React', 'Typescript', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'Home Server',
    desc: 'A personal home server hosting several open source self-hosted applications using Proxmox. More of a hobby than an actual project, but taught me a lot about networking and using Docker. ',
    tech: ['Proxmox', 'Debian Linux', 'Ubuntu', 'Docker'],
  },
]

export function ProjectList() {
  return (
    <div className="flex flex-row">
      {projects.map((p) => (
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{p.title}</h2>
            <p>{p.desc}</p>
            <div className="justify-end space-x-2">
              {p.tech.map((t) => (
                <div className="badge badge-primary">{t}</div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
