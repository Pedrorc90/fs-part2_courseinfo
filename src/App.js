import React from 'react'


const Course = (props) => {

 return props.courses.map(course => {
       return (
         <div>
          <Header key={course} course={course}></Header>
          <Content course={course}></Content>
          <Total parts={course.parts}></Total>
         </div>
       )
  })

}
const Header = (props) => <h1 key={props.course.id}>{props.course.name}</h1>
const Content = (props) => props.course.parts.map(part => <Part key={part.id} part={part}></Part>)
const Part = (props) => <p key={props.part.id}>{props.part.name} {props.part.exercises}</p>
const Total = (props) => props.parts.reduce((s,p) => s.exercises + p.exercises)
 
  

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
     {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    } 
  ]
  return <Course courses={courses}></Course>
}

export default App