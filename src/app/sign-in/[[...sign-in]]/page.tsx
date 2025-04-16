import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <div className="flex place-content-center">
      <div className="pt-50">
        <SignIn />
      </div>
    </div>
  )
}
