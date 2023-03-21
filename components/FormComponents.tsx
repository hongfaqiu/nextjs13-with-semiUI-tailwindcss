'use client';

import React from 'react';

import { Button, Col, Form, Row } from '@douyinfe/semi-ui';

import Icons from './Icons';

const {
	Section,
	Input,
	InputNumber,
	AutoComplete,
	Select,
	TreeSelect,
	Cascader,
	DatePicker,
	TimePicker,
	TextArea,
	CheckboxGroup,
	Checkbox,
	RadioGroup,
	Radio,
	Slider,
	Rating,
	Switch,
	TagInput,
} = Form;

export default function FormComponents() {
	const initValues = {
		name: 'semi',
		business: ['ulikeCam'],
		role: 'ued',
		switch: true,
		files: [
			{
				uid: '1',
				name: 'vigo.png',
				status: 'success',
				size: '130KB',
				preview: true,
				url: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/vigo.png',
			},
		],
	};
	const plainOptions = ['A', 'B', 'C'];
	const style = { width: '90%' };
	const treeData = [
		{
			label: 'Asia',
			value: 'Asia',
			key: '0',
			children: [
				{
					label: 'China',
					value: 'China',
					key: '0-0',
					children: [
						{
							label: 'Beijing',
							value: 'Beijing',
							key: '0-0-0',
						},
						{
							label: 'Shanghai',
							value: 'Shanghai',
							key: '0-0-1',
						},
					],
				},
			],
		},
		{
			label: 'North America',
			value: 'North America',
			key: '1',
		},
	];

	return (
		<Form
			initValues={initValues}
			style={{ padding: 10, width: '100%' }}
			onValueChange={(v) => console.log(v)}
		>
			<Section text={'Basic Info'}>
				<Row>
					<Col span={12}>
						<Input
							field="name"
							label="Name（Input）"
							initValue={'mikeya'}
							style={style}
							trigger="blur"
						/>
					</Col>
					<Col span={12}>
						<DatePicker
							field="date"
							label="Date（DatePicker）"
							style={style}
							initValue={new Date()}
							placeholder="Choose data"
						/>
					</Col>
				</Row>
				<Row>
					<Col span={12}>
						<Select
							field="role"
							style={style}
							label="Role（Select）"
							placeholder="Choose role"
						>
							<Select.Option value="qa">Quality Assurance</Select.Option>
							<Select.Option value="rd">Software Engineer</Select.Option>
							<Select.Option value="pm">Product Manager</Select.Option>
							<Select.Option value="ued">Designer</Select.Option>
						</Select>
					</Col>
					<Col span={12}>
						<Select
							field="business"
							multiple
							style={style}
							placeholder="Choose application"
							label="Application（Multiple Select）"
						>
							<Select.Option value="semi">Semi</Select.Option>
							<Select.Option value="ulikeCam">UlikeCam</Select.Option>
							<Select.Option value="xigua">BuzzVideo</Select.Option>
						</Select>
					</Col>
				</Row>
				<Row>
					<Col span={12}>
						<Form.Cascader
							placeholder="Choose Area"
							treeData={treeData}
							field="area"
							label="Area（Cascader）"
							style={style}
						></Form.Cascader>
					</Col>
					<Col span={12}>
						<Form.TreeSelect
							field="tree"
							style={style}
							label="Node（TreeSelect）"
							placeholder="Select Service Node"
							treeData={treeData}
							filterTreeNode
						/>
					</Col>
				</Row>
				<Row>
					<Col span={12}>
						<TagInput
							field="product"
							label="Product（TagInput）"
							initValue={['abc', 'ulikeCam']}
							placeholder="Type and choose product name"
							style={style}
						/>
					</Col>
				</Row>
				<Row>
					<Col span={24}>
						<Form.Upload
							field="files"
							label="Files（Upload）"
							action="//semi.design/api/upload"
						>
							<Button icon={<Icons.Upload />} theme="light">
								Click to upload
							</Button>
						</Form.Upload>
					</Col>
				</Row>
			</Section>
			<Section text="Source Detail">
				<Row>
					<Col span={12}>
						<TextArea
							style={style}
							field="description"
							label="Apply Reason（TextArea）"
						/>
					</Col>
					<Col span={12}>
						<CheckboxGroup
							field="type"
							label="Apply type（CheckboxGroup）"
							initValue={['user', 'admin']}
							rules={[{ required: true }]}
						>
							<Checkbox value="admin">admin</Checkbox>
							<Checkbox value="user">user</Checkbox>
							<Checkbox value="guest">guest</Checkbox>
							<Checkbox value="root">root</Checkbox>
						</CheckboxGroup>
					</Col>
				</Row>
				<Row>
					<Col span={12}>
						<RadioGroup
							field="isMonopolize"
							label="Whether exclusive resources（Radio）"
						>
							<Radio value={1}>Yes</Radio>
							<Radio value={0}>No</Radio>
						</RadioGroup>
					</Col>
					<Col span={12}>
						<CheckboxGroup
							options={plainOptions}
							field="checkbox"
							label="Type（CheckboxGroup）"
							direction="horizontal"
						/>
					</Col>
				</Row>
				<Row>
					<Col span={12}>
						<TimePicker
							field="time"
							label="End Time（TimePicker）"
							style={{ width: '90%' }}
						/>
					</Col>
					<Col span={12}>
						<InputNumber
							field="number"
							label="Number of applications（InputNumber）"
							initValue={20}
							style={style}
						/>
					</Col>
				</Row>
				<Row>
					<Col span={12}>
						<Slider
							field="range"
							label="Resource usage alarm threshold(%)（Slider）"
							initValue={10}
							style={{ width: '90%' }}
						/>
					</Col>
					<Col span={12}>
						<Switch field="switch" label="Switch(Switch)" />
					</Col>
				</Row>
				<Row>
					<Col span={12}>
						<Rating
							field="rating"
							label="Satisfaction(Rating)"
							initValue={2}
							style={{ width: '90%' }}
						/>
					</Col>
				</Row>
			</Section>
			<Checkbox value="false" field="agree" noLabel={true}>
				I have read and understood the relevant regulations（Checkbox）
			</Checkbox>
			<Button type="primary" htmlType="submit" className="btn-margin-right">
				Submit
			</Button>
			<Button htmlType="reset">Reset</Button>
		</Form>
	);
}
