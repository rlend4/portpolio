import React from 'react';
import TextForm from './TextForm';

const Home = () => {
    const homeContents = [{
        title: '김형빈(KIM HYUNGBIN)',
        titleDesc: '',
        descTitle: 'Web Service & Solution Developer',
        descTexts: ['Front-end', 'Back-end'],
    }]

    return (
        <div>
            <TextForm pageName="Welcome" contents = {homeContents}/>
        </div>
    );
};

export default Home;