{
  // T extends 특정타입 : T 는 특정타입을 반드시 가져야 한다는 제약을 의미
  // 타입 제약 조건을 원시 타입으로 제약했을 때
  type UserData<T extends string | number> = {
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

  // 타입 제약 조건을 객체로 했을 때
  type HasLength = {
    length: number;
  };

  // length 속성을 갖는 객체만 매개변수로 받는 함수 정의
  function logLength<T extends HasLength>(item: T): void {
    console.log(item.length);
  }

  logLength("Hello, world!"); // 문자열은 length 속성을 가짐
  logLength([1, 2, 3, 4, 5]); // 배열은 length 속성을 가짐
  logLength({ length: 10, name: "Alice" }); // 객체는 length 속성을 가짐

  // logLength(123); // 오류: number 타입은 length 속성을 가지지 않음
}
