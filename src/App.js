import React, {useState} from 'react';
import './App.css';
import Products from './components/Products';

const title = 'LWTH Inventory Management';

function App({products}) {
	let [sortBy, setSortBy] = useState('quantity');

	function sortFunc(a, b) {
		if (a[sortBy] < b[sortBy]) return -1;
		if (b[sortBy] < a[sortBy]) return 1;
		else return 0;
	}

	let [data, setProduct] = useState(products.sort(sortFunc));

	function sortByQuantity() {
		setSortBy('quantity');
		setProduct(data.sort(sortFunc));
	}

	function sortByLastPurchaseDate() {
		setSortBy('lastPurchaseDate');
		setProduct(data.sort(sortFunc));
	}

	return (
		<div className="App">
			<header className="App-header">{title}</header>
			<div className="">
				<label className="">Sort By</label>
				<button
					data-testid="least-in-stock-link"
					className="small"
					onClick={sortByQuantity}
				>
					Least in Stock
				</button>
				<button
					data-testid="last-purchase-date-link"
					className="small"
					onClick={sortByLastPurchaseDate}
				>
					Last Purchase Date
				</button>
			</div>
			<div className="App-form">
				<Products products={products} />
			</div>
		</div>
	);
}

export default App;
