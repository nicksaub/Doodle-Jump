document.addEventListener('DOMContentLoaded', () => {
    let xSize = 20;
    let ySize = 12;
    const grid = document.querySelector('.grid');
    let shapes = [];
    let activeShape;

    function control(e) {
        if(e.key === 'ArrowLeft') {
          activeShape.rotate(0);
        } else if (e.key === 'ArrowDown') {

        }
    }

    function start() {
        document.addEventListener('keyup', control);
        activeShape = new LShape(3, 25);

//        shape1.remove();
//        j = 1;
//        let timerId = setInterval(function () {
//            shape1.drop();
//            j++;
//            if(j == 5) {
//                clearInterval(timerId);
//            }
//        },100);
    }

    start()
})