import { createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Title } from '@/components/Title.tsx'
import { JobTimeline } from '@/components/JobTimeline.tsx'
import { ProjectList } from '@/components/ProjectList.tsx'

export const Route = createRootRoute({
  component: () => (
    <>
      <main>
        <div className="flex flex-row items-start max-lg:flex-col">
          <div className="sticky left-40 top-20 mt-20 max-w-2xl justify-items-center max-lg:relative">
            <Title />
          </div>
          <div className="min-lg:relative mx-auto mt-20 max-w-2xl">
            <div id="about" className="mb-20 space-y-5 text-left">
              <div className="text-3xl font-bold">About Me</div>
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
            <div className="divider my-10" />
            <div id="experience my-20">
              <div className="mb-10 text-3xl font-bold">Experience</div>
              <JobTimeline />
            </div>
            <div className="divider my-10" />
            <div id="projects mb-20">
              <div className="mb-10 text-3xl font-bold">Projects</div>
              <ProjectList />
            </div>
          </div>
        </div>
      </main>
      <TanStackRouterDevtools />
    </>
  ),
})
