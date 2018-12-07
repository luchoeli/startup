
import { Actor } from "./class-Actor";
import { Movie } from "./class-Movie";
import { EventEmitter } from "./class-EventEmitter";
import { Logger } from "./class-Logger";

const actors = [new Actor('Paul Winfield', 50), new Actor('Michael Biehn', 50), new Actor('Linda Hamilton', 50)];
const johnP = new Actor("John Perez", 32);
const peli = new Movie("titanic", 1997, "2:57:23");
let logger = new Logger();
peli.on('playMovie', logger.log);s
peli.offEvent("playMovie");
