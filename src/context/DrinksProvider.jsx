import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

const DrinksContext = createContext()
const DrinksProvider = ({children}) => {
	const [drinks, setDrinks] = useState([])
	const [modal, setModal] = useState(false)
	const [drinkId, setDrinkId] = useState(null)
	const [preparation, setPreparation] = useState({})
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		const getPreparation = async () => {
			if(!drinkId) return

			try {
				const preparationURL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
				const { data } = await axios(preparationURL)

				setPreparation(data.drinks[0])
				
			} catch (error) {
				console.log(error)
			} finally {
				setLoading(false)
			}

		}
		getPreparation()
	}, [drinkId])

	const drinksQuery = async search => {
		try {
			const drinksURL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search.name}&c=${search.category}`

			const { data } = await axios(drinksURL)
			setDrinks(data.drinks)
			
		} catch (error) {
			console.log(error)
		}
	}

	const handleModalClick = () => {
		setModal(!modal)
	}

	const handleDrinkIdClick = (id) => {
		setDrinkId(id)
	}

	return (
		<DrinksContext.Provider
			value={{
				drinksQuery,
				drinks,
				handleModalClick,
				modal,
				handleDrinkIdClick,
				preparation,
				loading
			}}
		>

			{children}

		</DrinksContext.Provider>
	)
}

export {
	DrinksProvider
}

export default DrinksContext