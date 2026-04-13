import type { ReactNode } from "react"
import './Header.css'
interface Headerprops{
    children : ReactNode;
}


const Header = ({children} : Headerprops)  =>  {
  return (
    <header>
    {children}

    </header>
  )
}

export default Header