type UserData<T> = {
  name: string;
  userKey: T;
};

const UserA: UserData<string> = {
  name: "User A",
  userKey: "123",
};
const UserB: UserData<number> = {
  name: "User A",
  userKey: 123,
};
const UserC: UserData<boolean> = {
  name: "User A",
  userKey: true,
};
const UserD: UserData<[string, number]> = {
  name: "User A",
  userKey: ["123", 123],
};
