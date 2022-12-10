import { SOCIAL_URL } from '../../utils/app-constants';

const infoList = [
  {
    id: 1,
    name: 'Phone',
    description: '+91 9818234200',
    isPhone: true
  },
  {
    id: 2,
    name: 'Email',
    description: 'skumar.mca2010@gmail.com',
    isEmail: true
  },
  {
    id: 2,
    name: 'LinkedIn',
    description: SOCIAL_URL.LINKEDIN,
    isLink: true
  },

  {
    id: 3,
    name: 'Location',
    description: 'Noida, Uttar Pradesh, India'
  },
  {
    id: 4,
    name: 'Date of Birth',
    description: '11-Apr-1986'
  },
  {
    id: 5,
    name: 'US VISA',
    description: 'B1/B2'
  }
];

const GenerateInfoValue = ({ info }) => {
  if (info.isPhone) {
    return <a href={`tel:${info.description}`}>{info.description}</a>;
  }

  if (info.isEmail) {
    return <a href={`mailto:${info.description}`}>{info.description}</a>;
  }

  if (info.isLink) {
    return (
      <a target='_blank' rel='noreferrer' href={`${info.description}`}>
        {info.description}
      </a>
    );
  }

  return info.description;
};

const PersonalInfo = () => {
  return (
    <div className='custom-list'>
      <div className='custom-list-wrapper'>
        <div className='header-title'>Info</div>
        <div className='heading-separator'></div>
        <div className='custom-list-box'>
          {infoList.map((info) => {
            return (
              <div className='custom-list-item align-middle' key={info.id}>
                <div className='custom-list-item-title align-middle'>
                  {info.name}
                </div>
                <div className='custom-list-item-sub-title align-middle'>
                  <GenerateInfoValue info={info} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
