import Link from "next/link"

type Props = {
    href:string
}

function BackMob({href}:Props) {
  return (
    <Link
    className="font-semibold text-gray-400 absolute bottom-10 left-6 top-6 "
    href={href}
  >
    Go Back
  </Link>
  )
}

export default BackMob