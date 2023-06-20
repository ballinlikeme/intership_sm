export class UserDto {
  id;
  username;
  name;
  surname;

  constructor(model) {
    this.username = model.username;
    this.name = model.name;
    this.surname = model.surname;
    this.id = model.id;
    this.age = model.age;
  }
}
