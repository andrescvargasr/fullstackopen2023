import React from 'react';

const Total = ({ sum }) => <p><b>total of {sum} exercises</b></p>

const Header = ({ course }) => <h2>{course}</h2>    

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <>
    {parts.map( part => 
      <Part key={part.id} part={part} />  
    )}
  </>


const Course = ({ course }) => {
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total sum={course.parts.map( exercise => exercise.exercises).reduce( (previousExercise, currentExercise) => previousExercise + currentExercise, 0 )} />
    </>
    )
}

export default Course;