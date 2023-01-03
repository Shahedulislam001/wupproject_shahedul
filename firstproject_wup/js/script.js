// header 
class myHeader extends HTMLElement{
  connectedCallback(){
    this.innerHTML = `
    <head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Clicker+Script&family=Lobster&family=Lora:ital,wght@1,500&family=Oswald:wght@300&family=Roboto:ital,wght@1,300&family=Rubik&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="./js/bootstrap.js"></script>
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/bootstrap.css">

    </head>

    <nav class="navbar navbar-expand-lg ">
        <div class="container">
          <a class="navbar-brand" href="#">Don't Know</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav m-auto my-2 my-lg-0">
              <li class="nav-item">
                <a class="nav-link active"  href="index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="aboutus.html">about us</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link active " href="service.html">services</a>
                </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="px-2 search" type="search" placeholder="Search" aria-label="Search">
              <button class="btn0" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    `
  }
}
customElements.define('header-temp',myHeader)

// footer
class myFooter extends HTMLElement{
  connectedCallback(){
    this.innerHTML = `<footer>
    <div class="footer-content">
      <h3>Don't Know</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil aspernatur earum reiciendis.</p>
      <ul class="socials">
        <li><a href=""><i class="fa fa-facebook"></i></a></li>
        <li><a href=""><i class="fa fa-twitter"></i></a></li>
        <li><a href=""><i class="fa fa-google-plus"></i></a></li>
        <li><a href=""><i class="fa fa-youtube"></i></a></li>
        <li><a href=""><i class="fa fa-linkedin"></i></a></li>
      </ul>
    </div>
    <div class="footer-bottom">
      <p>Copyright &copy;2022 Don't Know</p>
    </div>
  </footer>`
  }
}
customElements.define('footer-temp',myFooter)

// speach
let tips = [`If your actions inspire others to dream more, learn more, do more and become more, you are a leader.”
  – John Quincy Adams`,`If you think you can do a thing or think you can’t do a thing, you’re right.”
  – Henry Ford `,`If you can’t write your message in a sentence, you can’t say it in an hour.”
  – Dianna Booher `,`A good orator is pointed and impassioned.”
  – Marcus T. Cicero `,`'Doing Nothing is impossible' - by me`,`Before anything else, preparation is the key to success.”
  – Alexander Graham Bell`,`Well-timed silence hath more eloquence than speech.”
  – Martin Fraquhar Tupper`,`In presentations or speeches less really is more.”
  – Stephen Keague `,`Only the prepared speaker deserves to be confident.”
  – Dale Carnegie `]
function getips() {
  let randomNumber = Math.floor(Math.random() * (tips.length));
  document.getElementById('tips').innerHTML = tips[randomNumber];
}
