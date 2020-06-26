import Header from '../components/Header';

const HomePage = () => {
  return (
    <>
      <Header isHome={true} />
      <div className="text-container">
        <h1 className='title'>
          Mi ruta durante Platzi Master
          </h1>
        <p>
          Durante estas últimas 12 semanas tuve muchos aprendizajes y con 
          esta página quiero mostrar de forma resumida todo lo que he aprendido 
          con este maravilloso programa.
        </p>
        <a href="/firstMonth">Primer Mes</a>
        <a href="/secondMonth">Segundo Mes</a>
        <a href="/thirdMonth">Tercer Mes</a>
      </div>
    </>
  )
}

export default HomePage