  import TiltedCard from '../Components/TiltedCard/TiltedCard';
  import Hyperspeed from '../Components/HyperSpeed/HyperSpeed';
  import './App.css';
  import logo from '../src/assets/mlsc-logo.png';
  import CountdownTimer from "../Components/Timer/Timer";
  import StaggeredMenu from '../Components/Menu/Menu';
  import Events from '../Components/Events/Events';


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
          { label: 'TEAMS', link: '#teams' },
          { label: 'GALLERY', link: '#gallery' }
        ]}
        socialItems={[{ label: 'Linkedin', link: 'https://www.linkedin.com/in/mlsc-viit-671384385/' }, { label: 'Instagram', link: 'https://www.instagram.com/mlscviit/' }, { label: 'Youtube', link: 'https://www.youtube.com/@MLSCVIIT' },{ label: 'Github', link: 'https://www.youtube.com/@MLSCVIIT' }]}
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
          {/* <h1 className="event-text">Inaugural Ceremony</h1>
          <CountdownTimer targetDate="2025-09-22T11:30:00Z" /> */}
          <Events />
        </div>

        <div className="app-team-container">
          <header className="app-header">
            <h1>Meet Our MLSC Team</h1>
          </header>

          {/* Leadership Team */}
          <section className="team-section">
            <h2 className="team-section-title">Leadership Team</h2>
            <div className="team-grid">
              <TiltedCard
                imageSrc="https://i.postimg.cc/HW83fbYJ/Charan-B.jpg"
                altText="Behara Lakshmi Sai Charan"
                captionText="Ambassador (Head)"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.06}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                linkedIn="https://www.linkedin.com/in/behara-lakshmi-sai-charan-b5b25a2b8/"
                overlayContent={
                  <p className="tilted-card-demo-text" style={{
                    color: '#ffffff',
                    backgroundColor: 'rgba(62, 62, 62, 0.6)',
                    padding: '4px 8px',
                    borderRadius: '5px',
                    position: 'relative',
                    top: '20px',
                    left: '20px'
                  }}>
                    Behara Lakshmi Sai Charan
                  </p>
                }
              />
            </div>
          </section>

          {/* Management Team */}
          <section className="team-section">
            <h2 className="team-section-title">Management Team</h2>
            <div className="team-grid">
              <TiltedCard
                imageSrc="https://i.postimg.cc/NMm9xGt0/Sravan-Kumar-M.jpg"
                altText="Sravan Kumar Malla"
                captionText="Manager"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.06}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                linkedIn="https://www.linkedin.com/in/sravankumar-malla?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                overlayContent={
                  <p className="tilted-card-demo-text" style={{
                    color: '#ffffff',
                    backgroundColor: 'rgba(62, 62, 62, 0.6)',
                    padding: '4px 8px',
                    borderRadius: '5px',
                    position: 'relative',
                    top: '20px',
                    left: '20px'
                  }}>
                    Sravan Kumar Malla
                  </p>
                }
              />
              <TiltedCard
                imageSrc="https://i.postimg.cc/BbMNgB5N/Guna-Sekhar-M.jpg"
                altText="Guna Sekhar Malla"
                captionText="Manager"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.06}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                linkedIn="https://www.linkedin.com/in/malla-guna-sekhar-5a2959288"
                overlayContent={
                  <p className="tilted-card-demo-text" style={{
                    color: '#ffffff',
                    backgroundColor: 'rgba(62, 62, 62, 0.6)',
                    padding: '4px 8px',
                    borderRadius: '5px',
                    position: 'relative',
                    top: '20px',
                    left: '20px'
                  }}>
                    Guna Sekhar Malla
                  </p>
                }
              />
              <TiltedCard
                imageSrc="https://i.postimg.cc/rprnkWcF/Likhita-B.jpg"
                altText="Likhita Beesetty"
                captionText="Manager"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.06}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                linkedIn="https://www.linkedin.com/in/likhita-beesetty-b18246264/"
                overlayContent={
                  <p className="tilted-card-demo-text" style={{
                    color: '#ffffff',
                    backgroundColor: 'rgba(62, 62, 62, 0.6)',
                    padding: '4px 8px',
                    borderRadius: '5px',
                    position: 'relative',
                    top: '20px',
                    left: '20px'
                  }}>
                    Likhita Beesetty
                  </p>
                }
              />
              <TiltedCard
                imageSrc="https://i.postimg.cc/52Qxz7b4/Sasi-Preethi-P.jpg"
                altText="Sasi Preethi Puppala"
                captionText="Manager"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.06}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                linkedIn="https://www.linkedin.com/in/puppala-sasi-preethi-5746a4306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                overlayContent={
                  <p className="tilted-card-demo-text" style={{
                    color: '#ffffff',
                    backgroundColor: 'rgba(62, 62, 62, 0.6)',
                    padding: '4px 8px',
                    borderRadius: '5px',
                    position: 'relative',
                    top: '20px',
                    left: '20px'
                  }}>
                    Sasi Preethi Puppala
                  </p>
                }
              />
            </div>
          </section>
          {/* Leads*/}
          <section className="team-section">
            <h2 className="team-section-title">Leads</h2>
            <div className="team-grid">
              <TiltedCard
                imageSrc="https://i.postimg.cc/x8F3wTkS/Lakshmi-Lavanya-G.jpg"
                altText="Lakshmi Lavanya Gorle"
                captionText="Lead"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.06}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                linkedIn="https://www.linkedin.com/in/lakshmi-lavanya-gorle-8464762b5/"
                overlayContent={
                  <p className="tilted-card-demo-text" style={{
                    color: '#ffffff',
                    backgroundColor: 'rgba(62, 62, 62, 0.6)',
                    padding: '4px 8px',
                    borderRadius: '5px',
                    position: 'relative',
                    top: '20px',
                    left: '20px'
                  }}>
                    Lakshmi Lavanya Gorle
                  </p>
                }
              />
              <TiltedCard
                imageSrc="https://i.postimg.cc/Nf9M8fxv/Balu-P.jpg"
                altText="Balu Perla"
                captionText="Co-Lead"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.06}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                linkedIn="https://www.linkedin.com/in/balu-perla-64a24a331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                overlayContent={
                  <p className="tilted-card-demo-text" style={{
                    color: '#ffffff',
                    backgroundColor: 'rgba(62, 62, 62, 0.6)',
                    padding: '4px 8px',
                    borderRadius: '5px',
                    position: 'relative',
                    top: '20px',
                    left: '20px'
                  }}>
                    Balu Perla
                  </p>
                }
              />
            </div>
          </section>

          {/* Web Development Team */}
          <section className="team-section">
            <h2 className="team-section-title">Web Development Team</h2>
            <div className="team-grid">
              <TiltedCard
                imageSrc="https://i.postimg.cc/fy3907b6/Chaitanya-Reddy.jpg"
                altText="Chaitanya Reddy"
                captionText="Web Development Team Lead"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.06}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                linkedIn="https://www.linkedin.com/in/chaitanya-reddy-b4595b2b7/"
                overlayContent={
                  <p className="tilted-card-demo-text" style={{
                    color: '#ffffff',
                    backgroundColor: 'rgba(62, 62, 62, 0.6)',
                    padding: '4px 8px',
                    borderRadius: '5px',
                    position: 'relative',
                    top: '20px',
                    left: '20px'
                  }}>
                    Chaitanya Reddy
                  </p>
                }
              />
              <TiltedCard
                imageSrc="https://i.postimg.cc/v8S7HTmJ/Revanth-Kumar-S.jpg"
                altText="Revanth Kumar Sudikonda"
                captionText="Web Development Team Member"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.06}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                linkedIn="https://www.linkedin.com/in/revanth-kumar-sudikonda"
                overlayContent={
                  <p className="tilted-card-demo-text" style={{
                    color: '#ffffff',
                    backgroundColor: 'rgba(62, 62, 62, 0.6)',
                    padding: '4px 8px',
                    borderRadius: '5px',
                    position: 'relative',
                    top: '20px',
                    left: '20px'
                  }}>
                    Revanth Kumar Sudikonda
                  </p>
                }
              />
              <TiltedCard
                imageSrc="https://i.postimg.cc/x8F3wTkS/Lakshmi-Lavanya-G.jpg"
                altText="Lakshmi Lavanya Gorle"
                captionText="Web Development Team Member"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.06}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                linkedIn="https://www.linkedin.com/in/lakshmi-lavanya-gorle-8464762b5/"
                overlayContent={
                  <p className="tilted-card-demo-text" style={{
                    color: '#ffffff',
                    backgroundColor: 'rgba(62, 62, 62, 0.6)',
                    padding: '4px 8px',
                    borderRadius: '5px',
                    position: 'relative',
                    top: '20px',
                    left: '20px'
                  }}>
                    Lakshmi Lavanya Gorle
                  </p>
                }
              />
              <TiltedCard
                imageSrc="https://i.postimg.cc/D0jdsyFM/Yaswanth-CH.jpg"
                altText="Yaswanth Chokkapu"
                captionText="Web Development Team Member"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.06}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                linkedIn="https://www.linkedin.com/in/yaswanth-chokkapu-ba737a276/"
                overlayContent={
                  <p className="tilted-card-demo-text" style={{
                    color: '#ffffff',
                    backgroundColor: 'rgba(62, 62, 62, 0.6)',
                    padding: '4px 8px',
                    borderRadius: '5px',
                    position: 'relative',
                    top: '20px',
                    left: '20px'
                  }}>
                    Yaswanth Chokkapu
                  </p>
                }
              />
            </div>
          </section>

          {/* Power Tools Team */}
          <section className="team-section">
            <h2 className="team-section-title">Power Tools Team</h2>
            <div className="team-grid">
              <TiltedCard
                imageSrc="https://i.postimg.cc/Y0jcH0Sr/Monia-v.jpg"
                altText="Monia Voona"
                captionText="Power Tools Team Lead"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.06}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                linkedIn="https://www.linkedin.com/in/monia-voona/"
                overlayContent={
                  <p className="tilted-card-demo-text" style={{
                    color: '#ffffff',
                    backgroundColor: 'rgba(62, 62, 62, 0.6)',
                    padding: '4px 8px',
                    borderRadius: '5px',
                    position: 'relative',
                    top: '20px',
                    left: '20px'
                  }}>
                    Voona Monia
                  </p>
                }
              />
              <TiltedCard
                imageSrc="https://i.postimg.cc/BQLW7jyN/Gnaneswar-T.jpg"
                altText="Gnaneswar Thavva"
                captionText="Power Tools Team Member"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.06}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                linkedIn="https://www.linkedin.com/in/gnaneswarthavva675/"
                overlayContent={
                  <p className="tilted-card-demo-text" style={{
                    color: '#ffffff',
                    backgroundColor: 'rgba(62, 62, 62, 0.6)',
                    padding: '4px 8px',
                    borderRadius: '5px',
                    position: 'relative',
                    top: '20px',
                    left: '20px'
                  }}>
                    Gnaneswar Thavva
                  </p>
                }
              />
              <TiltedCard
                imageSrc="https://i.postimg.cc/26ZcFW3B/Whats-App-Image-2025-09-18-at-17-42-42-783fa7af.jpg"
                altText="Varshini Anupolu"
                captionText="Power Tools Team Member"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.06}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                linkedIn="https://www.linkedin.com/in/varshini-anupolu-741057296/"
                overlayContent={
                  <p className="tilted-card-demo-text" style={{
                    color: '#ffffff',
                    backgroundColor: 'rgba(62, 62, 62, 0.6)',
                    padding: '4px 8px',
                    borderRadius: '5px',
                    position: 'relative',
                    top: '20px',
                    left: '20px'
                  }}>
                    Varshini Anupolu
                  </p>
                }
              />
              <TiltedCard
                imageSrc="https://i.postimg.cc/MGcdqB7r/Harshini-Padmavathi-P.jpg"
                altText="Harshini Padmavathi P"
                captionText="Power Tools Team Member"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.06}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                linkedIn="https://www.linkedin.com/in/harshini-padmavathi-p-185372317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                overlayContent={
                  <p className="tilted-card-demo-text" style={{
                    color: '#ffffff',
                    backgroundColor: 'rgba(62, 62, 62, 0.6)',
                    padding: '4px 8px',
                    borderRadius: '5px',
                    position: 'relative',
                    top: '20px',
                    left: '20px'
                  }}>
                    Harshini Padmavathi P
                  </p>
                }
              />
            </div>
          </section>

          {/* Communication Team */}
          <section className="team-section">
            <h2 className="team-section-title">Communication Team</h2>
            <div className="team-grid">
              <TiltedCard
                imageSrc="https://i.postimg.cc/MKdDB5tF/Sowmya-K.jpg"
                altText="Sowmya Kondapalli"
                captionText="Communication Team Lead"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.06}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                linkedIn="https://www.linkedin.com/in/sowmya-k-1913382a7/"
                overlayContent={
                  <p className="tilted-card-demo-text" style={{
                    color: '#ffffff',
                    backgroundColor: 'rgba(62, 62, 62, 0.6)',
                    padding: '4px 8px',
                    borderRadius: '5px',
                    position: 'relative',
                    top: '20px',
                    left: '20px'
                  }}>
                    Sowmya Kondapalli
                  </p>
                }
              />
              <TiltedCard
                imageSrc="https://i.postimg.cc/Wz9kdWjm/Sai-Varshitha-V.jpg"
                altText="Sai Varshitha Vadapalli"
                captionText="Communication Team Member"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.06}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                linkedIn="https://www.linkedin.com/in/varshitha-vadapalli-922a032b6"
                overlayContent={
                  <p className="tilted-card-demo-text" style={{
                    color: '#ffffff',
                    backgroundColor: 'rgba(62, 62, 62, 0.6)',
                    padding: '4px 8px',
                    borderRadius: '5px',
                    position: 'relative',
                    top: '20px',
                    left: '20px'
                  }}>
                    Sai Varshitha Vadapalli
                  </p>
                }
              />
              <TiltedCard
                imageSrc="https://i.postimg.cc/15fgWKsT/Riya-Choudhary.jpg"
                altText="Riya Choudhary"
                captionText="Communication Team Member"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.06}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                linkedIn="https://www.linkedin.com/in/riya-choudhary-b1a349348"
                overlayContent={
                  <p className="tilted-card-demo-text" style={{
                    color: '#ffffff',
                    backgroundColor: 'rgba(62, 62, 62, 0.6)',
                    padding: '4px 8px',
                    borderRadius: '5px',
                    position: 'relative',
                    top: '20px',
                    left: '20px'
                  }}>
                    Riya Choudhary
                  </p>
                }
              />
              <TiltedCard
                imageSrc="https://i.postimg.cc/Nf9M8fxv/Balu-P.jpg"
                altText="Balu Perla"
                captionText="Communication Team Member"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.06}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                linkedIn="https://www.linkedin.com/in/balu-perla-64a24a331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                overlayContent={
                  <p className="tilted-card-demo-text" style={{
                    color: '#ffffff',
                    backgroundColor: 'rgba(62, 62, 62, 0.6)',
                    padding: '4px 8px',
                    borderRadius: '5px',
                    position: 'relative',
                    top: '20px',
                    left: '20px'
                  }}>
                    Balu Perla
                  </p>
                }
              />
            </div>
          </section>

          {/* Media Team */}
          <section className="team-section">
            <h2 className="team-section-title">Media Team</h2>
            <div className="team-grid">
              <TiltedCard
                imageSrc="https://i.postimg.cc/fyXbN8yT/Ramya-sri-D.jpg"
                altText="Ramya Sri Dharmavarapu"
                captionText="Media Team Lead"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.06}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                linkedIn="https://www.linkedin.com/in/ramyadharmavarapu/"
                overlayContent={
                  <p className="tilted-card-demo-text" style={{
                    color: '#ffffff',
                    backgroundColor: 'rgba(62, 62, 62, 0.6)',
                    padding: '4px 8px',
                    borderRadius: '5px',
                    position: 'relative',
                    top: '20px',
                    left: '20px'
                  }}>
                    Ramya Sri Dharmavarapu
                  </p>
                }
              />
              <TiltedCard
                imageSrc="https://i.postimg.cc/768cR9FN/Kushal-P.jpg"
                altText="Kushal Pureti"
                captionText="Media Team Member"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.06}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                linkedIn="https://www.linkedin.com/in/pureti-k-954a66349?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                overlayContent={
                  <p className="tilted-card-demo-text" style={{
                    color: '#ffffff',
                    backgroundColor: 'rgba(62, 62, 62, 0.6)',
                    padding: '4px 8px',
                    borderRadius: '5px',
                    position: 'relative',
                    top: '20px',
                    left: '20px'
                  }}>
                    Kushal Pureti
                  </p>
                }
              />
              <TiltedCard
                imageSrc="https://i.postimg.cc/XYKnxZGm/Rakesh-M.jpg"
                altText="Rakesh Mudidana"
                captionText="Media Team Member"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.06}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                linkedIn="https://www.linkedin.com/in/rakesh-pavan-mudidana-a10375327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                overlayContent={
                  <p className="tilted-card-demo-text" style={{
                    color: '#ffffff',
                    backgroundColor: 'rgba(62, 62, 62, 0.6)',
                    padding: '4px 8px',
                    borderRadius: '5px',
                    position: 'relative',
                    top: '20px',
                    left: '20px'
                  }}>
                    Rakesh Mudidana
                  </p>
                }
              />
              <TiltedCard
                imageSrc="https://i.postimg.cc/vTbGJf1p/Sai-Mohit-P.jpg"
                altText="Sai Mohit Pilla"
                captionText="Media Team Member"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.06}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                linkedIn="https://www.linkedin.com/in/sai-mohit-7040a6340/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                overlayContent={
                  <p className="tilted-card-demo-text" style={{
                    color: '#ffffff',
                    backgroundColor: 'rgba(62, 62, 62, 0.6)',
                    padding: '4px 8px',
                    borderRadius: '5px',
                    position: 'relative',
                    top: '20px',
                    left: '20px'
                  }}>
                    Sai Mohit Pilla
                  </p>
                }
              />
            </div>
          </section>

          {/* Social Media Team */}
          <section className="team-section">
            <h2 className="team-section-title">Social Media Team</h2>
            <div className="team-grid">
              <TiltedCard
                imageSrc="https://i.postimg.cc/4y71T7rQ/Sai-Charmi-D.jpg"
                altText="Dunna Sai Charmi"
                captionText="Social Media Team Lead"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.06}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                linkedIn="https://www.linkedin.com/in/d-sai-charmi-090a022b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                overlayContent={
                  <p className="tilted-card-demo-text" style={{
                    color: '#ffffff',
                    backgroundColor: 'rgba(62, 62, 62, 0.6)',
                    padding: '4px 8px',
                    borderRadius: '5px',
                    position: 'relative',
                    top: '20px',
                    left: '20px'
                  }}>
                    Dunna Sai Charmi
                  </p>
                }
              />
              <TiltedCard
                imageSrc="https://i.postimg.cc/x8DPnTnr/Sai-Venkat-Abhiram-K.jpg"
                altText="Sai Venkat Abhiram Kotipam"
                captionText="Social Media Team Member"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.06}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                linkedIn="https://www.linkedin.com/in/kotipam-sai-venkat-abhi-ram-298a812b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                overlayContent={
                  <p className="tilted-card-demo-text" style={{
                    color: '#ffffff',
                    backgroundColor: 'rgba(62, 62, 62, 0.6)',
                    padding: '4px 8px',
                    borderRadius: '5px',
                    position: 'relative',
                    top: '20px',
                    left: '20px'
                  }}>
                    Sai Venkat Abhiram Kotipam
                  </p>
                }
              />
              <TiltedCard
                imageSrc="https://i.postimg.cc/HnBTHFHm/IMG-20240323-WA0005-1.jpg"
                altText="Moukhika Gorji"
                captionText="Social Media Team Member"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.06}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                linkedIn="https://www.linkedin.com/in/moukhika01/"
                overlayContent={
                  <p className="tilted-card-demo-text" style={{
                    color: '#ffffff',
                    backgroundColor: 'rgba(62, 62, 62, 0.6)',
                    padding: '4px 8px',
                    borderRadius: '5px',
                    position: 'relative',
                    top: '20px',
                    left: '20px'
                  }}>
                    Moukhika Gorji
                  </p>
                }
              />
            </div>
          </section>

          {/* Technical Team */}
          <section className="team-section">
            <h2 className="team-section-title">Technical Team</h2>
            <div className="team-grid">
              <TiltedCard
                imageSrc="https://i.postimg.cc/HLD1GT55/Zaara-Nasim.jpg"
                altText="Zaara Nasim"
                captionText="Technical Team Lead"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.06}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                linkedIn="https://www.linkedin.com/in/zaara-nasim-45a7542b5"
                overlayContent={
                  <p className="tilted-card-demo-text" style={{
                    color: '#ffffff',
                    backgroundColor: 'rgba(62, 62, 62, 0.6)',
                    padding: '4px 8px',
                    borderRadius: '5px',
                    position: 'relative',
                    top: '20px',
                    left: '20px'
                  }}>
                    Zaara Nasim
                  </p>
                }
              />
              <TiltedCard
                imageSrc="https://i.postimg.cc/CMm0ZTTT/Varshith-N.jpg"
                altText="Nelli Varshith"
                captionText="Technical Team Member"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.06}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                linkedIn="https://www.linkedin.com/in/nelli-varshith-492a612b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                overlayContent={
                  <p className="tilted-card-demo-text" style={{
                    color: '#ffffff',
                    backgroundColor: 'rgba(62, 62, 62, 0.6)',
                    padding: '4px 8px',
                    borderRadius: '5px',
                    position: 'relative',
                    top: '20px',
                    left: '20px'
                  }}>
                    Nelli Varshith
                  </p>
                }
              />
              <TiltedCard
                imageSrc="https://i.postimg.cc/cHhp8YzM/Venkat-Sai-J.jpg"
                altText="Janapala Venkat Sai"
                captionText="Technical Team Member"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.06}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                linkedIn="https://www.linkedin.com/in/venkat-sai-reddy-71aa5b2b6/"
                overlayContent={
                  <p className="tilted-card-demo-text" style={{
                    color: '#ffffff',
                    backgroundColor: 'rgba(62, 62, 62, 0.6)',
                    padding: '4px 8px',
                    borderRadius: '5px',
                    position: 'relative',
                    top: '20px',
                    left: '20px'
                  }}>
                    Janapala Venkat Sai
                  </p>
                }
              />
            </div>
          </section>
        </div>
        


        
      </div>
    );
  }

  export default App;
