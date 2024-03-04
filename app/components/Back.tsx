import Link from "next/link";

type BackProps = {
    href:string
}

function Back({href}:BackProps) {
  return (
    <Link
      className="font-semibold text-gray-400 absolute bottom-10 left-16 mb-2"
      href={href}
    >
      Go Back
    </Link>
  );
}

export default Back;
