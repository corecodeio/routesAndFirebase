import { Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

const Layout = ({ exact, path, component:Component, ...props }) => {
  return (
    <Route 
      exact={exact}
      path={path}
      render={() => {
        const userPages = <div>
                            <NavBar/>
                            <main>
                              <Component {...props}/>
                            </main>
                          </div>;
        return userPages;
      }}
    />
  );
}

export default Layout;
