import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Digital Accessibility Assistants</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div class="columns">
            <div class="column is-4">
              <ProfileCard
                title="Alexa"
                handle="@alexa"
                imageSrc={AlexaImage}
              />
            </div>
            <div class="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@cortana"
                imageSrc={CortanaImage}
              />
            </div>
            <div class="column is-4">
              <ProfileCard title="Siri" handle="@siri" imageSrc={SiriImage} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
