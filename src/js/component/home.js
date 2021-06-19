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

	function del(i) {
		setToDo(toDo.filter((tarea, index) => index !== i));
	}

	const toDoList = toDo.map((task, i) => {
		return (
			<li key={i}>
				<button
					onClick={
						() => del(i)
						//setToDo(toDo.filter((tarea, index) => index !== i))
					}
				/>
				{task}
			</li>
		);
	});

	// JS somente acima

	return (
		<>
			<input
				type="text"
				placeholder="New Task"
				onChange={event => {
					setNewTask(event.target.value);
				}}
				onKeyPress={event => {
					if (event.key === "Enter") {
						setToDo([...toDo, event.target.value]);
					}
				}}
			/>

			<ul>{toDoList}</ul>
		</>
	);
}
