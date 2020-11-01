class Square {
    constructor(i,j) {
      this.i=i;
      this.j=j;
      this.left = null;
      this.bottom = null;
      this.visual = null;

      this.render = function(i, j) {
        this.left = i * 20
        this.bottom = j * 20;
        this.visual = document.createElement('div')

        const visual = this.visual
        visual.classList.add('square')
        visual.style.left = this.left + 'px'
        visual.style.bottom = this.bottom + 'px'
        document.querySelector('.grid').appendChild(visual)
      }

      this.remove = function() {
        this.visual.remove();
      }

      this.render(i,j);
    }

}