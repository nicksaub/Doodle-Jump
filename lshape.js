class LShape extends Shape{
    constructor(i,j) {
        super([new Square(i,j-2), new Square(i,j-1), new Square(i,j), new Square(i+1,j)]);
        this.position = 0;
        this.i = i;
        this.j = j;

        this.rotate = function(position) {
            if(position == 0) {
                this.squares[0].remove();
                this.squares[0].j = j;
                this.squares[0].i = i-2;
                this.squares[0].render(this.squares[0].i, this.squares[0].j);
                this.squares[1].remove();
                this.squares[1].j = j;
                this.squares[1].i = i-1;
                this.squares[1].render(this.squares[1].i, this.squares[1].j);
                this.squares[3].remove();
                this.squares[3].j = j-1;
                this.squares[3].i = i;
                this.squares[3].render(this.squares[3].i, this.squares[3].j);
            }
        }
    }
}