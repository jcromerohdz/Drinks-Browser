import { Row } from 'react-bootstrap'
import Drink from './Drink' 
import useDrinks from "../hooks/useDrinks"

const DrinksList = () => {

	const { drinks } = useDrinks()

	return (
		<Row className='mt-5'>
			{drinks.map(drink => (
				<Drink 
					key={drink.idDrink}
					drink={drink}
				/>
			))}
		</Row>
	)
}

export default DrinksList