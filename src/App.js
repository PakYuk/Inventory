import logo from './logo.svg';
import './App.css';
import Products from './components/Products';

function App({products}) {
	return (
		<div className="App">
			<header className="App-header">
				<p>LWTH Inventory Management</p>
			</header>
			<div className="App-form">
				<Products products={products} />
			</div>
		</div>
	);
}

export default App;
