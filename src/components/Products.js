import React from 'react';

function Products({products}) {
	return (
		<div className="card w-50 mx-auto">
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Size</th>
						<th>Count</th>
					</tr>
				</thead>
				<tbody>
					{products.map((item, idx) => (
						<tr data-testid="product" key="product-index">
							<td data-testid="product-name">{item.name}</td>
							<td data-testid="product-size">{item.size}</td>
							<td data-testid="product-count">{item.count}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default Products;
