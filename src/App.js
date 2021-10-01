import './App.css';

import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import routes from './redux/routes';
import Footer from './components/Footer/Footer';

function App({children}) {
  return (
    <>
      <Navbar/>
      <div className='view-container'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3 sidebar'>
                <Sidebar/>
            </div>
            <div className='col-md-9'>
              {routes}
              {children}
            </div>
            <div>
              
            </div>
          </div>
        </div>
        <Footer/>
      </div>
  </>
  );
}

export default App;
