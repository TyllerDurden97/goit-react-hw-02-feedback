import React from 'react';
import css from 'components/Statistics/Statistics.module.css';


export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
   <ul className={css.statList} >
   <li className={css.statListItem}>Good:<span className={css.statListSpan} >{good}</span></li>
   <li className={css.statListItem}>Neutral:<span className={css.statListSpan} >{neutral}</span></li>
   <li className={css.statListItem}>Bad:<span className={css.statListSpan} >{bad}</span></li>
   <li className={css.statListItem}>Total:<span className={css.statListSpan} >{total}</span></li>
   <li className={css.statListItem}>Positive feedback:<span className={css.statListSpan} >{positivePercentage}%</span></li>
   </ul>

)

   
