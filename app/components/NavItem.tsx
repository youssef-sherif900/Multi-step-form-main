type NavItemProps = {
  step: number;
  title: String;
  active: boolean
};

function NavItem({ step, title,active }: NavItemProps) {
  return (
    <div className="flex justify-center md:justify-start ml-6 my-4">
      <div className={`w-10 h-10 border-2  ${active ? 'bg-blue-300 border-blue-300' :'border-slate-200 text-white'}  rounded-full  flex justify-center align-middle items-center`}>
        {step}
      </div>
      <div className="hidden ml-2 md:ml-4 md:flex flex-col align-middle justify-center">
        <p className=" text-slate-300">STEP {step}</p>
        <h3 className=" text-white font-bold">{title}</h3>
      </div>
    </div>
  );
}

export default NavItem;
