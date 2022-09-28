import './App.css';
import { BrowserRouter as Router} from "react-router-dom";
import Navbar from './components/Navbar';
import Routing from './components/Routing';

function App() {

	return (
		<Router>
			<Navbar />
			<div className='grid'>
				<Routing />
			</div>
		</Router>
  );
}

export default App;
