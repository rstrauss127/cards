import './App.css';
import Flex from './components/flex';
import ChartIndex from './components/chartStuff/barChart/Chartindex';
import { Route, Routes } from "react-router-dom"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Flex />} />
      <Route path="/dataviz" element={<ChartIndex />} />
    </Routes>
  )

}

export default App;
