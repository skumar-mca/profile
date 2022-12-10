import { memo } from 'react';
import agraUnivImg from '../../assets/agra_university.png';
import uptuImg from '../../assets/uptu.png';
const qualificationList = [
  {
    id: 1,
    name: 'Master of Computer Applications',
    certifiedBy: 'Uttar Pradesh Technical University (UPTU)',
    icon: uptuImg
  },
  {
    id: 2,
    name: 'Bachelor of Computer Applications',
    certifiedBy: 'Agra University',
    icon: agraUnivImg
  }
];

const QualificationList = () => {
  return (
    <div className='custom-list'>
      <div className='custom-list-wrapper'>
        <div className='header-title'>Qualifications</div>
        <div className='heading-separator'></div>
        <div className='custom-list-box'>
          {qualificationList.map((qual) => {
            return (
              <div className='custom-list-item' key={qual.id}>
                <div className='custom-list-item-title'>
                  {qual.name}
                  {qual.icon && (
                    <img
                      src={qual.icon}
                      className='right-aligned-sm-icon'
                      alt={qual.name}
                    />
                  )}
                </div>
                <div className='custom-list-item-sub-title'>
                  {qual.certifiedBy}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default memo(QualificationList);
