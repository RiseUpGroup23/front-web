export default function Preguntas() {
  return (
    <div className="flex flex-col items-center" id="quienesSomos">
      <div className="bg-zinc-300 w-full h-0.5" />
      <div>
        <h1 className="justify-center text-white text-center text-3xl md:text-5xl pt-2 pb-3 mt-5">
          ¿Por qué <span className="font-medium">RiseUp</span>?
        </h1>
        <div className="flex flex-col md:flex-row mx-4 gap-1 items-center md:items-start">
          <div className="w-full md:w-3/5 text-white text-lg md:text-4xl text-opacity-70 text-center md:text-left md:mt-10">
            En <span className="text-white">RiseUp</span> fusionamos la creatividad del diseño con la excelencia en el desarrollo web. <br />  <br />Ofrecemos soluciones digitales que no solo son visualmente impactantes, sino también funcionales y efectivas.
          </div>
          <img
            src="Letras/Up.png"
            className="object-contain object-center overflow-x-auto grow w-full md:w-2/5 hidden md:block"
          />
        </div>
      </div>
      <div className="mt-5">
        <h1 className="justify-center text-white text-center text-3xl md:text-5xl pt-2 pb-3">
          <span className="font-medium">Sobre</span> Nosotros
        </h1>
        <div className="flex flex-col md:flex-row m-4 gap-1 items-center md:items-start">
          <img
            src="Letras/Rise.png"
            className="object-contain object-center overflow-x-auto grow w-full md:w-2/5 hidden md:block md:mt-2"
          />
          <div className="w-full md:w-3/5 text-white text-lg md:text-4xl text-opacity-70 text-center md:text-right md:m-5">
            Somos un equipo de mentes apasionadas y colaborativas, unidas por un propósito común.
            <br />
            <br />
            Transformar ideas en realidades digitales. Cada uno de nosotros aporta una habilidad única y juntos formamos un equipo integral que aborda desafíos con entusiasmo y creatividad.
          </div>
        </div>
      </div>
    </div>
  )
}  