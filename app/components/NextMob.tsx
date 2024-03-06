import Link from "next/link"

type props = {
    href:string,
    onClick?:()=>void
}

function NextMob({href, onClick}:props) {
  return (
    <Link className="absolute right-6 top-3" href={href}>
    <button
      type="submit"
      onClick={onClick}
      className="w-[125px] h-12 bg-blue-900 rounded-md text-white font-semibold"
    >
      Next Step
    </button>
  </Link>
  )
}

export default NextMob