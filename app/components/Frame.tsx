import { ReactNode } from "react"

function Frame({children}:{children:ReactNode}) {
  return (
    <div className="relative flex justify-center md:bottom-0  w-full  h-full md:rounded-none">
        {children}
    </div>
  )
}

export default Frame