export class User {
  username: string;
  password: string;
  age: number;
  isActive = true; // ? Implicitně se přiřadí typ: boolean
  email: string;
  readonly role = "user";

  constructor(username: string, password: string, age: number, email: string) {
    this.username = username;
    this.password = password;
    this.age = age;
    this.email = email;
    console.log(
      `Vytvořen uživatel: ${this.username} ve věku ${this.age}, aktivován: ${this.isActive}`
    );
    this.logDivider();
  }

  private logDivider() {
    console.log("-------------");
  }

  getEmail(): string {
    return this.email;
  }

  getUsername(): string {
    return this.username;
  }

  logUser(): void {
    console.log(
      `Uživatel: ${this.username} ve věku ${this.age}, aktivován: ${this.isActive}`
    );
  }

  setAge(newAge: number): void {
    console.log(
      `Změna věku uživatele ${this.username} z ${this.age} na ${newAge}`
    );
    this.age = newAge;
  }
}
