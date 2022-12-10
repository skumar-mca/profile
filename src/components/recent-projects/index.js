import { memo } from 'react';

const responsibilities = [
  'Proactively research and locate necessary tools and processes to identify troublesome trends as they develop.',
  'Introduce new IT system design and testing procedures as well as quality standards to improve business performance, productivity and compliance across organization.',
  'Provide expert application design, guidance on solution system designs, redesigns for platform, performance and integration of new technical features and capabilities.',
  'Write clean, maintainable and efficient code.',
  'Participate in the architecture and design of the feature'
];

const projectList = [
  {
    id: 12,
    name: 'UI Geeks',
    description:
      'UI-Geeks is an online learning platform. Learn Core and Advanced Concepts, Blogs, Summary of JavaScript, React, Angular, SCSS, CSS.',
    role: 'Owner',
    techStack: ['ReactJs'],
    link: 'https://ui-geeks.in'
  },
  {
    id: 1,
    name: 'File Exchange - XR',
    description:
      'File Exchange leverages four decades of transmission and translation expertise to provide the most robust data delivery and transformation tool available. With File Exchange, banks can eliminate the hassles of installing software, managing servers, designing networks.',
    role: 'UI Architect',
    techStack: ['ReactJs', 'Redux'],
    rolesAndResponsibilities: responsibilities
  },
  {
    id: 2,
    name: 'Payments Exchange - RTP',
    description:
      'With the use of RTP, banks can now rapidly onboard new customer while providing existing customer an expanded suite of payments options, including real time payments.',
    role: 'UI Architect',
    techStack: ['ReactJs', 'Redux']
  },
  {
    id: 3,
    name: 'Enterprise Payment Platform',
    description: 'EPP UI is the modern UI for handling all types of payments. ',
    role: 'UI Architect',
    techStack: ['ReactJs', 'Redux']
  },
  {
    id: 4,
    name: 'CSCS',
    description:
      'CSCS cards provide proof that individuals working on construction sites have the appropriate training and qualifications for the job they do on site. By ensuring the workforce are appropriately qualified the card plays its part in improving standards and safety on UK construction sites',
    role: 'Software Architect',
    techStack: ['Angular 8', 'NodeJs', 'AWS']
  },
  {
    id: 5,
    name: 'ASTM',
    description:
      'ASTM International, formerly known as American Society for Testing and Materials, is an international standards organization that develops and publishes voluntary consensus technical standards for a wide range of materials, products, systems, and services.',
    role: 'UI Architect',
    techStack: ['ReactJs', 'NodeJs']
  },
  {
    id: 6,
    name: 'MyBI',
    description:
      'MyBI Portal is a one stop web application which allows AT&T staff to search documents shared across multiple source systems. Users can also subscribe any document and if that document has any change, it gets notified to the user.',
    role: 'Tech Lead, UI Specialist',
    techStack: ['ReactJs', 'NodeJs']
  },
  {
    id: 7,
    name: 'CityNet',
    description:
      'NLT is one of the biggest Internet Service provider of Singapore. Users can request for new connection with their convenient time, and then they can track the progress of that request.',
    role: 'Tech Lead, UI Specialist',
    techStack: ['ReactJs', 'Redux']
  },
  {
    id: 8,
    name: 'XPO Logistics',
    description:
      'XPO Logistics is one of the largest logistics companies of US. This product is to provide a high-end system to enhance their day to day activities.',
    role: 'Senior Software Engineer',
    techStack: ['Angular', 'Web API']
  },
  {
    id: 9,
    name: 'Amdocs Academy',
    description:
      'Amdocs Academy is an innovative cloud learning portal providing a personalized role and scenario-based learning experience that improves employee performance.',
    role: 'Senior Software Engineer',
    techStack: ['Angular Js', 'Web API']
  },
  {
    id: 10,
    name: 'Axalta Coating System',
    description:
      'Axalta is the second largest powder coating solution in the world. Integrated online system, manages scheduling, exacting, dispatching and other activities.',
    role: 'Senior Software Engineer',
    techStack: ['Angular Js', 'MVC', 'Web API']
  },
  {
    id: 11,
    name: 'erail.in',
    description:
      'Service oriented website exploring the trains of Indian Railways. Train route, seat availability and other features were the USP of the service.',
    role: 'Software Engineer',
    techStack: ['JQuery', 'Web Forms', 'SQL Compact']
  }
];

const RecentProjects = () => {
  return (
    <div className='custom-list'>
      <div className='custom-list-wrapper'>
        <div className='header-title'>Most Recent Projects</div>
        <div className='heading-separator'></div>
        <div className='custom-list-box'>
          {projectList.map((project) => {
            return (
              <div className='list-group recent-project-item' key={project.id}>
                <div
                  className='project-a list-group-item list-group-item-action'
                  aria-current='true'
                >
                  <div className='row project-row'>
                    <div className='col-lg-6 col-md-12 col-sm-12 recent-project-col'>
                      <h5 className='mb-1 custom-list-item-title'>
                        {project.name}
                      </h5>
                    </div>

                    <div className='col-lg-6 col-md-12 col-sm-12 project-stack float-end'>
                      <small>
                        {project.techStack.map((st) => {
                          return (
                            <span className='badge bg-secondary me-2' key={st}>
                              {st}
                            </span>
                          );
                        })}
                      </small>
                    </div>
                  </div>

                  <p className='mb-1'>
                    <small className='custom-list-item-sub-title text-muted'>
                      {' '}
                      {project.description}
                    </small>
                  </p>

                  {project.rolesAndResponsibilities && (
                    <div>
                      <span className='mt-3 fw-bold'>
                        Roles and Responsibilities include:
                      </span>

                      <span className='text-secondary'>
                        <ol className='mb-3'>
                          {project.rolesAndResponsibilities.map((resp) => {
                            return <li key={resp}>{resp}</li>;
                          })}
                        </ol>
                      </span>
                    </div>
                  )}

                  <small>
                    <span className='badge bg-primary me-2'>
                      {project.role}
                    </span>
                  </small>

                  {project.link && (
                    <>
                      <small className='project-link'>
                        <a
                          href={project.link}
                          target='_blank'
                          rel='noreferrer'
                          className='bg-link me-2'
                        >
                          {project.link}
                        </a>
                      </small>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default memo(RecentProjects);
