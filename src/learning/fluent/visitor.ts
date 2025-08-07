import { EntryHall } from "./entry_hall.ts";

new EntryHall("Jan Novák")
  .entryBathroom()
  .returnToEntryHall()
  .entryBathroom()
  .returnToEntryHall()
  .entryBathroom()
  .returnToEntryHall()
  .askReceptionistQuestion("Jak se máte?")
  .askReceptionistQuestion("Proč mi neodpovídáte?")
  .entryBathroom()
  .washHands()
  .washHands()
  .washHands()
  .washHands()
  .returnToEntryHall();

async function main() {
  const marie = new EntryHall("Marie Dlouhá");
  await marie
    .takeElevatorToSecondFloor()
    .then((secondFloor) => secondFloor.lookAround(5))
    .then((secondFloor) => secondFloor.returnToEntryHallByElevator())
    .then((entryHall) => entryHall.askReceptionistQuestion("Funguje výtah?"));
}

main();
