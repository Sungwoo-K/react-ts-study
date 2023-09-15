export function greet(name: string) {
  return `Hello, ${name}`;
}

interface Person {
  name: string;
  age: number;
}

interface User extends Person {
  nickname: string;
  printInfo: () => void;
}

const user: User = {
  name: "Alice",
  age: 30,
  nickname: "Jam",
  printInfo: () => {
    console.log(user.nickname);
  },
};

function identity<T>(arg: T): T {
  return arg;
}

const result1 = identity<string>(user.name);
const result2 = identity<number>(user.age);
const result3 = identity(user);
