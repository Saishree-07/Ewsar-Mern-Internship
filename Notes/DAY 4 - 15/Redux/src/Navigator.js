import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import { Home } from './Home';
import { Users } from './User';
import { About } from './About';
import { Contact } from './Contact';
import { Newform } from './Newform';

function Navigator() {
  return (
<Router>
  <div>
  <nav style={{ display: "flex", gap: "30px", marginBottom: "40px" ,backgroundColor:"pink"}}>
      <Link to="/">Home</Link>
     <Link to="/users">Users</Link>
      <Link to="/about">About</Link>
     <Link to="/contact">Contact</Link>
     <Link to="/newform">Num</Link>
   </nav>
   <Routes>
   <Route path="/" element={<Home section="home" />} />
   <Route path="/users" element={<Users section="users" />} />
   <Route path="/about" element={<About section="about" />} />
   <Route path="/contact" element={<Contact section="contact" />} />
   <Route path="/newform" element={<Newform section="newform" />} />
   </Routes>
  </div>
</Router>
   
  );
}

export default Navigator;