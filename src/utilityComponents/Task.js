import React from "react";
import "./Task.css";
import { Input, Select, Typography } from "antd";
import { dateFormat, priorityOptionList } from "../Utility/GlobalValues";
import DatePickerMoment from "./DatePickerMoment";
import {
	convertStringToDatetime,
	getCurrentDatetime,
} from "../Utility/utilityFunctions";

const { TextArea } = Input;

export default function Task(props) {
	const { task } = props;
	return (
		<div>
			<div className="titleRow">
				<div>Title</div>
				<div>date of entry</div>
			</div>
			<div className="descriptionRow">
				<Typography.Title level={5}>Description</Typography.Title>
				<TextArea value={task.description} />
			</div>
			<div className="priorityRow">
				<div className="priorityDiv">
					<Typography.Title level={5}>Priority</Typography.Title>
					<Select
						value={task.priority}
						style={{ width: "100%" }}
						// onChange={handlePriorityChange}
						options={priorityOptionList.map((priorityOption) => ({
							value: priorityOption,
							label: priorityOption,
						}))}
					/>
				</div>
				<div className="expiryDateDiv">
					<Typography.Title level={5}>Expiry Date</Typography.Title>
					<DatePickerMoment
						minDate={getCurrentDatetime().endOf("day")}
						allowClear={false}
						format={dateFormat}
						showTime={{
							format: "HH:mm",
						}}
						value={convertStringToDatetime(task.expiryDatetime)}
						// onChange={handleDatePickerChange}
						// onOk={handleDatePickerChange}
					/>
				</div>
			</div>
		</div>
	);
}
