import { Button, Form, Row, Col } from "react-bootstrap"

const DrinkForm = () => {
	return (
		<Form>
			<Row>
				<Col md={6}>
					<Form.Group className="mb-3">
						<Form.Label htmlFor='name'>Drink Name</Form.Label>
						<Form.Control 
							id="name"
							type="text"
							placeholder="Tequila, Vodka, etc"
							name="name"
						/>

					</Form.Group>	
				</Col>
				<Col md={6}>
					<Form.Group className="mb-3">
						<Form.Label htmlFor='category'>Drink Category</Form.Label>

						<Form.Select
							id="category"
							name="category"
						>
							<option>- Select Category -</option>
						</Form.Select>

					</Form.Group>	
				</Col>
			</Row>
		</Form>
	)
}

export default DrinkForm