import Link from "next/link"

type NextProps = {
    href: string,
    submit?: ()=>void,
    
}

function Next({href,submit }: NextProps) {
  return (
    <Link className="absolute bottom-10 right-16" href={href}>
    <button type="submit" onClick={submit} className="w-[125px] h-12 bg-blue-900 rounded-md text-white font-semibold">Next Step</button>
    </Link>
  )
}

export default Next