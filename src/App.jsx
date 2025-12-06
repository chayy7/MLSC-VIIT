import Hyperspeed from '../Components/HyperSpeed/HyperSpeed';
import './App.css';
import logo from '../src/assets/mlsc-logo.png';
import CountdownTimer from "../Components/Timer/Timer";
import StaggeredMenu from '../Components/Menu/Menu';
import Events from '../Components/Events/Events';
import Teams from '../Components/Teams/Teams';
import MeetTeam from '../Components/MeetTeam/MeetTeam';
import { Carousel } from '../Components/Carousel/Carousel';
import Gallery from '../Components/Gallery/Gallery';
import Footer from "../Components/Footer/Footer";   

const carouselData = [
  { src: "https://i.postimg.cc/3xmyzhsr/1.png", alt: "slide 1" , link:"https://apply.careers.microsoft.com/careers?query=web+developer&start=0&pid=1970393556626220&sort_by=relevance"},
  { src: "https://i.postimg.cc/N0WQt2m3/2.png", alt: "slide 2" , link:"https://apply.careers.microsoft.com/careers?query=web+developer&start=0&pid=1970393556626220&sort_by=relevance"},
  { src: "https://i.postimg.cc/63mnt0YN/3.png", alt: "slide 3", link:"https://apply.careers.microsoft.com/careers?query=web+developer&start=0&pid=1970393556627453&sort_by=relevance" }
];

const demoItems = [
  { link: '/gallery', text: 'MLSC REALM', image: 'https://i.postimg.cc/52S5pW0K/DSC-0461-%282%29.jpg' },
  { link: '/gallery', text: 'MLSC ODYSSEY', image: 'https://i.postimg.cc/ZqZmtpJm/DSC-0440-%282%29.jpg' },
  { link: '/gallery', text: 'MLSC ORBIT', image: 'https://i.postimg.cc/DfY59h78/DSC-0346-%282%29.jpg' },
  { link: '/gallery', text: 'MLSC SPECTRA', image: 'https://i.postimg.cc/N0pRR8M1/DSC-0445-%282%29.jpg' }
];


function App() {
  return (
    <div className="app-container">
      <div className="background">
        <Hyperspeed />
      </div>

      <StaggeredMenu
        className="in-hero-menu"
        isFixed={false}
        position="left"
        colors={['#00d9ffff', '#1a7aceff', '#00e1ffff']}
        accentColor="#0084ffff"
        items={[
          { label: 'HOME', link: '#home' },
          { label: 'EVENTS', link: '#events' },
          { label: 'TEAMS', link: '/teams' },
          { label: 'Jobs ', link: '#jobs' },
          { label: 'GALLERY', link: '/gallery' }
        ]}
        socialItems={[
          { label: 'Linkedin', link: 'https://www.linkedin.com/in/mlsc-viit-671384385/' },
          { label: 'Instagram', link: 'https://www.instagram.com/mlscviit/' },
          { label: 'Youtube', link: 'https://www.youtube.com/@MLSCVIIT' },
          { label: 'Github', link: 'https://github.com/mlsc-viit' }
        ]}
        displaySocials={true}
      />

      <div className="content">
        <div className="left-side">
          <img src={logo} alt="MLSC Logo" className="mlsc-logo" />
        </div>
        <div className="right-side">
          <h1>Microsoft Learn <br />Student Community-VIIT</h1>
          <p>
            MLSC is a student-led community that fosters learning, collaboration,
            and innovation. We host workshops, hackathons, and events to help
            students enhance their skills and build real-world projects.
          </p>
        </div>
      </div>

      <div className="event-section">
        <Events />
      </div>

      <div>
        <MeetTeam />
      </div>

      <div>
        <Carousel data={carouselData} />
      </div>

      <div id="gallery" className="gallery-full">
        <Gallery items={demoItems} />
      </div>

      {/* -----------------------------------
           FOOTER IS ADDED HERE
      ------------------------------------ */}
      <Footer />

    </div>
  );
}

export default App;
