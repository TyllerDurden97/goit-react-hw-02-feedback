import React from 'react';
import css from 'components/FeedbackOptions/FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
      options.map((option) => {
         return (  
            <div className={css.feedBbuttonGroup}>
               <button name={option} type='button' className={css.feedBbutton} onClick={onLeaveFeedback}>{option}</button>
            </div>
            )   
      })  

)


//  <button name='neutral' type='button' onClick={onLeaveFeedback}>Neutral</button>
//    <button name='bad' type='button' onClick={onLeaveFeedback}>Bad</button>