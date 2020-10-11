import { Piece, Bishop, King, Queen } from "./Piece";

export default class Game {
    private pieces: Piece[] = Game.makePieces();
    
    private static makePieces() {
        return [
            new King('White', 'E', 1),
            new King('Black', 'E', 8),
            
            new Queen('White', 'D', 1),
            new Queen('Black', 'E', 8),

            new Bishop('White', 'C', 1),
            new Bishop('White', 'F', 1),
            new Bishop('Black', 'C', 8),
            new Bishop('Black', 'F', 8)
        ]
    }
}