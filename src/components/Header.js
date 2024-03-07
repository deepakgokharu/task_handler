import React from "react";
import "./Header.css";
import { Row, Col, Button } from "antd";
import { PlusOutlined, DownOutlined } from "@ant-design/icons";

export default function Header(props) {
	const { handleOpenAddTaskModal } = props;
	return (
		<div className="headerContainer">
			<Row justify="end">
				<Col xs={6} md={2}>
					<Button onClick={handleOpenAddTaskModal} type="primary">
						<PlusOutlined />
						Add Task
					</Button>
				</Col>
				<Col xs={6} md={2}>
					<Button>
						Sort By
						<DownOutlined />
					</Button>
				</Col>
			</Row>
		</div>
	);
}
