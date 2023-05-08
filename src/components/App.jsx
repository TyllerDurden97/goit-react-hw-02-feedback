import { Component } from "react"
import { Statistics } from 'components/Statistics/Statistics'
import {FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions'

export class App extends Component {
   state = {
      good: 0,
      neutral: 0,
      bad: 0
   };
   
   handleFeedbButton = (e) => {
      const nameOfState = e.currentTarget.name;
      this.setState((prevState) => ({ [nameOfState]: prevState[nameOfState] + 1 }
      ));
      // console.log(this.state.good);
      // console.log(e.currentTarget.name);
   };

   countTotalFeedback = ({good, neutral, bad}) => 
      (good + neutral + bad);
   
   countPositiveFeedbackPercentage = ({ good }) => (
      this.countTotalFeedback(this.state) ?
         Math.round(good * 100 / this.countTotalFeedback(this.state)) :
         0

   );

   
   
   
   render() {
      return (
         <>
          <div>
            <h2>Please leave feedback</h2>
            <button name='good' type='button' onClick={this.handleFeedbButton}>Good</button>
            <button name='neutral' type='button' onClick={this.handleFeedbButton}>Neutral</button>
            <button name='bad' type='button' onClick={this.handleFeedbButton}>Bad</button>
         </div>
         <div>
            <h2>Statistic</h2>
               <span>Good:{ this.state.good}</span>
               <span>Neutral:{ this.state.neutral}</span>
               <span>Bad:{this.state.bad}</span>
               <span>Total:{this.countTotalFeedback(this.state)}</span>
               <span>Positive feedback:{this.countPositiveFeedbackPercentage(this.state)}%</span>

            </div>
         </>
        
      )
   }
} 
