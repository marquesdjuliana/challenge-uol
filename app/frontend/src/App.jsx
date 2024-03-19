import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import EditPage from './pages/EditPage';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={< Navigate to="/tela-inicial" />} />
      <Route path="/tela-inicial" element={<HomePage/>} />
      <Route path="/tela-edicao" element={<EditPage/>} />
    </Routes>
    </>
  );
}

export default App;
