import { Children } from "react"
type cardProps = {
    title:string,
    price:string,
    children:React.ReactNode,
    handleClick:React.MouseEventHandler<HTMLButtonElement>,
    active:boolean
    value:number,
    toggle:"Monthly"|"Yearly"
}
function Card({title, price, children, handleClick, active, value, toggle}:cardProps) {
  return (
    <button
    onClick={handleClick}
    value={value}
     className={`
    ${active && "border-purple-500 bg-slate-100"}
     md:w-[135px] ${toggle === "Monthly" ? "md:h-[160px]" : "md:h-[180px]"} rounded-md border-[1px] border-gray-300 flex md:flex-col md:justify-between px-3 ${toggle==="Monthly"?"py-4":"py-2"} md:py-4
   hover:border-purple-500
    `}>
    {children}
    <div className="flex flex-col ml-3 md:ml-0 items-start">
    <h3 className="text-blue-900 font-bold">{title}</h3>
    <p className="text-gray-400 font-regular">${price}{toggle === "Monthly" ? "/mo" :"/yr"}</p>
    {toggle === "Yearly" && <p className="text-blue-800 text-sm"
    >2 months free</p>}
    </div>
    
  </button>
  )
}

export default Card