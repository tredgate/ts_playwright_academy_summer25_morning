import { Bathroom } from "./bathroom.ts";
import { SecondFloor } from "./second_floor.ts";

export class EntryHall {
  readonly name: string;

  constructor(name: string) {
    this.name = name;
    console.log(`Návštěvník ${name} vstoupil do vstupní haly`);
  }

  entryBathroom(): Bathroom {
    console.log(`${this.name} jde na toaletu`);
    return new Bathroom(this.name);
  }

  askReceptionistQuestion(question: string): this {
    console.log(`${this.name} se ptá recepční na otázku: ${question}`);
    console.log(`Recepční mlčí`);
    return this;
  }

  async takeElevatorToSecondFloor(): Promise<SecondFloor> {
    console.log(`Uživatel ${this.name} si volá výtah do 2. patra.`);
    const waitingForElevatorMs = 2000;
    await new Promise((resolve) => setTimeout(resolve, waitingForElevatorMs));
    console.log(`Výtah přijel do vstupní haly.`);
    console.log(`Výtah dorazil, uživatel ${this.name} nastupuje.`);
    const elevatorRideMs = 2000;
    await new Promise((resolve) => setTimeout(resolve, elevatorRideMs));
    console.log(`Uživatel ${this.name} vystupuje z výtahu v 2. patře.`);
    return new SecondFloor(this.name);
  }
}
