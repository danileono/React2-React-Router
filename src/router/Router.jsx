import { Routes, Route, useLocation } from "react-router-dom"

import Navigation from "../components/Navigation"
import Home from "../views/Home"
import Contacto from "../views/Contacto"
import NotFound from '../views/NotFound'


const Router = ()=> {
const location = useLocation()

const renderNavigation = ()=> {
        const pathname = location.pathname
        if(pathname === '/login' || pathname === '/registro') {
                return false
        }

        return true
}

return (
        <>
                { renderNavigation() && <Navigation />}

                <Routes>
                        <Route path="/" element={ <Home /> } />
                        <Route path="/contacto" element={ <Contacto /> } />
                        <Route path="*" element={ <NotFound /> } />
                </Routes>
        </>
)
}

export default Router