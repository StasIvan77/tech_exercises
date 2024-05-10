import { Injectable } from '@angular/core';
import { Contact } from '../shared/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[] = [
    { id: '1', firstName: 'John', lastName: 'Doe', phoneNumber: '1234567890', email: 'john@example.com', birthDate: '1990-01-01', address: '123 Main St' },
    { id: '2', firstName: 'Jane', lastName: 'Doe', phoneNumber: '0987654321', email: 'jane@example.com', birthDate: '1995-02-02', address: '456 Elm St' },
    { id: '3', firstName: 'Alice', lastName: 'Smith', phoneNumber: '9876543210', email: 'alice@example.com', birthDate: '1985-03-03', address: '789 Oak St' },
    { id: '4', firstName: 'Bob', lastName: 'Johnson', phoneNumber: '0123456789', email: 'bob@example.com', birthDate: '1980-04-04', address: '321 Pine St' }
  ];

  constructor() { }

  getAllContacts(): Contact[] {
    return this.contacts;
  }

  getContactById(id: string): Contact | undefined {  
    console.log("id in service:", id);    
    return this.contacts.find(contact => contact.id === id);
  }

  addContact(contact: Contact): void {
    this.contacts.push(contact);
  }

  deleteContact(id: string): void {
    this.contacts = this.contacts.filter(contact => contact.id !== id);
  }
}
