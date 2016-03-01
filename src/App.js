import React from 'react';
import ContactsList from './ContactsList';


let contacts = [{
	id: 1,
	name: 'First',
	phone: '1111111111111'
}, {
	id: 2,
	name: 'Second',
	phone: '2222222222222222'
},{
	id: 3,
	name: 'Third',
	phone: '33333333333'
},{
	id: 4,
	name: 'Forth',
	phone: '444444444'
}]

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Contacts List</h1>
				<ContactsList contacts={this.props.contacts} />
			</div>
		)
	}
}

React.render(<App contacts={contacts} />, document.getElementById('app'));