'use client'
import "./globals.css"
import NavItem from "./components/NavItem";
import BgSidebarDesktop from "./assets/BgSidebarDesktop";
import { usePathname } from "next/navigation";
import { store } from "./hooks/store";
import { Provider } from "react-redux";
import MobileSidebar from "./assets/bg-sidebar-mobile.svg";
import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({
  subsets: ['latin'],
   weight: [ '300','400','500','700' ],
     display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  let links = [
    {
    step:1,
    description:"YOUR INFO"
  },
  {
    step:2,
    description:"SELECT PLAN"
  },
  {
    step:3,
    description:"ADD-ONS"
  },
  {
    step:4,
    description:"SUMMARY"
  },
]


const path = usePathname()

let paths = ["/","/step2","/step2/step3","/step2/step3/step4"]


  return (
    <html lang="en">
      <body  className={`${ubuntu.className} h-screen w-screen overflow-y-hidden flex md:justify-center md:items-center bg-slate-100`}>
        <Provider store={store} >
        <div className="flex md:flex-row flex-col md:h-[592px] md:aspect-[3/2] md:bg-white bg-slate-100 rounded-lg md:p-3">
          <div className="h-[172px] w-[375px] md:w-[274px]">
            <div className="absolute flex w-full justify-center md:w-auto md:flex-col z-10 mt-10">
              {links.map((link ,index) => {
                return <NavItem key={index} active={path == paths[index] } step={link.step} title={link.description} />
              })}
            </div>
          <BgSidebarDesktop />
          <MobileSidebar/>
          </div>
          <div className=" relative h-full flex justify-center rounded-lg md:rounded-none md:w-[594px] md:h-[572px]">
        {children}
          </div>
        </div>
        </Provider>
        </body>
    </html>
  );
}
