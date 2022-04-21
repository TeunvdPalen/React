import {connect} from 'react-redux'

function LengthDisplay({length}) {
	return <p>De lengte is ingesteld op {length}</p>
}

const mapStateToProps = state => {
	return {
		length: state.length
	}
}

export default connect(mapStateToProps, null)(LengthDisplay);