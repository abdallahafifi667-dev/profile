import React, { useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/About.css';
import { useSpring, animated, config } from 'react-spring';
import AboutAnimation from '../assets/animations/AboutAnimation.json'

const About = ({ Lottie }) => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const aboutTextAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 500,
  });

  const aboutImageAnimation = useSpring({
    from: { opacity: 0, transform: 'translate3d(100%, 0, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    delay: 500,
    config: config.default,
  });

  return (
    <>
      <div className="about" >
        <VerticalTimeline lineColor="#f06529" style={{ backgroundColor: '#f0f0f0' }}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="July 2025 - Present"
            iconStyle={{ background: '#fc7b54', color: '#fff' }}
            icon={<i className="fa-solid fa-briefcase about-icon"></i>}
          >
            <h3 className="vertical-timeline-element-title">Beta Hubs</h3>
            <br />
            <h3 className="vertical-timeline-element-title">Full-Stack Developer</h3>
            <p>New Cairo City</p>
            <br />
            <p>• Independently developed and delivered full-stack tasks from start to finish</p>
            <p>• Consistently completed assignments ahead of schedule and assisted teammates</p>
            <p>• Solved complex bugs and optimized code logic to improve efficiency</p>
            <p>• Maintained strong ownership of tasks with minimal supervision</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--volunteer"
            date="April 2025 - June 2025"
            iconStyle={{ background: '#3d85c6', color: '#fff' }}
            icon={<i className="fa-solid fa-code about-icon"></i>}
          >
            <h3 className="vertical-timeline-element-title">Freelance Work</h3>
            <br />
            <h3 className="vertical-timeline-element-title">Backend Developer (Volunteering)</h3>
            <p>Tanta</p>
            <br />
            <p>• Designed and built a complete backend using Node.js and Express for a cross-platform app</p>
            <p>• Implemented JWT auth, secure headers, RBAC, rate-limiting, and CSRF/XSS protection</p>
            <p>• Developed a modular RESTful API and optimized database queries</p>
            <p>• Performed end-to-end testing with Postman and Swagger</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="June 2024 - October 2024"
            iconStyle={{ background: '#fc7b54', color: '#fff' }}
            icon={<i className="fa-solid fa-graduation-cap about-icon"></i>}
          >
            <h3 className="vertical-timeline-element-title">Appout</h3>
            <br />
            <h3 className="vertical-timeline-element-title">Full-Stack Trainee</h3>
            <p>Tanta</p>
            <br />
            <p>• Completed intensive full-stack training using MERN and MEAN stacks</p>
            <p>• Gained practical experience in API design, database structuring, and application architecture</p>
            <p>• Improved debugging and problem-solving skills through weekly code reviews and refactoring tasks</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <main className="main">
        <animated.div className="about-text" style={aboutTextAnimation}>
          <h2 className="text head" style={{ textAlign: 'center' }}>
            About
          </h2>
          <div className="paragraph">
            <p>
              Hello! I'm Abdullah Mohammed Abdullah Afifi, a Full-Stack Developer with 2.5 years of experience building scalable web applications using JavaScript, TypeScript, MERN, and MEAN. I develop front-end interfaces with React, Next.js, and Angular, and build backend systems using Node.js, Express.js, and Nest.js. Experienced with REST, GraphQL, gRPC, and real-time communication using Socket.io.
            </p>
            <br />
            <p>
              I have strong knowledge of MongoDB and PostgreSQL, and design systems using MVC, Microservices, and Modular architectures. I implement secure authentication, authorization, and protection against CSRF/XSS. Familiar with Git, Docker, Kubernetes, and Prometheus. I deliver complete end-to-end solutions and work efficiently within engineering teams.
            </p>
            <br />
            <p>
              Currently at Beta Hubs in New Cairo, I execute complete projects from scratch and work effectively within multidisciplinary teams. Always eager to take on new challenges!
            </p>
          </div>

        </animated.div>
        <animated.div className="hero" style={aboutImageAnimation}>
          <Lottie
            animationData={AboutAnimation}
            className="hero-img"
          />
        </animated.div>
      </main>
    </>
  );
};

export default About;
