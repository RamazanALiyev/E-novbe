import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Enovbe from './pages/E-novbe/Enovbe';
import Elektronnovbe from './pages/Elektronnovbe/Elektronnovbe';
import Suretlikecid from './pages/Suretlikecid/Suretlikecid';
import Cipxidmetleri from './pages/Cipxismetleri/Cipxidmetleri';
import Stepperone from "./pages/StepperOne/Stepperone";
function App() {
  return (
    <div className="App">
      <Dashboard />
      <Routes>
        <Route path="/" element={<Enovbe />} />
        <Route path="/elektronovbe" element={<Elektronnovbe />} />
        <Route path="/suretlikecid" element={<Suretlikecid />} />
        <Route path="/cipxidmetleri" element={<Cipxidmetleri />} />
        <Route path="/stepperone" element={<Stepperone />} />
      </Routes>
    </div>
  );
}

export default App;

