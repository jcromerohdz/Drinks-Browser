import { Modal, Image } from 'react-bootstrap'
import useDrinks from '../hooks/useDrinks'

const DrinkModal = () => {

	const { modal, handleModalClick, preparation, loading } = useDrinks()

	const showIngredients = () => {
		let ingredients = []

		for(let i=1; i<16; i++) {
			if(preparation[`strIngredient${i}`]){
				ingredients.push(
					<li>{preparation[`strIngredient${i}`]}{preparation[`strMeasure${i}`]}</li>
				)
			}
		}

		return ingredients
	}

	return (
		!loading && (<Modal
			show={modal}
			onHide={handleModalClick}
		>
			<Image 
				src={preparation.strDrinkThumb}
				alt={`Image preparation ${preparation.strDrink}`}
			/>
			<Modal.Header>
				<Modal.Title>{preparation.strDrink}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className="p-3">
					<h2>Instructions</h2>
					{preparation.strInstructions}
					<h3>Ingredients and quantities</h3>
					{showIngredients()}
				</div>
			</Modal.Body>
		</Modal>
		)
	)
}

export default DrinkModal