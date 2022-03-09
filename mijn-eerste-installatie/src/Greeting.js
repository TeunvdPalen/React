import User from "./User"
import Title from "./Title"

function Greeting() {
	return  <div>
	<Title title="Hello world!"/>
	<p>Welcome {User.name} to this website</p>
	</div>
}

export default Greeting