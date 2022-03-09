import Header from './Header'
import Album from './Album'


function Discography() {
	const discography = [
			{
				title: 'Killing with a smile',
				synopsis: 'Killing with a Smile is het debuutalbum van de Australische metalcore band Parkway Drive.',
				songs: ['Gimme AD', 'Anasasis', 'Pandora', 'Romance is dead']
			},
			{
				title: 'Horizons',
				synopsis: 'Horizons is het tweede studioalbum van de Australische metalcore band Parkway Drive.',
				songs: ['Begin', 'The siren song', 'Feed them to the pigs', 'Carrion', 'Five months']
			},
			{
				title: 'Deep blue',
				synopsis: 'Deep Blue is het derde studioalbum van de Australische metalcore band Parkway Drive.',
				songs: ['Samsara', 'Unrest', 'Sleepwalker', 'Wreckage']
			}
		]

	return (
		<div>
			<Header />
			{discography.map(album => <Album album={album} />)}
		</div>
	)
}

export default Discography