import { memo, useEffect, useState } from 'react';
import angularImg from '../../assets/angular.png';
import bootStrapImg from '../../assets/bootstrap.png';
import cssImg from '../../assets/css.png';
import expressJsImg from '../../assets/express.png';
import javascriptImg from '../../assets/javascript.png';
import jqueryImg from '../../assets/jquery.png';
import mongoDBImg from '../../assets/mongodb.png';
import nodeJsImg from '../../assets/node.png';
import reactImg from '../../assets/react.png';
import typescriptImg from '../../assets/typescript.png';
import './skill.css';
const skillList = [
  {
    id: 1,
    name: 'React Js + Redux',
    icon: reactImg,
    duration: 6,
    since: 2015,
    exp: 8,
    percent: 0
  },
  {
    id: 2,
    name: 'Angular',
    icon: angularImg,
    duration: 6,
    since: 2015,
    exp: 8,
    percent: 0
  },
  {
    id: 3,
    name: 'JavaScript',
    icon: javascriptImg,
    duration: 11,
    since: 2010,
    exp: 13,
    percent: 0
  },
  {
    id: 4,
    name: 'TypeScript',
    icon: typescriptImg,
    duration: 4,
    since: 2015,
    exp: 6,
    percent: 0
  },
  {
    id: 5,
    name: 'CSS/SCSS',
    icon: cssImg,
    duration: 5,
    since: 2015,
    exp: 8,
    percent: 0
  },
  {
    id: 6,
    name: 'Bootstrap',
    icon: bootStrapImg,
    duration: 5,
    since: 2015,
    exp: 10,
    percent: 0
  },
  {
    id: 7,
    name: 'JQuery',
    icon: jqueryImg,
    duration: 10,
    since: 2011,
    exp: 5,
    percent: 0
  },
  {
    id: 8,
    name: 'Node Js',
    icon: nodeJsImg,
    duration: 5,
    since: 2013,
    exp: 5,
    percent: 0
  },
  {
    id: 9,
    name: 'Express Js',
    icon: expressJsImg,
    duration: 8,
    since: 2013,
    exp: 5,
    percent: 0
  },
  {
    id: 10,
    name: 'MongoDB',
    icon: mongoDBImg,
    duration: 5,
    since: 2015,
    exp: 5,
    percent: 0
  }

  // {
  //   id: 9,
  //   name: '.NET',
  //   icon: dotnetImg,
  //   duration: 6,
  //   since: 2018,
  //   exp: 0,
  //   percent: 0
  // }
];

const calculatePercent = (exp) => {
  const totalExp = 12;
  return Math.abs(Math.round((exp / totalExp) * 100));
};

const SkillList = () => {
  const [skillsList, setSkillList] = useState(skillList);

  const updateSkillSetArray = () => {
    skillsList.map((skill) => {
      skill.percent = calculatePercent(skill.exp);
      return skill;
    });

    setSkillList([...skillsList]);
  };

  useEffect(() => {
    updateSkillSetArray();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='custom-list'>
      <div className='custom-list-wrapper'>
        <div className='header-title'>Skills</div>
        <div className='heading-separator'></div>
        <div className='cus-list-box'>
          {skillsList.map((skill) => {
            return (
              <div className='cus-list-box-item' key={skill.id}>
                <div className='cus-list-box-icon align-middle'>
                  {skill.icon && (
                    <img
                      src={skill.icon}
                      className='skill-icon rounded-circle'
                      alt={skill.name}
                    />
                  )}
                </div>
                <div className='w-100 align-middle'>
                  <div className='custom-list-item-title'>{skill.name}</div>
                  <div className='custom-list-item-sub-title'>
                    <div className='progress'>
                      <div
                        className='progress-bar'
                        role='progressbar'
                        style={{ width: `${skill.percent}%` }}
                        aria-valuenow='25'
                        aria-valuemin='0'
                        aria-valuemax='100'
                      >
                        {skill.exp}+ years
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default memo(SkillList);
