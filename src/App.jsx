import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="app fade-in">
      <Header />
      <main className="container">
        <Project />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;