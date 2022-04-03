import {Col, Card, Button} from 'react-bootstrap'
import useDrinks from '../hooks/useDrinks'

const Drink = ({drink}) => {

	const {handleModalClick, handleDrinkIdClick} = useDrinks()

	return (
		<Col md={6} lg={4}>
			<Card className='mb-4'>
				<Card.Img 
					variant="top"
					src={drink.strDrinkThumb}
					alt={`Image of ${drink.strDrink}`}
				/>
			</Card>
			<Card.Body>
				<Card.Title>{drink.strDrink}</Card.Title>

				<Button
					variant={'outline-dark'}
					className="w-100 text-uppercase mt-2"
					onClick={() => { 
						handleModalClick()
						handleDrinkIdClick(drink.idDrink)
					}}
				>
					See preparation!
				</Button>
			</Card.Body>
		</Col>
	)
}

export default Drink