

function Home() {
    return(
<div classNmae="home">
  <header class="header">
    <a href="#" class="logo">LegalDOc</a>
    <nav class="nav-items">
      <a href="#">Home</a>
      <a href="#">Create</a>
      <a href="#">Upload</a>
      <a href="#">View</a>
      <a href="#">Sign Out</a>
    </nav>
  </header>
    <div class="intro">
      <h1>Legal Document Managemet System</h1>
      <p>Legaldoc web serive is the best web service with the most complete and reliable features<br/>for creating , storing and managing legal documents<br/>such as s contracts, agreements, and deeds.</p>
      <table>
        <center>
        <tr>
            <td><button>Create Document</button></td>
            <td><button>Upload Document</button></td>
        </tr>
    </center>
      </table>
    </div>
    
    <div class="about-me">
      <div class="about-me-text">
        <h2>About Me</h2>
        <p>Legaldoc web serive is the best web  service with the most complete and reliable features for creating , storing and managing legal documents such as s contracts, agreements, and deeds.</p>
      </div>
      <img src="https://media.istockphoto.com/id/1288746277/photo/businessman-and-lawyer-discuss-the-contract-document-treaty-of-the-law-sign-a-contract.jpg?b=1&s=170667a&w=0&k=20&c=jbI6-Qu4d0YnkT_xnKt064i0EAgfptK8fxzsCLJwMvk="/>
    </div>
  <footer class="footer">
    <div class="copy">&copy; 2023 Developer</div>
    <div class="bottom-links">
      <div class="links">
        <span>More Info</span>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
      
    </div>
  </footer>
  </div>

);
}

export default Home;