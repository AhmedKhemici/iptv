import Question from './Question'
import classes from './FAQ.module.css'

const FAQ = () => {
  const questions = [
    {
      question:"AVAILABLE PAYMENT METHODS?",
      answer:"Paypal, Skrill, Wise, Paysera, Binance"
    },
    {
      question:"AVAILABLE PAYMENT METHODS?",
      answer:"Paypal, Skrill, Wise, Paysera, Binance"
    },
    {
      question:"AVAILABLE PAYMENT METHODS?",
      answer:"Paypal, Skrill, Wise, Paysera, Binance"
    },
    {
      question:"AVAILABLE PAYMENT METHODS?",
      answer:"Paypal, Skrill, Wise, Paysera, Binance"
    },
    {
      question:"AVAILABLE PAYMENT METHODS?",
      answer:"Paypal, Skrill, Wise, Paysera, Binance"
    },
    {
      question:"AVAILABLE PAYMENT METHODS?",
      answer:"Paypal, Skrill, Wise, Paysera, Binance"
    },
    {
      question:"AVAILABLE PAYMENT METHODS?",
      answer:"Paypal, Skrill, Wise, Paysera, Binance"
    }
  ];
  return (
    <div className={classes.faq}>
      {questions.map((question)=>{
        return (
          <Question 
            question={question.question}
            answer={question.answer}
          />
        );
      })}
    </div>   
  );
}

export default FAQ;