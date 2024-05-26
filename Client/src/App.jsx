// Navbar component
import Navbar from "./Components/Navbar";

// Main components
import Events from "./Components/Events";
import People from "./Components/People";

// Style Sheets 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <main>
      <Navbar />
      <Events />
      <People />
    </main>
  );
}

export default App;
