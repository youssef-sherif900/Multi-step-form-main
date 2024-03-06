import { ReactNode } from "react"

function MobileFrame({children}:{children:ReactNode}) {
  return (
    <div className=" w-[85%] p-5 py-6 md:px-20 md:py-10  bg-white relative bottom-10 md:static  rounded-md h-fit md:h-full md:w-full ">
        {children}
    </div>
  )
}

export default MobileFrame