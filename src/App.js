import 'bootstrap/dist/css/bootstrap.min.css';  // Bootstrap first
import './App.css';  // Your custom styles after
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Contacts from './pages/contactpage.js';
import Team from './components/Table/team.js';
import Invoices from './pages/invoices/index.js';
import Form from './pages/Form/index.js';
import Calendar from './pages/calender/index.js';

function App() {
  return (
    <>
    {/* <h1>Welcome to App</h1> */}
   <BrowserRouter>
   <Header/>
   <div className='main d-flex'>
   <div className='sidebarWrapper'>
   <Sidebar/>
   </div>
   <div className='content'>
   <Routes>
      <Route path="/" exact element={<Dashboard/>} />
      <Route path="/team" exact element={<Team/>} />
      <Route path="/contacts" exact element={<Contacts/>}/>
      <Route path="/invoice" exact element={<Invoices/>} />
      <Route path="/form" exact element={<Form/>} />
      <Route path="/calender" exact element={<Calendar/>} />

     </Routes>
   </div>
   </div>
  
   </BrowserRouter>
   </>
  );
}

export default App;
