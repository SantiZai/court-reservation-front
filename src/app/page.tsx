import "./home.scss";

const HomePage = () => {
	return (
		<div className="container-all p-2">
			<div>
				<span>Logo</span>
			</div>

			<div className="flex flex-col">
				<span>Reserva tu cancha al instante</span>
				<span>
					Selecciná entre las opciones disponibles en tu ciudad en tiempo real!
				</span>
			</div>

			<div className="container-search flex flex-col p-2 rounded-2xl">
				<input type="text" placeholder="Buscar ciudad" />
				<input type="text" placeholder="Deporte" />
				<div className="flex gap-2">
					<input type="text" placeholder="Día" />
					<input type="text" placeholder="Horario" />
				</div>
				<button className="btn-primary rounded-2xl">Buscar cancha</button>
			</div>

			<div className="test-service">
				<span>Gestioná el uso de tus canchas de forma cómoda y práctica</span>
			</div>
			<div>
				<div className="flex flex-col">
					<span>
						¿Cómo puedo probar el servicio para mi institución deportiva?
					</span>
					<span>
						1. Ver planes y funciones según tus necesidades y las de tus
						clientes
					</span>
					<span>2. Contactarte con nosotros</span>
					<span>
						3. Recibes tu prueba <strong>gratis</strong> de hasta 15 días para
						probar nuestro software
					</span>
				</div>
				<div className="flex w-full justify-between">
					<button className="btn-primary rounded-md px-3 py-1 text-sm">FUNCIONALIDADES</button>
					<button className="btn-secondary rounded-md px-3 py-1 text-sm">PLANES Y PRECIOS</button>
				</div>
			</div>

			<div className="w-full flex flex-col items-center">
				<div>
					<span>Preguntas frecuentes</span>
				</div>
				<div></div>
			</div>
		</div>
	);
};

export default HomePage;
