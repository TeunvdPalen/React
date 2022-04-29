import Nav from './Nav';

function Header() {
	return (
		<div className='bg-gray-800 text-white'>
			<div className="container mx-auto  relative grid grid-cols-4 gap-4 items-center">
					<h1 className='text-6xl font-bold mr-4 py-5'>Frituur</h1>
					<Nav />
					<div className='text-right'>
					<button className="text-gray-300 bg-gray-700 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-2xl font-medium mx-4">Winkelwagen (x)</button>
					</div>
			</div>
		</div>
	)
}

export default Header