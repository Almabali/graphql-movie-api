import { createCreateResolver } from "../GenericResolver/CreateResolver";
import { User } from "../../entity/User";
import { RegisterInput } from "./register/RegisterInput";

export const CreateUser = createCreateResolver(
    "User",
    User,
    RegisterInput,
    User
);
