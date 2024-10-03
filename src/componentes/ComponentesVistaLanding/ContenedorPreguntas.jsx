export default function ContenedorPreguntas() {
  return (
    <div className="contenedor-preguntas">
      <div className="home-pregunta-section">
        <div className="home-pregunta-text">
          <h1 className="home-pregunta">
            ¿Por qué <strong>RiseUp</strong>?
          </h1>
          <span className="home-respuesta">
            En RiseUp fusionamos la creatividad del diseño con la excelencia en el desarrollo web para ofrecer soluciones digitales que no solo son visualmente impactantes, sino también funcionales y efectivas. Somos un equipo apasionado de diseñadores y desarrolladores que trabajan juntos para dar vida a tus ideas y destacar tu presencia en línea.
          </span>
        </div>
        <img src="Letras/Up.png" className="pregunta-imagen" />
      </div>
      <div className="home-pregunta-section inv">
        <div className="home-pregunta-text">
          <h1 className="home-pregunta">
            ¿<strong>Quiénes</strong> somos?
          </h1>
          <span className="home-respuesta">
            Somos un equipo de mentes apasionadas y colaborativas, unidas por un propósito común, transformar ideas en realidades digitales.
Cada uno de nosotros aporta una habilidad única y juntos formamos un equipo integral que aborda desafíos con entusiasmo y creatividad.
                      </span>
        </div>
        <img src="Letras/Rise.png" className="pregunta-imagen" />
      </div>
    </div>
  );
}
