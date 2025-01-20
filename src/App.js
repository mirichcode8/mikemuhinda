import './App.css';
import { Routes, Route} from 'react-router-dom';
import Home from './Components/Home'
import NewPostPage from './Components/NewPostPage';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/newpost' element={<NewPostPage />} />

     </Routes>
    </div>
  );
}

export default App;
