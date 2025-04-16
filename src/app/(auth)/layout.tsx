const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex place-content-center h-full">
      <div className="self-center pb-30">{children}</div>
    </div>
  )
}

export default AuthLayout
