import NavBarDigital from "../../../components/NavBarDigital";

export default function funcion() {
  const fechaInicio = new Date(2014, 3, 6);
  const hoy = new Date();
  const milisEnAnio = 1000 * 60 * 60 * 24 * 365;
  const anios = Math.floor(
    (hoy.getTime() - fechaInicio.getTime()) / milisEnAnio
  );

  console.log(hoy);
  return (
    <div className="min-h-screen bg-[linear-gradient(to_right,#0172bf,#00ade5,#0172bf)] h-auto">
      <NavBarDigital></NavBarDigital>
      <div className="pt-24"></div>
      <p>Llevamos mas de {anios} años en el mercado</p>
    </div>
  );
}
