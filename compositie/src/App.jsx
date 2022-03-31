import React, { Component } from 'react';
import Alert from './Alert';
import FancyBorder from './FancyBorder';
import SplitPane from './SplitPane';
import SuccessAlert from './SuccessAlert';

class App extends Component {
	state = {  }
	render() { 
		return ( 
			<div>

				<SplitPane left="Links" right="Rechts" />

				<SplitPane 
					left={<div>
						<SuccessAlert>
							Het toevoegen is gelukt
						</SuccessAlert>
						<Alert callout="Watch it!">
						This is an alert from React
						</Alert>
						<Alert callout="Completed!!!" type="success">
							The item was added to the database
						</Alert>
						
						<FancyBorder title="Mijn titel">
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolorum autem consectetur sapiente. Quasi praesentium quidem dolorum omnis sunt, voluptatem consequuntur, in minus laudantium debitis veniam enim animi fugiat. Necessitatibus odio commodi neque saepe quas exercitationem voluptas impedit in explicabo, a repellendus cum excepturi quasi porro, ab incidunt esse repudiandae?</p>
							<p>Quia ipsam quaerat fugit cumque perspiciatis quidem aut in, nisi vero et dicta obcaecati officia! Eius voluptatem repellendus eos doloribus hic odio impedit error laboriosam? Eaque fuga magnam vel aut, autem ea. Provident, dolor delectus unde explicabo quisquam vitae dolore iste in ab sed. Maxime tempore amet tempora eos tenetur.</p>
							<p>Perferendis, aliquid? Nam voluptates minus molestiae eveniet esse perferendis ut asperiores harum exercitationem voluptatem fuga obcaecati cumque voluptatum praesentium dignissimos magnam quis quod ipsum explicabo, ad consequuntur quo dolores sequi vitae! Reprehenderit aliquam consequuntur quo placeat accusantium nisi mollitia, ad perferendis, quam officiis dignissimos, veritatis ea inventore voluptatem non possimus!</p>
							<p>Nesciunt, quam molestias laboriosam sapiente ab rem aliquam velit explicabo facilis culpa, esse sit exercitationem aut! Accusantium maxime, consequatur harum maiores nemo voluptates porro repellendus nam debitis vel ullam enim dolorum, deserunt reprehenderit magni voluptatem perspiciatis quaerat et ex, laboriosam laudantium odit nobis aperiam. Rem voluptas doloremque tempora vero quidem?</p>
							<p>Expedita, nemo ratione consectetur ea mollitia dolor odio quia neque quod unde nam explicabo eius voluptatibus rerum sint corporis molestiae beatae aliquam sit eos ut reprehenderit sunt pariatur! Vitae, voluptatibus tempora libero quidem repellat mollitia illum et dolor cumque aliquam molestias animi, aliquid sunt officiis quisquam sed molestiae! Nesciunt, voluptas?</p>
						</FancyBorder>
						</div>} 
					right={<div>
						<Alert callout="DANGER!!!" type="danger">
							Risk detected leave the internet
						</Alert>

						<h2>Nog een</h2>
						<FancyBorder title="Mijn lijst">
						<ul>
								<li>Lorem ipsum dolor sit amet.</li>
								<li>Quas quidem possimus esse dolores.</li>
								<li>Pariatur magnam amet doloremque quos?</li>
								<li>Ad, sint. Nobis, nemo quasi?</li>
								<li>Eos laboriosam officia aspernatur possimus!</li>
							</ul>
						</FancyBorder>
					</div>}
				/>
				
			</div>
		);
	}
}

export default App;