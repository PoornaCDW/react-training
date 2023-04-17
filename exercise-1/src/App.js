import './App.css';
import HomePage from './pages/homePage/homePage';
import DetailsPage from './pages/detailsPage/detailsPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />}></Route>
          <Route exact path='/detailspage' element={<DetailsPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;