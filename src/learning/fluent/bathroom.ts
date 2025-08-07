import { EntryHall } from "./entry_hall.ts";

export class Bathroom {
  readonly name: string;

  constructor(name: string) {
    this.name = name;
    console.log(`Návštěvník ${name} vstoupil na toaletu`);
  }

  // ? Nemusíme definovat typovou anotaci (: EntryHall), určí se implicitně, ale je doporučené ji používat kvůli větší bezpečnosti - například udělám chybu při změnách
  returnToEntryHall() {
    console.log(`${this.name} se vrací do vstupní haly`);
    return new EntryHall(this.name);
  }

  washHands(): this {
    console.log(`${this.name} si umyl/a ruce`);
    return this;
  }
}
