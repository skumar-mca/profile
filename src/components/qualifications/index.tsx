import React, { memo } from 'react';

const qualificationList = [
  {
    id: 1,
    name: 'Master of Computer Applications',
    certifiedBy: 'Uttar Pradesh Technical University (UPTU)',
    icon: 'assets/uptu.png'
  },
  {
    id: 2,
    name: 'Bachelor of Computer Applications',
    certifiedBy: 'Agra University',
    icon: 'assets/agra_university.png'
  }
];

const QualificationList = () => {
  return (
    <div className='custom-list'>
      <div className='custom-list-wrapper'>
        <div className='header-title'>Qualifications</div>
        <div className='heading-separator'></div>
        <div className='cus-list-box'>
          {qualificationList.map((qual) => {
            return (
              <div className='cus-list-box-item' key={qual.id}>
                <div className='cus-list-box-icon'>
                  {qual.icon && (
                    <img
                      src={qual.icon}
                      className='emp-hist-img rounded-circle'
                      alt={qual.name}
                    />
                  )}
                </div>
                <div className='hist-sec emp-desc align-middle'>
                  <div className='custom-list-item-title'>{qual.name}</div>

                  <div className='custom-list-item-sub-title'>
                    {qual.certifiedBy}
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

export default memo(QualificationList);
