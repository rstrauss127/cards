import  '../App.css';
import { Link } from 'react-router-dom';

const Flex = () => {
return (
<div className="App">   
<h1 >Hi I'm Rebecca Strauss</h1>

<main class="page-content">
  <div class="card">
    <div class="content">
      <h2 class="title">Linkedin</h2>
      <p class="copy">Check out my Linkedin</p>
      <a class="btn" href='https://www.linkedin.com/in/rlstrauss/'>View Linkedin</a>
    </div>
  </div>
  <div class="card">
    <div class="content">
      <h2 class="title">Goodreads</h2>
      <p class="copy">I'm not  big on social media, but I keep my Goodreads up to date.</p>
      <a class="btn" href='https://www.goodreads.com/user/show/4181830-becca'>Currently Reading</a>
    </div>
  </div>
  <div class="card">
    <div class="content">
      <h2 class="title">Data Visualizations</h2>
      <p class="copy">Interactive charts I've created using Node, React, & D3</p>
      <Link className='btn' to="/colorLegend">Interactive Legend</Link>
      <Link className='btn' to="/barChart">Bar Chart</Link>

    </div>
  </div>
  <div class="card">
    <div class="content">
      <h2 class="title">Github</h2>
      <p class="copy">This links to my github</p>
      <a class="btn" href='https://github.com/rstrauss127'>My Github!!</a>
    </div>
  </div>
</main>
    </div>
  );
}
export default Flex;
