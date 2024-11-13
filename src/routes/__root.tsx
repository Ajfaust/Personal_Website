import { createRootRoute } from '@tanstack/react-router'
import { Title } from '@/components/Title.tsx'
import { JobTimeline } from '@/components/JobTimeline.tsx'
import { ProjectList } from '@/components/ProjectList.tsx'
import React, { Suspense } from 'react'

const TanStackRouterDevtools =
  process.env.NODE_ENV === 'production'
    ? () => null // Render nothing in production
    : React.lazy(() =>
        // Lazy load in development
        import('@tanstack/router-devtools').then((res) => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        }))
      )

export const Route = createRootRoute({
  component: () => (
    <>
      <main>
        <div className="my-20 flex flex-col items-center xl:flex-row xl:items-start xl:justify-center xl:space-x-32 2xl:space-x-52">
          <div className="mb-20 w-1/2 lg:w-1/3 xl:sticky xl:top-20 xl:w-1/3 2xl:w-1/5">
            <Title />
          </div>
          <div className="w-2/5 items-center xl:relative">
            <div
              id="about"
              w-className="mb-20 flex flex-col space-y-5 text-left"
            >
              <SectionTitle title="About Me" />
              <p>
                I am a software engineer with experience in both the medical
                device and aerospace fields. I am most comfortable with C# and
                Python, but can adjust to other languages quickly and with ease.
                My favorite work has been that where I can see real-world impact
                or learning new skills, and where I can collaborate with
                multiple teams to create products end-users will enjoy and find
                intuitive.
              </p>
              <p>
                During my free time, I mostly like to rock climb, run, play
                video games, and hang out with my girlfriend and my cat. I love
                to get into new hobbies and ideas, my most recent of which have
                been drawing and flight simulation.
              </p>
            </div>
            <div className="divider my-10 min-w-full" />
            <div id="experience my-20">
              <SectionTitle title="Experience" />
              <JobTimeline />
            </div>
            <div className="divider my-10" />
            <div id="projects pb-20">
              <SectionTitle title="Projects" />
              <ProjectList />
            </div>
          </div>
        </div>
      </main>
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </>
  ),
})

function SectionTitle(props: { title: string }) {
  return (
    <div className="mb-10 text-center text-3xl font-bold xl:text-left">
      {props.title}
    </div>
  )
}
