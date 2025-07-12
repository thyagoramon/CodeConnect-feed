import './order.css';

export default function Order() {
	return (
		<div className='order-container'>
			<a className='order--active' href="#">Recentes</a>
			<a className='order--disabled' href="#">Populares</a>
		</div>
	)
}