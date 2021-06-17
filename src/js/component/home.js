import React, { useState } from "react";

export function Home() {
	// JS aqui abaixo
	const [toDo, setToDo] = useState([
		"Tomar banho",
		"Escovar os Dentes",
		"Tirar o lixo",
		"Brincar com o Alexandre",
		"Fazer Comida"
	]);
	const [newTask, setNewTask] = useState("");

	// JS somente acima

	return (
		<>
			<input
				type="text"
				onChange={event => setNewTask(event.target.value)}
				value={newTask}></input>
			<p>{newTask}</p>
			<p>{toDo}</p>
		</>
	);
}
