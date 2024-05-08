export default class ContactDTO {
  constructor(contact) {
    this.first_name = contact.first_name;
    this.last_name = contact.last_name;
    this.phone = contact.phone ? contact.phone.split("-").join(" ") : "";
  }
}
