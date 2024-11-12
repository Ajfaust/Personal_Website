interface JobProps {
  company: string
  title: string
  location: string
  start: string
  end?: string
  description: string
  tech: string[]
}

const jobs: JobProps[] = [
  {
    company: 'NovaSignal',
    title: 'Software Engineer',
    location: 'Los Angeles, CA',
    start: 'Aug. 2021',
    end: 'Jul. 2023',
    description:
      'Developed and maintained the main customer-facing application of a cerebral robotic ultrasound device, including upgrading and adding key exam export features',
    tech: ['C#', '.NET', 'Python', 'SQLite', 'Jenkins'],
  },
  {
    company: 'General Atomics',
    title: 'Software Developer II',
    location: 'San Diego, CA',
    start: 'May. 2020',
    end: 'Jun. 2021',
    description:
      'Built the fault and alert service for the central software controller of a large laser system, and collaborated with cross-functional teams to facilitate the integration and testing of software and hardware components',
    tech: ['C++', 'RedHat Linux'],
  },
  {
    company: 'Riot Energy (formerly ZPower)',
    title: 'Software Engineer',
    location: 'Camarillo, CA',
    start: 'Jan. 2018',
    end: 'May 2020',
    description:
      'Worked with engineers and manufacturing floor workers to design and enhance core desktop and web applications used throughout the battery manufacturing process',
    tech: ['C#', '.NET', 'ASP.NET', 'Python', 'MSSQL'],
  },
  {
    company: 'Bunim Murray Productions',
    title: 'Software Engineer (Contract)',
    location: 'Glendale, CA',
    start: 'Sep. 2017',
    end: 'Nov. 2017',
    description:
      'Worked with CTO, IT, HR, and Receptionists to import data from SQL Databases and HRM software into interactive applications for better visibility and ease of use',
    tech: ['C#', 'JavaScript', 'MSSQL'],
  },
]

export function JobTimeline() {
  return (
    <ul className="timeline timeline-vertical timeline-snap-icon max-md:timeline-compact">
      {jobs.map((job: JobProps, idx: number) => (
        <li>
          {idx > 0 && <hr />}
          <div className="timeline-start mb-auto">
            <div className="mx-5 font-light">
              {job.start} - {job.end ?? 'Present'}
            </div>
          </div>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mx-5 mb-10">
            <div className="mb-2">
              <p className="font-bold">{job.company}</p>
              <p className="italic">{job.title}</p>
            </div>
            <p>{job.description}</p>
            <div className="my-2 space-x-2">
              {job.tech.map((t) => (
                <div className="badge badge-accent">{t}</div>
              ))}
            </div>
          </div>
          {idx < jobs.length - 1 && <hr />}
        </li>
      ))}
    </ul>
  )
}
