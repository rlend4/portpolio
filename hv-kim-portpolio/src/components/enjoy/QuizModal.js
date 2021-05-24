import React, { useState } from 'react';

const QuizModal = (params) => {
    const [qIndex, setQIndex] = useState(0);
    const [scoreCount, setScoreCount] = useState(0);
    let thisTurn = params.ramdomList[qIndex];

    const handleOnClickNext = () => {
        if(checked === -1 ) return;
        // check answer
        if(params.QList[thisTurn].qAns === params.QList[thisTurn].qOption[checked]) {
            setScoreCount(scoreCount + 1);
        } else {
            console.log('오답');
        }

        // next question
        setQIndex(qIndex + 1);
        setChecked(-1);
    }

    const [checked, setChecked] = useState(-1);

    const handleOnClickOption = (index) => {
        setChecked(index);
    }

    const getMention = (score) => {
        if(score >= 80) {
            return "훌륭합니다";
        } else if(score >= 60) {
            return "나쁘지 않네요"
        } else if(score >= 40) {
            return "노력하세요"
        } else {
            return "위로드립니다"
        }
    }

    const answerType = () => {
        switch(params.QList[thisTurn].qType) {
            case 1: return (
                <div className="quiz-modal-answer">
                    {params.QList[thisTurn].qOption.map((item, index) => (
                        <div key={index} className={index===checked ? "selected" : ""} onClick={() => handleOnClickOption(index)}>
                            {item}
                        </div>
                    ) )}
                </div>
            );
            default: return (
                <div>
                    no match type
                </div>
            );
        }
    }

    return (
        <div className="quiz-modal-wrapper" onClick={params.setQuizModalOn}>
            {qIndex < params.countOfQ ?
                <div className="modalContainer" onClick={(e) => e.stopPropagation()}>
                    <div className="quiz-modal-header">
                        {qIndex+1} / {params.countOfQ}
                    </div>
                    <div className="quiz-modal-question">
                        {params.QList[thisTurn].qItem}
                    </div>
                    {answerType()}
                    <div className="quiz-modal-footer">
                        <div className={checked === -1 ? "quiz-modal-button disabled" : "quiz-modal-button"} onClick={handleOnClickNext}>next</div>
                    </div>
                </div>
            :
                <div className="modalContainer" onClick={(e) => e.stopPropagation()}>
                    <div className="quiz-modal-result">
                        <div className="quiz-modal-result-content">
                            당신의 점수는 <br/>{Math.floor((scoreCount/params.countOfQ)*100)}점 입니다
                            <br/>
                            <br/>
                            {getMention(Math.floor((scoreCount/params.countOfQ)*100))}
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default QuizModal;