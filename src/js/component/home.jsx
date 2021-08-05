import React from "react";

//include images into your bundle

import { TodoList } from "./todoList";

//create your first component
const Home = () => {
	return (
		<div className="text-center mt-5">
			<TodoList />
		</div>
	);
};

export default Home;
