import { NavLink, Outlet } from 'react-router-dom';
const AdminLayout = () => {
  return (
    <>
      <header className="bg-light py-3 mb-4">
        <div className="container">
          <h1 className="m-0">前台網站</h1>

          <nav>
            <NavLink className="h4 mt-5 mx-2" to="/admin/product">
              後臺產品列表
            </NavLink>

            <NavLink className="h4 mt-5 mx-2" to="/admin/order">
              後臺訂單列表
            </NavLink>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="mt-5 text-center">
        <p>© 2025 我的網站</p>
      </footer>
    </>
  );
};
export default AdminLayout;
