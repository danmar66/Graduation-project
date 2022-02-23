import {Outlet} from "react-router-dom"
import NavBar from "../../components/NavBar"

const PublicLayout = () => {
    return (
        <>
            <NavBar/>
            <Outlet/>
        </>
    )
}

export {PublicLayout}