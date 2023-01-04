import  '../App.css';

const Flex = () => {
return (
<div className="App">   
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
      <h2 class="title">Spotify</h2>
      <p class="copy">Check out my favorite music!</p>
      <a class="btn" href='https://open.spotify.com/user/bloo935'>My Favorites Playlist</a>
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