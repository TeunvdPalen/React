import React from "react";

function Item({naam, prijs, saus, index}) {
	return (
		<div>
			<h2>{naam}</h2>
			<p>{prijs}</p>
		</div>
	)
}

export default Item