{
  // 1. object literal
  const user: { id: number; name: string; email: string } = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
  };

  // 2. type alias
  type User = {
    id: number;
    name: string;
    email: string;
  };

  const user2: User = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
  };

  // 3. interface
  interface User2 {
    id: number;
    name: string;
    email: string;
  }

  const user3: User2 = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
  };

  // 4. index signature
  type User3 = {
    id: number;
    name: string;
    email: string;
  };
  type UserRecord = {
    [key: string]: User3;
  };

  const users: UserRecord = {
    admin: { id: 1, name: "Alice", email: "alice@example.com" },
    user: { id: 2, name: "Bob", email: "bob@example.com" },
    guest: { id: 3, name: "James", email: "james@example.com" },
  };
}
