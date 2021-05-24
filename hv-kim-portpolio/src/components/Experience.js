import React from 'react';
import TextForm from './TextForm';
import MostNotable from '../assets/MostNotable.jpeg';

const Experience = () => {
    const expContents = [{
        title: 'Ajou University',
        titleDesc: '(2006.03 ~ 2012.08)',
        descTitle: 'Dual Degree',
        descTexts: ['미디어학부', '경영학부'],
    },{
        title: 'Cheil World Wide Internship',
        titleDesc: '(2011.06 ~ 2011.08)',
        descTitle: 'Internship',
        descTexts: ['인터랙티브 미디어팀 인턴십 수료', 'IDEA BATTLE The Most Notable 수상'],
    }]

    return (
        <div>
            <TextForm pageName="Experience" contents = {expContents}/>
            <img src={MostNotable} />
        </div>
    );
};

export default Experience;