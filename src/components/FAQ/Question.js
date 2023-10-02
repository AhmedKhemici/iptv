import classes from './Questions.module.css'

const Questions = ( props) => {
    return (
        <div className={classes.box}>
            <div className={classes.questions}>
                <div className={classes.dropdown}>text</div>
                <div className={classes.header}>{props.question}</div>
            </div>
            <div className={classes.answer}>{props.answer}</div>
        </div>   
    );
}

export default Questions;