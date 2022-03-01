import React, {useState} from 'react';

function Products({products}) {
	console.log({products});
	const [items, setItems] = useState([
		{
			itemName: 'cold cup',
			size: 'medium',
			quantity: 100,
			lastPurchaseDate: '2022/02/21',
		},
		{
			itemName: 'cold cup',
			size: 'large',
			quantityt: 80,
			lastPurchaseDate: '2021/02/21',
		},
		{
			itemName: 'hot cup',
			size: 'medium',
			quantity: 50,
			lastPurchaseDate: '2021/12/11',
		},
		{
			itemName: 'hot cup',
			size: 'large',
			quantity: 30,
			lastPurchaseDate: '2021/09/03',
		},
	]);

	const handleQuantityIncrease = (item) => {
		item.quantity++;
	};

	return (
		<div className="card w-50 mx-auto">
			<table>
				<thead>
					<tr>
						<th>Last Purchase Date</th>
						<th>Item Name</th>
						<th>Size</th>
						<th>Quantity</th>
					</tr>
				</thead>
				<tbody>
					{products.map((item, idx) => (
						<tr data-testid="product" key="product-index">
							<td data-testid="product-Last-Purchase-Date">
								{item.lastPurchaseDate}
							</td>
							<td data-testid="product-name">{item.item}</td>
							<td data-testid="product-size">{item.size}</td>
							<td data-testid="product-quantityt">{item.quantity}</td>
							<button
								onClick={(item) => {
									handleQuantityIncrease(item);
								}}
							>
								+
							</button>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default Products;
