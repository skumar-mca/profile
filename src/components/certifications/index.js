import { memo } from 'react';
import awsImg from '../../assets/aws-icon.png';
const certificationList = [
  {
    id: 1,
    name: 'AWS Developer Associate',
    certifiedBy: 'AWS',
    icon: awsImg
  },
  {
    id: 2,
    name: 'Advance Diploma in Computer Software Technology (ADCST)',
    certifiedBy: 'ET&T, New Delhi',
    icon: ''
  }
];

const CertificationsList = () => {
  return (
    <div className='custom-list'>
      <div className='custom-list-wrapper'>
        <div className='header-title'>Certifications</div>
        <div className='heading-separator'></div>
        <div className='custom-list-box'>
          {certificationList.map((cert) => {
            return (
              <div className='custom-list-item' key={cert.id}>
                <div className='custom-list-item-title'>
                  {cert.name}
                  {cert.icon && (
                    <img
                      src={cert.icon}
                      className='right-aligned-sm-icon'
                      alt={cert.name}
                    />
                  )}
                </div>
                <div className='custom-list-item-sub-title'>
                  {cert.certifiedBy}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default memo(CertificationsList);
