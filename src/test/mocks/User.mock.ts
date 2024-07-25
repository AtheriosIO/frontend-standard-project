import { faker } from "@faker-js/faker";
import { User } from "../../dto/User.dto";

export class UserMock extends User {
  id = faker.string.uuid();
  firstName = faker.person.firstName();
  lastName = faker.person.lastName();
  birthDate = faker.date.birthdate().toISOString();
  gender = faker.person.gender();
  email = faker.internet.email({ firstName: this.firstName, lastName: this.lastName });
}