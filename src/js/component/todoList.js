import React from "react";

export function TodoList() {
	const [todoList, setTodoList] = React.useState([]);
	const [userInput, setUserInput] = React.useState("");

	return (
		<div className="body">
			<h1>todos</h1>
			<div className="boxShadow">
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
							<div className="buttonAppear" key={index}>
								<li className="item" key={index}>
									{item}
									<button className="button1">X</button>
								</li>
							</div>
						);
					})}
					<li className="itemsLeft">
						{todoList.length} items left
						<button
							className="button2"
							id="clearAll"
							onClick={() => {
								setTodoList([]);
							}}>
							clear all
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
}
