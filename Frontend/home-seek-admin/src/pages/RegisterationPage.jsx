import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registration } from '../store/adminReducer';
import { Form, Input, Button, Typography } from 'antd';
const { Title } = Typography;

const layout = {
	labelCol: {
		span: 5
	},
	wrapperCol: {
		span: 10
	}
};
const tailLayout = {
	wrapperCol: {
		offset: 5,
		span: 10
	}
};

class RegisterationPage extends Component {
	state = {
		name: '',
		email: '',
		password: '',
		role: ''
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.registration(this.state);
		//this.props.history.push('/signIn')
	};

	render() {
		return (
			<div className="register-form">
				<Title style={{ marginLeft: 330 }}>Registeration Form</Title>
				<Form
					{...layout}
					name="basic"
					initialValues={{
						remember: true
					}}
				>
					<Form.Item
						label="Name"
						name="name"
						rules={[
							{
								required: true,
								message: 'Please input your name!'
							}
						]}
					>
						<Input name="name" onChange={this.handleChange} value={this.state.name} />
					</Form.Item>

					<Form.Item
						label="Email"
						name="email"
						rules={[
							{
								required: true,
								message: 'Please input your email!'
							}
						]}
					>
						<Input name="email" onChange={this.handleChange} value={this.state.email} />
					</Form.Item>

					<Form.Item
						label="Password"
						name="password"
						rules={[
							{
								required: true,
								message: 'Please input your password!'
							}
						]}
					>
						<Input.Password
						 name="password" onChange={this.handleChange} value={this.state.password} />
					</Form.Item>

					<Form.Item
						label="Role"
						name="role"
						rules={[
							{
								required: true,
								message: 'Please input your role!'
							}
						]}
					>
						<Input name="role" onChange={this.handleChange} value={this.state.role} />
					</Form.Item>

					<Form.Item {...tailLayout}>
						<Button type="primary" htmlType="submit" onClick={this.handleSubmit}>
							Submit
						</Button>
					</Form.Item>
				</Form>
			</div>
		);
	}
}

export default connect(null, { registration })(RegisterationPage);
