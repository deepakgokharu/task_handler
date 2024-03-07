import React from "react";
import "./TasksBody.css";
import Task from "../utilityComponents/Task";

const compareTasks = (taskA, taskB, sortByFilters) => {};

const convertToClassReadable = (status) => {
	status = status.split().map((el) => {
		return el[0].toUpperCase() + el.substring(1);
	});
	return status.join("");
};

export default function TasksBody(props) {
	const sortTasksBySortFilters = () => {
		const { tasks, sortByFilters } = props;
		tasks.sort((taskA, taskB) => compareTasks(taskA, taskB, sortByFilters));
		return tasks.map((task, index) => {
			return (
				<div
					className={
						"taskContainer " + convertToClassReadable(task.status)
					}
					key={"task_" + String(index)}
				>
					<Task task={task} />
				</div>
			);
		});
	};

	return (
		<div className="tasksParentContainer">{sortTasksBySortFilters()}</div>
	);
}
