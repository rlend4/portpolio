import React, { useEffect, useState } from 'react';
import './EnjoyContent.css';
import QuizModal from './QuizModal';

const Quiz = () => {

    const [quizModalOn, setQuizModalOn] = useState(false);
    const handleOnClickToggle = () => {
        setQuizModalOn(!quizModalOn);
    }
    const [ramdomList, setRandomList] = useState([]);
    const countOfQ = 5;

    const QList = [
        {
            qType: 1,
            qItem: "한글을 창제한 사람은?",
            qOption: ['이순신', '세종대왕', '아인슈타인', '이성계'],
            qAns: '세종대왕'
        },
        {
            qType: 1,
            qItem: "가장 알맞지 않은것은? 백종원의 OOOO",
            qOption: ['삼대천왕', '골목식당', '무한도전', '한신포차'],
            qAns: '무한도전'
        },
        {
            qType: 1,
            qItem: "콜롬비아의 수도는?",
            qOption: ['라파즈', '보고타', '수아레즈', '베른'],
            qAns: '보고타'
        },
        {
            qType: 1,
            qItem: "한글을 포함한 세계 모든 나라의 언어를 통일된 방법으로 표현할 수 있도록 제정된 2바이트(16비트) 형태의 국제적인 문자 코드규약은?",
            qOption: ['ISO', '유니코드', '2벌식', 'ASCII'],
            qAns: '유니코드'
        },
        {
            qType: 1,
            qItem: "다음 중 기업의 상품이나 서비스를 구매하지 않으면서 혜택만 챙겨가는 소비자를 일컫는 용어는?",
            qOption: ['안티슈머', '체리피커', '블랙컨슈머', '트레저헌터'],
            qAns: '체리피커'
        },
        {
            qType: 1,
            qItem: "다음 중 수익시설을 자기가 사는 지역에 유치하겠다는 지역이기주의 현상을 무엇이라 하는가?",
            qOption: ['님비 현상', '바나나 현상', '스프롤 현상', '핌피 현상'],
            qAns: '핌피 현상'
        },
        {
            qType: 1,
            qItem: "다음 중 민간이 공공시설을 건설하고 정부가 이를 임대해서 사용하는 민간투자 방식은?",
            qOption: ['BTO', 'BOO', 'BTC', 'BTL'],
            qAns: 'BTL'
        },
        {
            qType: 1,
            qItem: "트위터에서 쓸 수 있는 최대 글자수는?",
            qOption: ['124자', '250자', '140자', '200자'],
            qAns: '140자'
        },
        {
            qType: 1,
            qItem: "소음 측정 단위는 어느것인가?",
            qOption: ['dB', 'ppm', 'BOD', 'COD'],
            qAns: 'dB'
        }
    ]
    useEffect(() => {
        setRandomList(getRandomArray(countOfQ, QList.length))
    }, [quizModalOn])

    function getRandomArray(idxSize, range) {
        /* 랜덤 수를 가진 배열을 반환하는 메서드.
         * idxSize : 반환받을 배열 사이즈, 
         * range : 랜덤 수의 범위
         */
        var indexs = new Array(); // 랜덤 인덱스 배열
        var hasValue = false; //같은 값이 있는지 확인하기 위한 변수
        
        if(idxSize > range) {
            console.error('index size > range');
            return indexs;
        }
        
        while(indexs.length < idxSize) {
            hasValue = false;
            var temp = parseInt(Math.random() * range);
            for(let c = 0; c < indexs.length; c++) {
                if(temp == indexs[c]) {
                    hasValue = true;
                    break;
                }
            }
            if(hasValue == false) {
                indexs.push(temp);
            } 
        }
        return indexs;
    }

    return (
        <div>
            <div className="enjoy-content-title">
                Quiz
            </div>
            <div>
                <div className="button-quiz-start" onClick={handleOnClickToggle}>Start</div>
            </div>
            {quizModalOn && (
                <QuizModal
                    setQuizModalOn={handleOnClickToggle}
                    countOfQ={countOfQ}
                    QList={QList}
                    ramdomList={ramdomList}
                />
            )}
        </div>
    );
};

export default Quiz;