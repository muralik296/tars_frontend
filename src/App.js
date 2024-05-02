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
import SearchElement from './SearchElement';
import About from './About';

function App() {
  return (
    <BrowserRouter>
      <DocDiveNavbar />
      <Container>
        <Routes>
          {/* Upload route */}
          {/* Only one route uplaod and search */}
          <Route path='/about' element={<About />} />
          <Route path='/upload' element={<Upload />} />
          <Route path='/' element={<Search />} />
          <Route path='/search/:documentId' element={<SearchElement />} />
        </Routes>
      </Container>

    </BrowserRouter >

  );
}

export default App;
