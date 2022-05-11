/**
  * @desc create a grid of squares for user to click and create art
  * @param int GridWidth - number of squares representing the width of the grid
  * @param int GridHeight - number of squares representing the height of the grid
*/
function makeGrid() {
    const GridHeight = document.querySelector('#inputHeight').value;
    const GridWidth = document.querySelector('#inputWidth').value;
    const GridMaker = document.querySelector('#pixelCanvas');
    GridMaker.innerHTML = "";
    for (let hight = 0; hight < GridHeight; hight++) {
        const row = GridMaker.insertRow(-1);
        for (let width = 0; width < GridWidth; width++) {
            const cell = row.insertCell(-1);
            cell.addEventListener('mousedown', function () {
                const color = document.getElementById('colorPicker').value;
                this.style.backgroundColor = color;
            })


        }
    }
}
const sizePicker = document.querySelector('#sizePicker');
// call makeGrid() when size is submitted
sizePicker.addEventListener('submit', function (event) {
    event.preventDefault();
    makeGrid();

});
