function Header({bandname}, {bandinfo}) {
	return (
		<div>
			<h1>{bandname}</h1>
			<p>
				{bandinfo}
			</p>
		</div>
	)
}

export default Header