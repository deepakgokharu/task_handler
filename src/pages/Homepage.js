import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import TasksBody from "../components/TasksBody";
import AddTaskModal from "../utilityComponents/AddTaskModal";
import { defaultUser } from "../Utility/GlobalValues";
import { getAllTasksFromDB, saveInDB } from "../Utility/utilityFunctions";

export default function Homepage() {
	// const [currentUser, setCurentUser] = useState("");
	const [tasks, setTasks] = useState([]);
	const [sortByFilters, setSortByFilters] = useState([]);
	const [openAddTaskModal, setOpenAddTaskModal] = useState(false);

	useEffect(() => {
		// setCurentUser(defaultUser);
		const currentUser = defaultUser;
		const allTasks = getAllTasksFromDB();
		const currentUserTasks = allTasks[currentUser] || [];
		setTasks(currentUserTasks);
		return () => {
			setTasks([]);
		};
	}, []);

	const handleOpenAddTaskModal = () => {
		setOpenAddTaskModal(true);
	};
	const handleCloseAddTaskModal = () => {
		setOpenAddTaskModal(false);
	};
	const handleSaveAndCloseAddTaskModal = (newTask) => {
		// adding new task in the tasks list
		const tempTasks = tasks;
		tempTasks.push(newTask);
		setTasks(tempTasks);
		saveInDB(tempTasks, defaultUser);
		// ending the adding new task code
		setOpenAddTaskModal(false);
	};
	const updateTasksInDB = () => {};

	const updateSortFilters = (filters) => {
		setSortByFilters(filters || []);
	};

	return (
		<>
			<Header
				updateSortFilters={updateSortFilters}
				handleOpenAddTaskModal={handleOpenAddTaskModal}
			/>
			<TasksBody tasks={tasks} sortByFilters={sortByFilters} />
			{openAddTaskModal && (
				<AddTaskModal
					handleSaveAndCloseAddTaskModal={
						handleSaveAndCloseAddTaskModal
					}
					handleCloseAddTaskModal={handleCloseAddTaskModal}
				/>
			)}
		</>
	);
}
