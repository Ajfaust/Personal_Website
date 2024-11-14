import { useState } from 'react'

interface MenuItem {
  id: number
  title: string
  url: string
}

const menuItems: MenuItem[] = [
  {
    id: 0,
    title: 'About',
    url: '/#about',
  },
  {
    id: 1,
    title: 'Experience',
    url: '/#experience',
  },
  {
    id: 2,
    title: 'Projects',
    url: '/#projects',
  },
]

function handleFocusChange(id: number) {}

export function Menu() {
  const [focused, setFocused] = useState(0)

  return (
    <div className="m-10 flex flex-col space-y-5">
      {menuItems.map((item) => (
        <a
          key={item.id}
          href={item.url}
          className="active link text-xl no-underline hover:text-primary"
        >
          {item.title}
        </a>
      ))}
    </div>
  )
}
