import { Container } from "react-bootstrap"
import DrinkForm from "./components/DrinkForm"
import { CategoriesProvider } from "./context/CategoriesProvider"
import { DrinksProvider } from "./context/DrinksProvider"

function App() {

  return (
		<CategoriesProvider>
			<DrinksProvider>
				<header className="py-5">
					<h1>Drinks Browser</h1>
				</header>

				<Container className='mt-5'>
					<DrinkForm />
				</Container>
			</DrinksProvider>
		</CategoriesProvider>
  )
}

export default App
