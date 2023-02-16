import './App.css';
import { Route, Routes } from "react-router-dom";
import Flex from './components/flex';
import ChartIndex from './components/chartStuff/barChart/Chartindex';
import ColorLegend from './components/chartStuff/colorLegend/colorLegendIndex';
import MapIndex from'./components/chartStuff/map/mapIndex';

function App() {
  return (
    <Routes>
      <Route path = "/"            element = { <Flex /> }  />
      <Route path = "/barChart"    element = { <ChartIndex />} />
      <Route path = "/colorLegend" element = { <ColorLegend /> } />
      <Route path = "/map"         element = { <MapIndex />} />
    </Routes>
  )

}

export default App;
