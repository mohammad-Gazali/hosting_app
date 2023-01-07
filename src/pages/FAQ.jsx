import React from "react";
import { Link } from "react-router-dom";
import { questions } from "../constants/questions";

const FAQ = () => {
	return (
  <main className="mb-20 mt-10 px-4">
    <h2 className="text-4xl font-bold text-accent text-center">
      A Frequently Asked Questions
    </h2>
    <ul className="md:px-10 sm:px-4 mt-10 flex flex-col gap-4">
      {questions.map(question => {
        return <Question key={question.id} question={question.question} answer={question.answer} />
      })}
    </ul>
    <hr className='border-secondary border-[1px] bg-secondary rounded-lg mt-20 md:mx-10 sm:mx-4' />
  </main>
  );
};


const Question = ({ question, answer }) => {
	return (
		<li className="collapse collapse-arrow shadow-md bg-primary/5 rounded-box">
			<input type="checkbox" />
			<div className="collapse-title text-primary font-semibold">
				{ question }
			</div>
			<div className="collapse-content text-primary">
				<p>
          { answer }
        </p>
			</div>
		</li>
	);
};

export default FAQ;
