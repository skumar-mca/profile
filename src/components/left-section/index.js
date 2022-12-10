import { memo } from 'react';
import EmploymentHistory from '../employment-history';
import RecentProjects from '../recent-projects';
import './left-section.css';

const LeftSection = () => {
  return (
    <div className='left-section'>
      <div className='content-wrapper'>
        <div className='header-title'>Profile</div>
        <div className='heading-separator'></div>
        <div className='content-box'>
          <figure>
            <blockquote className='blockquote'>
              <p className='text-primary'>
                Master of Computer Applications (MCA), 12+ years, React,
                Angular, Node, MEAN, MERN.
              </p>
            </blockquote>
            <figcaption className='blockquote-footer'>
              Experience in analysis, design and development of client/server,
              web based and n-tier applications. Expert in developing web
              applications using
              <b> React Js</b>,<b> Angular</b>,<b> Redux</b>,<b> NodeJs</b>,
              <b> ExpressJS</b>,<b> MongoDB</b>,<b> JavaScript</b>,
              <b> TypeScript</b>,<b> SCSS/SASS/CSS</b>
            </figcaption>
          </figure>
        </div>
      </div>
      <div className='content-wrapper'>
        <EmploymentHistory />
      </div>

      <div className='content-wrapper'>
        <RecentProjects />
      </div>
    </div>
  );
};

export default memo(LeftSection);
