import './App.css';
import Flex from './components/flex';
import ChartIndex from './components/chartStuff/barChart/Chartindex';
import { Route, Routes } from "react-router-dom"
import ColorLegend from './components/chartStuff/colorLegend/colorLegendIndex';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Flex />} />
      <Route path="/barChart" element={<ChartIndex />} />
      <Route path="/colorLegend" element={<ColorLegend />} />
    </Routes>
  )

}

export default App;
