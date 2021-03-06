import React, { useState } from "react";
import "./home.scss";

export function Home() {
	// JS aqui abaixo
	const [newTask, setNewTask] = useState("");
	const [toDo, setToDo] = useState([
		"Tomar banho",
		"Escovar os Dentes",
		"Tirar o lixo",
		"Brincar com o Alexandre",
		"Fazer Comida"
	]);
	const counter = toDo.length;
	const enterHandler = event => {
		if (event.key === "Enter") {
			if (event.target.value == "") {
				alert("YOU NEED TO PUT A VALID TASK");
			} else if (toDo.includes(event.target.value)) {
				alert("THIS TASK IS ALREADY ON YOUR LIST");
			} else {
				setToDo([...toDo, event.target.value]);
				setNewTask("");
			}
		}
	};

	function del(i) {
		setToDo(toDo.filter((iten, index) => index !== i));
	}

	const toDoList = toDo.map((task, i) => {
		return (
			<li key={i}>
				<div className="row">
					<div className="col d-flex justify-content-between">
						{task}
						<i
							id="trash"
							className="fas fa-trash-alt"
							onClick={() => del(i)}
						/>
					</div>
				</div>
			</li>
		);
	});

	// JS somente acima

	return (
		<div className="container d-flex justify-content-md-center row mt-5">
			<div id="caixa" className="col-7 ">
				<h1 className="text-center">ToDo List</h1>
				<div className="row justify-content-md-center">
					<div className="col col-lg-8">
						<center>
							<input
								value={newTask}
								id="input"
								type="text"
								placeholder="New Task"
								onChange={event => {
									setNewTask(event.target.value);
								}}
								onKeyPress={enterHandler}
							/>
						</center>
					</div>
				</div>
				<div className="row justify-content-md-center">
					<div className="col col-lg-8 mt-3">
						{counter > 0 ? (
							<ul>{toDoList}</ul>
						) : (
							<p>No tasks, add a task</p>
						)}
					</div>
				</div>
				<div className="row justify-content-md-center">
					<div className="col col-lg-8 mt-3">
						<center>
							<p>YOU HAVE {counter} TASKS TODO</p>
						</center>
					</div>
				</div>
				<div className="text-center">Made by Felipe</div>
			</div>
		</div>
	);
}
