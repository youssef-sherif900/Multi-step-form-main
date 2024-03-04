'use client'
import { Inter } from "next/font/google";
import "./globals.css"
import NavItem from "./components/NavItem";
import BgSidebarDesktop from "./assets/BgSidebarDesktop";
import { usePathname } from "next/navigation";
import { store } from "./hooks/store";
import { Provider } from "react-redux";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

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
      <body  className="h-screen w-screen flex justify-center items-center bg-slate-100">
        <Provider store={store} >
        <div className="flex h-[592px] aspect-[3/2] bg-white rounded-lg p-3">
          <div className="w-[274px]">
            <div className="absolute z-10 mt-10">
              {links.map((link ,index) => {
                return <NavItem key={index} active={path == paths[index] } step={link.step} title={link.description} />
              })}
            </div>
          <BgSidebarDesktop />
          </div>
          <div className="w-[594px] h-[572px]">
        {children}
          </div>
        </div>
        </Provider>
        </body>
    </html>
  );
}
