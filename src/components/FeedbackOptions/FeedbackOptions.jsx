import React from 'react'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
   <>
   <button name='good' type='button' onClick={onLeaveFeedback}>Good</button>
   <button name='neutral' type='button' onClick={onLeaveFeedback}>Neutral</button>
   <button name='bad' type='button' onClick={onLeaveFeedback}>Bad</button>
   </>

)
