'use client'

import Link from "next/link";

import style from './activeLink.module.css';
import { usePathname } from "next/navigation";



interface Props{
   path: string,
   text: string; 
}


// TODO ES GENERADO DESDE EL SERVIDOR, PERO LA FUNCIONALIDA DE LOS LINKS SE HACE DESDE EL CLINTE POR LA DIRECTIVA CLIENT

export const ActiveLink = ({path,text}:Props) => {

     const pathName = usePathname();


  return (
    <Link 
    className={`${style.link}  ${ (pathName === path) && style['active-link']}`}
    href={path}>
        {text}
    </Link>

  )
}


