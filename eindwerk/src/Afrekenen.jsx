import CartPopupItem from "./CartPopupItem"

function Afrekenen() {
	return (
		<div className="container mx-auto my-8">
			<h1 className="text-4xl font-bold" >Afrekenen</h1>
			<table className="table-fixed border-collapse	">
					<tr>
						<th>Naam</th>
						<th>Aantal</th>
						<th>Totaal</th>
						<th></th>
					</tr>
					<CartPopupItem />
				</table>
		</div>
	)
}

export default Afrekenen