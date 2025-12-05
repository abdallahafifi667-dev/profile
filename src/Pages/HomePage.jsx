import { useEffect } from 'react';
import '../styles/HomePage.css';
import { TypeAnimation } from 'react-type-animation';
import SkillsAnimation from '../assets/animations/SkillsAnimation.json';
import HeroAnimation from '../assets/animations/HeroAnimation.json';
import { useSpring, animated, config, useInView } from 'react-spring';
import Section from '../components/Section';

const HomePage = ({ Lottie }) => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const [skillRef, skillInView] = useInView({ triggerOnce: true });
  const [textRef, textInView] = useInView({ triggerOnce: true });
  const [heroRef, heroInView] = useInView({ triggerOnce: true });

  const textAnimation = useSpring({
    opacity: textInView ? 1 : 0,
    transform: textInView ? 'translate3d(0,0,0)' : 'translate3d(100%,0,0)',
    config: config.default,
  });

  const heroAnimation = useSpring({
    opacity: heroInView ? 1 : 0,
    transform: heroInView ? 'translate3d(0,0,0)' : 'translate3d(-90%,0,0)',
    config: config.default,
  });

  const skillsAnimation = useSpring({
    opacity: skillInView ? 1 : 0,
    transform: skillInView ? 'translate3d(0,0,0)' : 'translate3d(0,100%,0)',
    config: config.default,
  });

  return (
    <>
      {/* HERO SECTION */}
      <main className="main">
        <animated.div className="text" ref={textRef} style={textAnimation}>
          <h2 className="intro">Hello👋🏻 I am,</h2>

          <h1 className="main-text">
            <TypeAnimation
              sequence={[
                'Abdullah Afifi',
                1500,
                'Full-Stack Developer',
                1500,
                'MERN Stack Developer',
                1500,
                'MEAN Stack Developer',
                1500,
                'Next.js Developer',
                1500,
                'Backend Specialist',
                1500,
              ]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
            />
          </h1>

          <div className="btn">
            <a
              href="https://drive.google.com/file/d/17nzm-JNVej7mEdi_5HIopZyOvIVv8r8U/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <button className="button">Download CV</button>
            </a>
          </div>
        </animated.div>

        <animated.div className="hero" ref={heroRef} style={heroAnimation}>
          <Lottie animationData={HeroAnimation} className="hero-img" />
        </animated.div>
      </main>

      {/* PROJECT SECTION */}
      <Section Lottie={Lottie} />

      {/* SKILLS SECTION */}
      <main className="main fd">
        <animated.div className="hero" style={skillsAnimation}>
          <Lottie animationData={SkillsAnimation} className="hero-img" />
        </animated.div>

        <animated.div ref={skillRef} className="skills" style={skillsAnimation}>
          <h2 className="text head">Skills</h2>

          <ul className="skill-list">
            <li>
              JavaScript <i className="fa-brands fa-square-js" style={{ color: '#f0db4f' }}></i>
            </li>
            <li>
              TypeScript <i className="fa-brands fa-js" style={{ color: '#3178c6' }}></i>
            </li>
            <li>
              React JS <i className="fa-brands fa-react" style={{ color: '#61dbfb' }}></i>
            </li>
            <li>
              Next.js <i className="fa-solid fa-bolt" style={{ color: '#000000' }}></i>
            </li>
            <li>
              Angular <i className="fa-brands fa-angular" style={{ color: '#dd0031' }}></i>
            </li>
            <li>
              Node.js <i className="fa-brands fa-node" style={{ color: '#339933' }}></i>
            </li>
            <li>
              Express.js <i className="fa-brands fa-node-js" style={{ color: '#000000' }}></i>
            </li>
            <li>
              Nest.js <i className="fa-solid fa-server" style={{ color: '#e0234e' }}></i>
            </li>
            <li>
              MongoDB <i className="fa-solid fa-database" style={{ color: '#4DB33D' }}></i>
            </li>
            <li>
              PostgreSQL <i className="fa-solid fa-database" style={{ color: '#336791' }}></i>
            </li>
            <li>
              Docker <i className="fa-brands fa-docker" style={{ color: '#2496ED' }}></i>
            </li>
            <li>
              Git <i className="fa-brands fa-github"></i>
            </li>
          </ul>
        </animated.div>
      </main>
    </>
  );
};

export default HomePage;
