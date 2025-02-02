import './App.css';
import Header from '../header/header';
import Sidebar from '../Sidebar/Sidebar';
import Main from '../main/Main';
import Footer from '../footer/footer';


function App() {
  return (
    <div>
      <Sidebar />
      <Header />
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;