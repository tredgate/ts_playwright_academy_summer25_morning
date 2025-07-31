// src/learning/objects

import { User } from "./user.ts";

// users_management.ts
const adminUser = new User("admin", "admin", 32, "petr@test.cz");

console.log(adminUser.getUsername());
adminUser.logUser();
adminUser.setAge(55);
adminUser.logUser();
console.log(adminUser.getEmail());
// ! Nelze, logDivider je private
// adminUser.logDivider();
