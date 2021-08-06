import React from "react";

export function TodoList() {
	const [todoList, setTodoList] = React.useState([]);
	const [userInput, setUserInput] = React.useState("");

	return (
		<div className="maindiv">
			<input
				placeholder="What needs to be done?"
				type="text"
				value={userInput}
				onChange={event => {
					setUserInput(event.target.value);
				}}
				onKeyPress={event => {
					if (event.key === "Enter") {
						const newTodoList = todoList.concat([userInput]);
						setTodoList(newTodoList);
						setUserInput("");
					}
				}}></input>
			<ul>
				{todoList.map((item, index) => {
					return (
						<li key={index}>
							{item}
							<button>X</button>
						</li>
					);
				})}
				<li className="itemsLeft">{todoList.length} items left</li>
			</ul>
		</div>
	);
}
