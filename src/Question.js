import React, { useState } from 'react';
import { Card, Typography, Row, Button, Modal } from 'antd';
import './App.css';
import { goesFirst, oddQuestionOut } from './Constants';

const { Title, Text } = Typography;

const Question = ({ oddOneOut }) => {
	const shuffle = list => list[Math.floor(Math.random() * list.length)];

	const [visible, setVisible] = useState(false);
	const [currentQuestion, setCurrentQuestion] = useState(shuffle(goesFirst));
	const [currentOddOne, setCurrentOddOne] = useState(shuffle(oddQuestionOut));

	return (
		<>
			<Card>
				<Row style={{ textAlign: 'right', marginRight: -10, marginTop: -5 }}>
					<Button
						size="small"
						shape="circle"
						icon="retweet"
						onClick={() => setCurrentQuestion(shuffle(goesFirst))}
					></Button>
				</Row>
				<Title level={3} style={{ fontWeight: 400 }}>
					The person {currentQuestion}
				</Title>
				<Button
					type="link"
					style={{ padding: 0 }}
					onClick={() => setVisible(true)}
				>
					What if it's a tie?
				</Button>
			</Card>
			<Modal
				visible={visible}
				footer={null}
				onCancel={() => setVisible(false)}
				style={{ maxWidth: 450 }}
			>
				<Text>
					<span style={{ fontWeight: 600, fontSize: 16 }}>
						How to solve a tie
					</span>
					<br />
					<br />
					If the question results in a tie, you can break the deadlock using one
					of these methods:
					<br />
					<br />
					✂️ Rock, paper, scissors <br />
					💰 Flip a coin <br />
					💪 Arm wrestle <br />
					☠️ Fight to the death <br />
				</Text>
				<br />
				<Button
					onClick={() => setVisible(false)}
					type="primary"
					style={{ marginTop: 15, width: '100%' }}
				>
					OK
				</Button>
			</Modal>
			{oddOneOut && (
				<Card style={{ marginTop: 20 }}>
					<Row style={{ textAlign: 'right', marginRight: -10, marginTop: -5 }}>
						<Button
							size="small"
							shape="circle"
							icon="retweet"
							onClick={() => setCurrentOddOne(shuffle(oddQuestionOut))}
						></Button>
					</Row>
					<Title level={4} type="secondary">
						<span style={{ textTransform: 'capitalize' }}>{oddOneOut}</span>,
						you should:
					</Title>
					<Title level={3} style={{ fontWeight: 400, marginTop: 0 }}>
						{currentOddOne}
					</Title>
				</Card>
			)}
		</>
	);
};

export default Question;
