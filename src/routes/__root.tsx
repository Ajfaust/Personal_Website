import { createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Title } from '@/components/Title.tsx'
import { JobTimeline } from '@/components/JobTimeline.tsx'
import { ProjectList } from '@/components/ProjectList.tsx'

export const Route = createRootRoute({
  component: () => (
    <>
      <main>
        <div className="grid w-screen max-md:grid-cols-2">
          <div className="my-10 flex-col justify-items-center">
            <Title />
          </div>
          <div className="mt-20 w-1/2">
            <JobTimeline />
          </div>
        </div>
        <div>
          <ProjectList />
        </div>
      </main>
      <TanStackRouterDevtools />
    </>
  ),
})
