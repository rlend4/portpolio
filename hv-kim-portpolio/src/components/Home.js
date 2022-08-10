import React from 'react';
import TextForm from './TextForm';

const Home = () => {
    const homeContents = [{
        title: '김형빈(KIM HYUNGBIN)',
        titleDesc: '',
        descTitle: 'Web Service & Web Solution Developer',
        descTexts: ['Front-end'],
    }]

    return (
        <div>
            <TextForm pageName="Welcome" contents = {homeContents}/>
        </div>
    );
};

export default Home;