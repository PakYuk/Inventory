import React from 'react';

function Products({products}) {
	return (
		<div className="card w-50 mx-auto">
			<table>
				<thead>
					<tr>
						<th>Last Purchase Date</th>
						<th>Item Name</th>
						<th>Size</th>
						<th>Count</th>
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
							<td data-testid="product-count">{item.count}</td>
							<button> + </button>
							<button> - </button>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default Products;
