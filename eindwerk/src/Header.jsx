import Nav from './Nav';

function Header() {
	return (
		<div className='bg-gray-800 text-white'>
			<div className="container mx-auto  relative flex items-center justify-items-start">
					<h1 className='text-6xl font-bold mr-4 py-5'>Frituur</h1>
					<Nav />
					<button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Winkelwagen (x)</button>
			</div>
		</div>
	)
}

export default Header