
import { User } from "./User";

export interface Game {

    gameID: string;
    game: string;
    gameName: string;
    GM: User;
    assistantGM?: User[];
    players: User[];

}
