import React from 'react';

const ListOfCourses = ({data}) => {
  return (
    <div className="course__container">
      <ul className="course__list">
        {data.courses.map( course => {
          return (
            <li key={course.id}>
              <figure>
                <img src={course.badge} alt={course.title} />
              </figure>
              <h2>{course.title}</h2>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ListOfCourses;
