function Songlist(songs) {
	return (
		<div>
			<ul>
				{songs.songs.map(song => <li>{song}</li>)}
			</ul>
		</div>
	)
}

export default Songlist