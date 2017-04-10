import React from 'react';
import update from 'react-addons-update';
import ContactInfo from './ContactInfo';
import ContactCreator from './ContactCreator';
class Contacts extends React.Component {

  insertContact(name, phone) {
    let newState = update(this.state, {
      contactData: {
        $push: [{"name": name, "phone": phone}]
      }
    });
    this.setState(newState);
  }
  render(){
    <div>
      <h1>Contacts</h1>
      <ul>
        {this.state.contactData.map((contact, i) => {
          return (<ContactInfo name={contact.name}
                               phone={contact.phone}
                               key={i}/>);
        })}
      </ul>
      <ContactCreator onInsert={this.insertContact.bind(this)}/>
    </div>
  }
}
