import { memo } from 'react';
import bitbucketImg from '../../assets/bitbucket.png';
import gitImg from '../../assets/git.png';
import jenkinsImg from '../../assets/jenkins.png';
import sourceTreeImg from '../../assets/source_tree.png';

const toolsList = [
  {
    id: 1,
    name: 'Git/GitHub',
    description: 'Most widely used modern version control system.',
    icon: gitImg
  },
  {
    id: 2,
    name: 'Atlassian Source Tree',
    description: 'Graphical Interface for GIT',
    icon: sourceTreeImg
  },
  {
    id: 3,
    name: 'Bitbucket',
    description: 'Plan projects, collaborate on code, test, and deploy.',
    icon: bitbucketImg
  },
  {
    id: 4,
    name: 'Jenkins',
    description: 'The leading open source automation server.',
    icon: jenkinsImg
  }
];

const ToolsUsedList = () => {
  return (
    <div className='custom-list'>
      <div className='custom-list-wrapper'>
        <div className='header-title'>Tools Used</div>
        <div className='heading-separator'></div>
        <div className='cus-list-box'>
          {toolsList.map((tool) => {
            return (
              <div className='cus-list-box-item' key={tool.id}>
                <div className='cus-list-box-icon'>
                  {tool.icon && (
                    <img
                      src={tool.icon}
                      className='emp-hist-img rounded-circle'
                      alt={tool.name}
                    />
                  )}
                </div>
                <div className='hist-sec emp-desc align-middle'>
                  <div className='custom-list-item-title'>{tool.name}</div>

                  <div className='custom-list-item-sub-title'>
                    {tool.description}
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

export default memo(ToolsUsedList);
