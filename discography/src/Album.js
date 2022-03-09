
import Songlist from "./Songlist"

function Album({album}) {
	return (
		<div>
			<h1>{album.title}</h1>
			<p>{album.synopsis}</p>
			<Songlist songs={album.songs} />
		</div>
	)
}

export default Album