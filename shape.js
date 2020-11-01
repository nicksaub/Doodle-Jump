class Shape {
    constructor(squares) {
        this.squares = squares;

        this.redraw = function() {
            this.squares.forEach(square => {
                square.remove();
                square.render();
            })
        }

        this.remove = function() {
            this.squares.forEach(square => {
                square.remove();
            })
        }

        this.drop = function() {
            this.squares.forEach(square => {
                square.remove();
                square.j = square.j - 1;
                square.render(square.i, square.j);
            })
        }
    }
}