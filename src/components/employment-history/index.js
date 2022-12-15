import { memo } from 'react';
import confluoComp from '../../assets/confluo.png';
import fiservComp from '../../assets/fiserv.png';
import icreonComp from '../../assets/icreon.png';
import irctcComp from '../../assets/irctc.png';
import rraSoftComp from '../../assets/rrasoft.png';

const employmentHistoryList = [
  {
    id: 1,
    companyName: 'Fiserv',
    designation: 'UI Architect',
    duration: `Nov, 2020 - Present`,
    icon: fiservComp
  },
  {
    id: 2,
    companyName: 'Icreon Communications Pvt. Ltd',
    designation: 'UI Architect',
    duration: `Dec, 2015 - Nov, 2020`,
    icon: icreonComp
  },
  {
    id: 3,
    companyName: 'Confluo eSolutions Pvt. Ltd',
    designation: 'Senior Software Engineer',
    duration: `June, 2015 - Dec, 2015`,
    icon: confluoComp
  },
  {
    id: 4,
    companyName: 'RRA Soft LLP',
    designation: 'Software Engineer',
    duration: `Dec, 2011 - June, 2015`,
    icon: rraSoftComp
  },
  {
    id: 5,
    companyName: 'IRCTC',
    designation: 'Web Developer',
    duration: `Jan, 2010 - Dec, 2011`,
    icon: irctcComp
  }
];

const EmploymentHistory = () => {
  return (
    <div className='custom-list'>
      <div className='custom-list-wrapper'>
        <div className='header-title'>Employment History</div>
        <div className='heading-separator'></div>

        <div className='cus-list-box'>
          {employmentHistoryList.map((comp) => {
            return (
              <div className='cus-list-box-item' key={comp.id}>
                <div className='cus-list-box-icon'>
                  {comp.icon && (
                    <img
                      src={comp.icon}
                      className='emp-hist-img rounded-circle'
                      alt={comp.name}
                    />
                  )}
                </div>
                <div className='hist-sec emp-desc align-middle'>
                  <div className='custom-list-item-title'>
                    {comp.companyName}
                  </div>
                  <div className='custom-list-item-sub-title'>
                    <div className='cus-list-box-sub'>{comp.designation}</div>
                    <div className=''>
                      <small className='text-muted'>{comp.duration}</small>
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

export default memo(EmploymentHistory);
