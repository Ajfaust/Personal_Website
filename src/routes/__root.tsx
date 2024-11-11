import { createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Title } from '@/components/Title.tsx'

export const Route = createRootRoute({
  component: () => (
    <>
      <main>
        <div className="w-screen flex-row">
          <div className="mt-20 flex w-1/2 flex-col items-center justify-center">
            <Title />
          </div>
        </div>
      </main>
      <TanStackRouterDevtools />
    </>
  ),
})
