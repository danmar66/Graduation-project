import {Outlet} from "react-router-dom"
import AdminNavBar from "../../components/AdminNavBar";
import {Container} from "react-bootstrap";

const AdminLayout = () => {
    return (
        <>
            <AdminNavBar/>
            <Container className='mt-3'>
                <Outlet/>
            </Container>
        </>
    )
}

export {AdminLayout}