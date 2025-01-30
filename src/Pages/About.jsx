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
        <VerticalTimeline lineColor="#6B5B95" style={{ backgroundColor: '#f0f0f0' }}>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2023 MAR - Present"
            iconStyle={{ background: '#6B5B95', color: '#fff' }}
            icon={<i className="fa-solid fa-briefcase about-icon"></i>}
          >
            <h3 className="vertical-timeline-element-title">Tata Consultancy Services (TCS)</h3>
            <br />
            <h3 className="vertical-timeline-element-title">Software Developer</h3>
            <p>React JS, Redux Toolkit, Javascript, Jest, Node, Express, MongoDB, Tailwind CSS</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2020 OCT - 2023 FEB"
            iconStyle={{ background: '#6B5B95', color: '#fff' }}
            icon={<i className="fa-solid fa-briefcase about-icon"></i>}
          >
            <h3 className="vertical-timeline-element-title">Nanosoft Engineers India (p) Ltd.</h3>
            <br />
            <h3 className="vertical-timeline-element-title">Mobile Application Developer</h3>
            <p>React Native, Redux, Javascript, Typescript, java, sql</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2016 - 2020"
            iconStyle={{ background: '#6B5B95', color: '#fff' }}
            icon={<i className="fa-solid fa-graduation-cap about-icon"></i>}
          >
            <h3 className="vertical-timeline-element-title">JCT College of Engineering and Technology</h3>
            <br />
            <h3 className="vertical-timeline-element-title">B.E Computer Science and Engineering</h3>
            <br />
            <h3 className="vertical-timeline-element-title">Total CGPA: 7.02</h3>
            <p>Graduation</p>
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
            Hi, I'm Syed Ibrahim, a passionate web / mobile app developer and under-grad Computer Science student. I thrive on tackling challenges and leverage cutting-edge web development skills to create innovative solutions. As a meticulous creator, I prioritize delivering exceptional user experiences and impactful, tech-driven results. With a solid freelancing background, I've honed my communication and deadline management skills, ensuring smooth collaboration with clients. I'm always eager for fresh challenges and excited to craft tailored, lasting web experiences.
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
