import AdminNavbar from '../../components/admin/AdminNavbar'
import AdminSidebar from '../../components/admin/AdminSidebar'
import {Outlet} from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <AdminNavbar />
    <div className='flex'>
        <AdminSidebar />
        <div className='flex-1 py-10 px-4 md:px-10 h-[calc(100vh-64px)] overflow-y-auto'>
            <Outlet />
        </div>
    </div>
    </>
  )
}

export default Layout
