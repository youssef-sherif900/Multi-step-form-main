type headingProps ={
    title:string,
    desc:string
}
function Heading({title, desc}:headingProps) {
  return (
    <div>
      <h1 className="font-bold text-xl md:text-3xl">{title}</h1>
      <p className="text-gray-400  w-[250px] md:w-auto mt-1 md:mt-2">{desc}</p>
    </div>
  );
}

export default Heading;
