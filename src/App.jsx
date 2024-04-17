import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Character from './components/Character'
import CharacterList from './components/CharacterList';

const App = () => {
  return(
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<CharacterList />}/>
        <Route path="/:characterId" element={<Character />} />
      </Routes>
    </Router>

 )
 }
export default App


