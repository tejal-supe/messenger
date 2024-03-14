'use client'

import React from "react";
import clsx from "clsx";
import Link from "next/link";

interface ItemProps {
    href:string;
    label:string;
    icon:any;
    onClick?:()=>void;
    active?:boolean;
}
const DesktopItem:React.FC<ItemProps> = ({href,label,icon:Icon,onClick,active}) => {

    const handleClick = () =>{
        if(onClick){
            return onClick();
        }
    }

  return (
   <li onClick={handleClick}> 
        <Link href={href} className={clsx(`group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold text-gray-400 hover:text-black hover:bg-gray-200`, active && `bg-gray-100 !text-black`)}>
            <Icon className="h-6 w-6 shrink-0" />
        <span className="sr-only">{label}</span>
        </Link>
   </li>
  )
}

export default DesktopItem