import './App.css';
import { BrowserRouter} from "react-router-dom";
import Navbar from './components/Navbar';
import Routing from './components/Routing';

function App() {

	return (
	<BrowserRouter>
		<Navbar />
		<div className='grid'>
			<Routing />
		</div>
	</BrowserRouter>
  );
}

export default App;
