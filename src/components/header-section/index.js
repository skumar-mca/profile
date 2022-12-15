import { memo, useContext } from 'react';
import downloadImg from '../../assets/download.png';
import facebookImg from '../../assets/facebook.png';
import linkedInImg from '../../assets/linkedin.png';
import npmImg from '../../assets/npm.png';
import profileImg from '../../assets/sunil.png';
import resumeDox from '../../assets/SunilKumar.docx';
import { THEME_CONSTANT } from '../../utils/app-constants';
import { AppContext } from '../../utils/app-context';
import IconHalfCircle from '../icons/half-circle-icon';

import './header.css';

const HeaderSection = (props) => {
  const { onThemeChange } = props;
  const appContext = useContext(AppContext);

  return (
    <div className='header-section'>
      <div className='p-3 mb-2 header-banner text-white'>
        <div className='row'>
          <div className='col-lg-2 col-md-5 col-sm-12 profile-img-container'>
            <img
              src={profileImg}
              className='profile-img rounded-circle'
              alt='Sunil Kumar'
            />
          </div>

          <div className='col-lg-10 col-md-7 col-sm-12'>
            <h3>
              Sunil Kumar
              <div className='float-end'>
                <div>
                  <a
                    className='social-name me-2'
                    href='https://www.linkedin.com/in/sunil-kumar-83146843/'
                    rel='noreferrer'
                    target='_blank'
                    title='LinkedIn'
                  >
                    <img
                      alt='linkedin profile'
                      className='rounded-img social-icon'
                      src={linkedInImg}
                    />
                  </a>
                  <a
                    className='social-name me-2'
                    href='https://www.facebook.com/profile.php?id=100002411178660'
                    rel='noreferrer'
                    target='_blank'
                    title='Facebook'
                  >
                    <img
                      alt='facebook profile'
                      className='rounded-img social-icon'
                      src={facebookImg}
                    />
                  </a>
                  <a
                    className='social-name me-2'
                    href='https://www.npmjs.com/~skumar-mca2010'
                    target='_blank'
                    rel='noreferrer'
                    title='NPM modules'
                  >
                    <img
                      alt='npm profile'
                      className='rounded-img social-icon'
                      src={npmImg}
                    />
                  </a>

                  <a
                    className='social-name '
                    download=''
                    href={resumeDox}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img
                      className='rounded-img social-icon'
                      src={downloadImg}
                      title='Download resume'
                      alt='download resume'
                    />
                  </a>
                </div>

                <div className='theme-switch'>
                  <button
                    className='btn btn-clear'
                    onClick={onThemeChange}
                    title='Change Theme'
                  >
                    <span className='mode-text'>Dark Mode</span>
                    <IconHalfCircle
                      fillColor={
                        appContext.theme === THEME_CONSTANT.DARK_THEME
                          ? 'white'
                          : 'black'
                      }
                    />
                  </button>
                </div>
              </div>
            </h3>
            <h6>UI Architect</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(HeaderSection);
