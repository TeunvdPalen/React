import WeightDisplay from "./WeightDisplay";
import {connect} from 'react-redux'

function  WeightsList({weights}){
	return <ul>
		{weights.map((item, itemIndex) => <WeightDisplay key={itemIndex} weight={item} index={itemIndex} />)}
	</ul>
}

const mapStateToProps = state => {
	return {
		weights: state.weights
	}
}

export default connect(mapStateToProps, null)(WeightsList)