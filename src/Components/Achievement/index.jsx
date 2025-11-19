import React, { useState, useRef } from 'react';
import "./Achievement.css";
import { FaDiagramProject, FaUsersLine, FaAward } from 'react-icons/fa6';
import { GiTeamIdea } from 'react-icons/gi';
import Odometer from 'react-odometerjs';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Achievement = () => {
  const [clients, setClients] = useState(0);
  const [project, setProject] = useState(0);
  const [team, setTeam] = useState(0);
  const [awards, setAwards] = useState(0);

  const container = useRef(null); // ✅ FIXED: container ref must be declared

  const updateData = () => {
    const timeout = setTimeout(() => {
      setClients(120);
      setProject(150);
      setTeam(44);
      setAwards(89);
    }, 500);
    return () => clearTimeout(timeout); // cleanup
  };

  const resetData = () => {
    setClients(0);
    setProject(0);
    setTeam(0);
    setAwards(0);
  };

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: false,
        onEnter: updateData,
        onLeaveBack: resetData,
      },
    });

    return () => {
      timeline.scrollTrigger?.kill();
      timeline.kill();
    };
  }, { scope: container });

  return (
    <div className='achievement_container' ref={container}>
      <div className="container">
        {/* Happy Customers */}
        <div className="achievement">
          <div className="icon_container"><FaUsersLine /></div>
          <div className="details">
            <div className="row">
              <Odometer value={clients} className="title" format="(,ddd)" />
              <h1 className="title">K</h1>
            </div>
            <small className="text_muted">Happy Customers</small>
          </div>
        </div>

        {/* Completed Projects */}
        <div className="achievement">
          <div className="icon_container"><FaDiagramProject /></div>
          <div className="details">
            <div className="row">
              <Odometer value={project} className="title" format="(,ddd)" />
              <h1 className="title">+</h1>
            </div>
            <small className="text_muted">Completed Projects</small>
          </div>
        </div>

        {/* Expert Workers */}
        <div className="achievement">
          <div className="icon_container"><GiTeamIdea /></div>
          <div className="details">
            <div className="row">
              <Odometer value={team} className="title" format="(,ddd)" />
              <h1 className="title">+</h1>
            </div>
            <small className="text_muted">Expert Workers</small>
          </div>
        </div>

        {/* Awards Winning */}
        <div className="achievement">
          <div className="icon_container"><FaAward /></div>
          <div className="details">
            <div className="row">
              <Odometer value={awards} className="title" format="(,ddd)" />
              <h1 className="title">+</h1>
            </div>
            <small className="text_muted">Awards Winning</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
