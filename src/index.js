import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const PRODUCTS = [
	{
		item: 'cold cup',
		size: 'medium',
		count: 100,
		lastPurchaseDate: '2022/02/21',
	},
	{item: 'cold cup', size: 'large', count: 80, lastPurchaseDate: '2021/02/21'},
	{item: 'hot cup', size: 'medium', count: 50, lastPurchaseDate: '2021/12/11'},
	{item: 'hot cup', size: 'large', count: 30, lastPurchaseDate: '2021/09/03'},
];
ReactDOM.render(
	// <React.StrictMode>
	<App products={PRODUCTS} />,
	// </React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
