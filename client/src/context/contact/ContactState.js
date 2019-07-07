import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Tekashi 6ix9ine',
        email: 'scum@gang.com',
        phone: '027-696-6969',
        type: 'personal'
      },
      {
        id: 2,
        name: 'El Gato',
        email: 'human@glacier.com',
        phone: '027-123-4567',
        type: 'personal'
      },
      {
        id: 3,
        name: 'Yung Gud',
        email: 'god@god.god',
        phone: '022-987-6543',
        type: 'professional'
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // add contact

  // delete contact

  // set current contact

  // clear current contact

  // update contact

  // filter contacts

  // clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;