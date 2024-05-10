import {Contacts} from '../dao/factory.js'

import ContactRepository from './Contact.repository.js'

export const contactService = new ContactRepository(new Contacts())