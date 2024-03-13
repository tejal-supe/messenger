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
        <Link href={href}>
            <Icon className="h-6 w-6" />
        <span>{label}</span>
        </Link>
   </li>
  )
}

export default DesktopItem