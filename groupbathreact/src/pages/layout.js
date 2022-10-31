import{Outlet, Link} from 'react-router-dom';

function Layout() {
  return (
    <>
      <nav>
        <ul className='navbarone'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/*">Error</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
export default Layout