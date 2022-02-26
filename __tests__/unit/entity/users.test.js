import { expect, describe, test, jest, beforeEach } from "@jest/globals";
import { randomUUID as uuid } from "crypto";
import User from "../../../src/entity/User";
import Users from "../../../src/entity/Users";
describe("#UsersEntity UnitTesting", () => {
  it("should add a new user to the data structure", () => {
    const mockUser = { id: uuid() };
    const users = new Users();

    users.add(mockUser);

    expect(users).toBeDefined();
    expect(users.hasUsers()).toBeTruthy();
  });

  it("should add users & iterate over the data structure", () => {
    const mockedUsers = Array.from({ length: 10 }, () => ({ id: uuid() }));
    const users = new Users();

    mockedUsers.forEach((user) => users.add(user));

    expect(users).toBeDefined();
    expect(users.hasUsers()).toBeTruthy();
    for (let kUser of users) {
      expect(kUser.id).toBeDefined();
    }
  });
});
