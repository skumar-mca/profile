import reactImg from '../../assets/react.png';
import angularImg from '../../assets/angular.png';
import nodeJsImg from '../../assets/node.png';
import expressJsImg from '../../assets/express.png';
import mongoDBImg from '../../assets/mongodb.png';
import javascriptImg from '../../assets/javascript.png';
import typescriptImg from '../../assets/typescript.png';
import dotnetImg from '../../assets/dotnet.png';
import jqueryImg from '../../assets/jquery.png';

import './skill.css';
import { useEffect, useState } from 'react';

const SkillList = () => {
    const skillList = [
        {
            id: 1,
            name: 'React Js + Redux',
            icon: reactImg,
            duration: 6,
            since: 2015,
            exp: 0,
            percent: 0
        },
        {
            id: 2,
            name: 'Angular 2+',
            icon: angularImg,
            duration: 6,
            since: 2015,
            exp: 0,
            percent: 0
        },
        {
            id: 3,
            name: 'Node Js',
            icon: nodeJsImg,
            duration: 8,
            since: 2013,
            exp: 0,
            percent: 0
        },
        {
            id: 4,
            name: 'JavaScript',
            icon: javascriptImg,
            duration: 11,
            since: 2010,
            exp: 0,
            percent: 0
        },
        {
            id: 5,
            name: 'TypeScript',
            icon: typescriptImg,
            duration: 4,
            since: 2015,
            exp: 0,
            percent: 0
        },
        {
            id: 6,
            name: 'JQuery',
            icon: jqueryImg,
            duration: 10,
            since: 2011,
            exp: 0,
            percent: 0
        },
        {
            id: 7,
            name: 'Express Js',
            icon: expressJsImg,
            duration: 8,
            since: 2013,
            exp: 0,
            percent: 0
        },
        {
            id: 8,
            name: 'MongoDB',
            icon: mongoDBImg,
            duration: 5,
            since: 2015,
            exp: 0,
            percent: 0
        },
        {
            id: 9,
            name: '.NET',
            icon: dotnetImg,
            duration: 6,
            since: 2015,
            exp: 0,
            percent: 0
        }
    ];

    const careerStartedFrom = 2010;

    const [skillsList, setSkillList] = useState(skillList);

    const calculateExp = (since) => {
        const dt2 = new Date();
        const dt1 = new Date(since, 1, 1);
        return calculateGapBetweenTwoDates(dt2, dt1);
    }

    const calculateGapBetweenTwoDates = (dt2, dt1) => {
        let diff = (dt2.getTime() - dt1.getTime()) / 1000;
        diff /= (60 * 60 * 24);
        return Math.abs(Math.round(diff / 365.25));
    }

    const calculatePercent = (exp) => {
        const dt2 = new Date();
        const dt1 = new Date(careerStartedFrom, 1, 1);
        const totalExp = calculateGapBetweenTwoDates(dt2, dt1);
        return Math.abs(Math.round((exp / totalExp) * 100));
    }

    const updateSkillSetArray = () => {
        skillsList.map((skill) => {
            const yearGap = calculateExp(skill.since);
            skill.exp = yearGap;
            skill.percent = calculatePercent(yearGap);
            return skill;
        });

        setSkillList([...skillsList])
    }

    useEffect(() => {
        updateSkillSetArray();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="custom-list">
            <div className="custom-list-wrapper">
                <div className="header-title">Skills</div>
                <div className="heading-separator"></div>
                <div className="custom-list-box">
                    {skillsList.map((skill) => {
                        return <div className="custom-list-item" key={skill.id}>
                            <div className="col-md-2 align-middle">
                                {skill.icon && <img src={skill.icon} className="skill-icon rounded-circle" alt={skill.name} />}
                            </div>
                            <div className="col-md-10 align-middle">

                                <div className="custom-list-item-title">{skill.name}
                                </div>
                                <div className="custom-list-item-sub-title">
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{ width: `${skill.percent}%` }}
                                            aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{skill.exp}+ years</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div >
    );
}

export default SkillList;
