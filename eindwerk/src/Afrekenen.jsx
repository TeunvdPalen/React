import Cart from './Cart';
import { useState } from 'react';
import { connect } from 'react-redux';

function Afrekenen({ cartLength }) {
	const [naam, setNaam] = useState('');
	const [email, setEmail] = useState('');
	const [tel, setTel] = useState('');

	return (
		<div className='container mx-auto my-8'>
			<section className='my-4'>
				<h1 className='text-4xl font-bold'>Afrekenen</h1>
				{cartLength ? <Cart /> : <p className='text-xl text-red-600 mt-4'>Er zijn nog geen producten in jouw bestelling</p>}
			</section>
			<section className='my-4'>
				<h1 className='text-4xl font-bold py-4'>Jouw gegevens</h1>
				<div className='grid grid-cols-2'>
					<div className='col-span-1'>
						Naam:{' '}
						<input
							type='text'
							placeholder='Vul hier je naam in'
							value={naam}
							onChange={e => setNaam(e.target.value)}
							className='placeholder:italic placeholder:text-slate-400 block bg-white w-2/5 border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-orange-400 focus:ring-orange-400 focus:ring-1 sm:text-sm'
						/>
						Email:{' '}
						<input
							type='email'
							placeholder='Vul hier je emailadres'
							value={email}
							onChange={e => setEmail(e.target.value)}
							className='placeholder:italic placeholder:text-slate-400 block bg-white w-2/5 border border-slate-300 rounded-md py-2 pl-3 shadow-sm focus:outline-none focus:border-orange-400 focus:ring-orange-400 focus:ring-1 sm:text-sm'
						/>
						Tel:{' '}
						<input
							type='text'
							placeholder='Vul hier je telefoonnummer in'
							value={tel}
							onChange={e => setTel(e.target.value)}
							className='placeholder:italic placeholder:text-slate-400 block bg-white w-2/5 border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-orange-400 focus:ring-orange-400 focus:ring-1 sm:text-sm'
						/>
					</div>
					<div className='col-span-1'>
						<p className='text-2xl font-semibold'>Naam: {naam}</p>
						<p className='text-2xl font-semibold'>Email: {email}</p>
						<p className='text-2xl font-semibold'>Telefoon: {tel}</p>
					</div>
				</div>
			</section>
		</div>
	);
}

const mapStateToProps = state => {
	return {
		cartLength: state.cart.length,
	};
};

export default connect(mapStateToProps, null)(Afrekenen);
