'use client'

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <ProgressBar height="2px" color="#ffffff" options={{ showSpinner: false }} shallowRouting />
    </>
  )
}

export default Providers
