import { Game } from "./Game";

export interface User {

    userID: string;
    nameFirst: string;
    nameLast: string;
    username: string;
    screenName: string;
    email: string;
    games?: [Game["gameID"]];
}