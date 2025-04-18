'use client'

import { UserProfile } from '@clerk/clerk-react'
import { useSession, useOrganization } from '@clerk/clerk-react'
import { Suspense } from 'react'

const Dashboard = () => {
  const { session } = useSession()
  const { organization, membership } = useOrganization()

  console.log(session)

  return (
    <div className="flex flex-col h-[90vh] place-content-center">
      <div className="self-center">
        <UserProfile />
      </div>
      <div className="flex flex-col text-sm self-center mt-12 shadow bg-[#ffffff] text-black dark:text-white dark:bg-[#1e1f24] rounded-lg p-2">
        <div>
          <Suspense fallback={<p>Session ID loading ...</p>}>
            Session ID: {session?.id}
          </Suspense>
        </div>
        {membership ? (
          <div>
            <Suspense fallback={<p>Organization ID loading ...</p>}>
              Organization ID: {organization?.id}
            </Suspense>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Dashboard
