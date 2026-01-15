import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p>
            I'm a passionate developer with a love for creating beautiful and functional web applications. 
            With expertise in modern web technologies, I strive to build solutions that make a difference.
          </p>
          <p>
            My journey in web development has equipped me with a strong foundation in both frontend and 
            backend technologies, allowing me to build full-stack applications from concept to deployment.
          </p>
          <div className="about-stats">
            <div className="stat">
              <h3>5+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <h3>3+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h3>10+</h3>
              <p>Technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
