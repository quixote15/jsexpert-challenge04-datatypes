import { expect, describe, test, jest, beforeEach } from "@jest/globals";
import User from "../../../src/entity/User";
describe("#UserEntity UnitTesting", () => {
  it("should instantiate a user entity & display correct string representation", () => {
    const mockUser = { id: "some-id" };
    const user = new User(mockUser);

    console.log(user);
    expect(user).toBeDefined();
    expect(user.id).toStrictEqual(mockUser.id);
    expect(user.toString()).toStrictEqual(`[id=${mockUser.id}]`);
  });
});
