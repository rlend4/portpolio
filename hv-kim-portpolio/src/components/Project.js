import React from 'react';
import TextForm from './TextForm';

const Project = () => {
    const sdsContents = [{
        title: '삼성닷컴 한국사이트 개발/운영',
        titleDesc: '(2014.05 ~ 2018.05)',
        descTitle: 'Summary',
        descTexts: [
            '삼성전자 브랜드 & e-commerce 사이트 개발 운영', 
            '홈페이지 메인 페이지/공지사항 관리, 매장찾기 운영, 이벤트 페이지 신규 제작',
            'JSP, HTML, CSS, Java, Oracle'
        ],
        link: 'https://www.samsung.com/sec/',
        linkDesc: ''
    },{
        title: '삼성닷컴 일본(Galaxy Mobile) 신규 구축 파견',
        titleDesc: '(2016.11 ~ 2017.05)',
        descTitle: 'Summary',
        descTexts: [
            '삼성전자의 일본 브랜드 페이지 신규 구축', 
            '사이트 front 페이지 및 관리자 어드민 화면 신규 구축',
            '기존 사용 중이던 support, business 서비스 마이그레이션을 통한 통합',
            'JSP, HTML, CSS, Java Spring-boot'
        ],
        link: 'https://www.galaxymobile.jp/',
        linkDesc: ''
    },{
        title: 'AI 챗봇 솔루션 개발',
        titleDesc: '(2018.06 ~ 2021.08)',
        descTitle: 'Summary',
        descTexts: [
            'AI 솔루션(Brity Assistant) 개발', 
            'On-promise와 PaaS 서비스 양쪽 버전 제공',
            'Web 기반 서비스로 ReactJs-SpringBoot를 활용한 솔루션 개발',
            'VueJs-SpringBoot를 활용한 관리자 어드민 개발',
            'PaaS 서비스를 위해 플랫폼간 Interface 개발',
            'ReactJs, VueJs, Java Spring-boot, Mybatis, Mariadb/Oracle, Git, Jenkins, Jira',
        ],
        link: 'https://www.samsungsds.com/',
        linkDesc: 'MyTrial 메뉴에서 체험 가능'
    },{
        title: '사내 개인비서봇 구축 프로젝트 파견',
        titleDesc: '(2019.09 ~ 2020.02)',
        descTitle: 'Summary',
        descTexts: [
            '사내 개인비서봇(Personal Assistant) 신규 구축 프로젝트 파견', 
            'PoC개발 후 운영팀에 이관',
            'VueJs-SpringBoot를 활용한 관리자 어드민 개발',
            '사내 레거시 서비스 연계를 위한 인터페이스 개발',
            'VueJs, Java Spring-boot, Mybatis, Mariadb, Git, Jenkins, Jira',
        ],
    }]

    const netmarbleContents = [{
        title: '마케팅 데이터 분석 플랫폼 개발',
        titleDesc: '(2021.09 ~ )',
        descTitle: 'Summary',
        descTexts: [
            '마케팅 데이터 시각화를 위한 대시보드 빌드 어플리케이션 고도화 개발', 
            'React, TypeScript, Mobx, Storybook, Figma',
        ],
    },
    {
        title: '리포트 생성 어플리케이션 개발',
        titleDesc: '(2022.07 ~ )',
        descTitle: 'Summary',
        descTexts: [
            '데이터를 기반으로 리포트를 생성해주는 어플리케이션 개발', 
            'React, Node.js, GCP',
        ],
    }]

    return (
        <div>
            <TextForm pageName="Projects In Samsung SDS" contents = {sdsContents}/>
            <TextForm pageName="Projects In Netmarble" contents = {netmarbleContents}/>
        </div>
    );
}

export default Project;