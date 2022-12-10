import { memo } from 'react';
import CertificationsList from '../certifications';
import HeaderSection from '../header-section';
import LeftSection from '../left-section';
import PersonalInfo from '../personal-info';
import QualificationList from '../qualifications';
import SkillList from '../skills';
import ToolsUsedList from '../tools-used';
import './home.css';

const Home = () => {
  return (
    <div className='home-layout'>
      <div className='row'>
        <div className='col-md-12'>
          <HeaderSection />
        </div>
        <div className='col-md-8'>
          <LeftSection />
        </div>

        <div className='col-md-4'>
          <SkillList />
          <CertificationsList />
          <QualificationList />
          <ToolsUsedList />
          <PersonalInfo />
        </div>
      </div>
    </div>
  );
};

export default memo(Home);
