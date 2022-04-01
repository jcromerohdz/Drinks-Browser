import { Container } from "react-bootstrap"
import DrinkForm from "./components/DrinkForm"

function App() {

  return (
		<>
			<header className="py-5">
				<h1>Drinks Browser</h1>
			</header>

			<Container className='mt-5'>
				<DrinkForm />
			</Container>
		</>
  )
}

export default App
