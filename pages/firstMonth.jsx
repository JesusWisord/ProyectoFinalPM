import data from '../assets/json/basicCourses.json'
import Header from '../components/Header';
import ListOfCourses from '../components/ListOfCourses';

const firstMonth = () => {
  return (
    <>
      <Header />
      <div className="text-container">
        <h1 className="title">Primer Mes</h1>    
        <p>
          El primer mes trató sobre todo lo básico en desarrollo.
          De los cursos que más disfruté fueron los prácticos de HTML
          y CSS. Las bases de Backend me costaron un poco pero en 
          general todo fue fluido en estos meses.
          Gracias a estos cursos el desarrollo de esta página pudo
          proceder de manera ágil.
        </p>
      </div>
      <ListOfCourses data={data} />
    </>
  )
}

export default firstMonth