import './App.css';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import { Container } from 'react-bootstrap';

import DocDiveNavbar from './NavBar';
import Upload from './Upload';
import Search from './Search';

function App() {
  return (
    <BrowserRouter>
      <DocDiveNavbar />
      <Container>
        <Routes>
          {/* Upload route */}
          {/* Only one route uplaod and search */}
          <Route path='/upload' element={<Upload />} />
          <Route path='/' element={<Search />} />
        </Routes>
      </Container>

    </BrowserRouter >

  );
}

export default App;
