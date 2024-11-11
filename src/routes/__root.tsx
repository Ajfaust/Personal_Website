import { createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Title } from '@/components/Title.tsx'
import { JobTimeline } from '@/components/Job.tsx'

export const Route = createRootRoute({
  component: () => (
    <>
      <main>
        <div className="w-screen flex-row">
          <div className="mt-20 flex w-1/2 flex-col items-center justify-center">
            <Title />
          </div>
          <div className="mt-20 flex w-1/2 flex-col">
            <JobTimeline />
          </div>
        </div>
      </main>
      <TanStackRouterDevtools />
    </>
  ),
})
