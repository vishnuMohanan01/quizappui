import React from 'react';
import './playQuestion.css';

const Question = (props) => {
	return (
        <p className={'question'}>{props.question}</p>
    );
};

export default Question;