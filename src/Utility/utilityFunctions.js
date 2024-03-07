import moment from "moment";
import { dateFormat } from "./GlobalValues";

export const createNewTask = (details) => {
	const newTask = {
		title: details.title,
		description: details.description,
		priority: details.priority,
		expiryDatetime: details.expiryDatetime,
		createdDatetime: moment().format(dateFormat).toString(),
		status: details.status,
	};
	return newTask;
};

export const convertDatetimeToString = (date) => {
	return date.format(dateFormat).toString();
};
export const convertStringToDatetime = (dateString) => {
	return moment(dateString, dateFormat);
};

export const getCurrentDatetime = () => {
	return moment();
};
export const saveInDB = (tasks, currentUser) => {
	const localStorageTasks = JSON.parse(
		localStorage.getItem("tasksData") || "{}"
	);
	localStorageTasks[currentUser] = tasks;
	localStorage.setItem("tasksData", JSON.stringify(localStorageTasks));
};

export const getAllTasksFromDB = () => {
	try {
		const allTasks = JSON.parse(localStorage.getItem("tasksData") || "{}");

		return allTasks;
	} catch (err) {
		alert("err", err.toString());
		localStorage.removeItem("tasksData");
		return {};
	}
};
