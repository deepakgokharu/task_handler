import React, { useState } from "react";
import { Modal } from "antd";
import {
	convertDatetimeToString,
	convertStringToDatetime,
	createNewTask,
	getCurrentDatetime,
} from "../Utility/utilityFunctions";
import {
	dateFormat,
	priorityOptionList,
	statusOptionList,
} from "../Utility/GlobalValues";
import { Input, Typography, Select } from "antd";
import DatePickerMoment from "../utilityComponents/DatePickerMoment";

export default function AddTaskModal(props) {
	const { handleSaveAndCloseAddTaskModal, handleCloseAddTaskModal } = props;
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [expiryDatetime, setExpiryDatetime] = useState(
		convertDatetimeToString(getCurrentDatetime().add(7, "days"))
	);
	const [priority, setPriority] = useState(priorityOptionList[0]);
	const [status, setStatus] = useState(statusOptionList[0]);

	const validateAllFields = () => {
		if (!title) return false;
		if (!description) return false;
		if (!priority) return false;
		if (!expiryDatetime) return false;
		if (!status) return false;
		return true;
	};
	const validateAndSaveNewTask = () => {
		if (validateAllFields()) {
			const details = {
				title: title,
				description: description,
				priority: priority,
				expiryDatetime: expiryDatetime,
				status: status,
			};
			handleSaveAndCloseAddTaskModal(createNewTask(details));
		}
	};

	const handleTitleChange = (e) => {
		setTitle(e.target.value || "");
	};
	const handleDescriptionChange = (e) => {
		setDescription(e.target.value || "");
	};
	const handleStatusChange = (statusOption) => {
		if (statusOption) {
			setStatus(statusOption);
		}
	};
	const handlePriorityChange = (priorityOption) => {
		if (priorityOption) {
			setPriority(priorityOption);
		}
	};

	const handleDatePickerChange = (datetime) => {
		if (datetime) {
			setExpiryDatetime(convertDatetimeToString(datetime));
		}
	};
	return (
		<Modal
			title="Add Task"
			open={true}
			okText="Add"
			onOk={validateAndSaveNewTask}
			onCancel={handleCloseAddTaskModal}
		>
			<div>
				<Typography.Title level={5}>Title</Typography.Title>
				<Input
					value={title}
					onChange={handleTitleChange}
					placeholder="title of the task"
				/>
			</div>
			<div>
				<Typography.Title level={5}>Description</Typography.Title>
				<Input
					value={description}
					onChange={handleDescriptionChange}
					placeholder="description of the task"
				/>
			</div>
			<div>
				<Typography.Title level={5}>Priority</Typography.Title>
				<Select
					value={priority}
					style={{ width: "100%" }}
					onChange={handlePriorityChange}
					options={priorityOptionList.map((priorityOption) => ({
						value: priorityOption,
						label: priorityOption,
					}))}
				/>
			</div>
			<div>
				<Typography.Title level={5}>Status</Typography.Title>
				<Select
					value={status}
					style={{ width: "100%" }}
					onChange={handleStatusChange}
					options={statusOptionList.map((statusOption) => ({
						value: statusOption,
						label: statusOption,
					}))}
				/>
			</div>
			<div>
				<Typography.Title level={5}>Expiry Date</Typography.Title>
				<DatePickerMoment
					minDate={getCurrentDatetime().endOf("day")}
					allowClear={false}
					format={dateFormat}
					showTime={{
						format: "HH:mm",
					}}
					value={convertStringToDatetime(expiryDatetime)}
					onChange={handleDatePickerChange}
					onOk={handleDatePickerChange}
				/>
			</div>
		</Modal>
	);
}
