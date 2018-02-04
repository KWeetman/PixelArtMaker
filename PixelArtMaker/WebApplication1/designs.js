// When size is submitted by the user, call makeGrid()
var cols, rows;

$(document).ready(function () {
    $("#mySubmit").on('click', function (event) {
        console.log("Getting input dimensions");
        GetGridInputDimensions();
        console.log("creating grid");
        makeGrid();
    });
});

$("pixelCanvas").on('click', 'td', function () {
    var color = $("#colorPicker").val();
    $(this).css('background-color', color);
});

//Gets the row and col selection from the webpage.
function GetGridInputDimensions() {
    cols = $('#inputHeight').val();
    rows = $('#inputWidth').val();
}

function makeGrid() {
    console.log(rows, cols);
    //Creates a Table object from the Table "PixelCanvas" element ID.
    var table = document.getElementById("pixelCanvas");
    //Declares an iterator called Row which is indexed to 0. It then iterates till row is not less than rows.
    for (var row = 0; row < rows; ++row) {
        // Crates a row element variable which will hold the return value of the InsertRow function.
        var rowElement = table.insertRow(row);
        // Not too sure what this does!?
        rowElement.setAttribute("class", "row");
        //Same as the above information about the row loop.
        for (var col = 0; col < cols; ++col) {
            //Same as the row element declaration above but now for the cell of the row.
            var cell = rowElement.insertCell(col);
            // Adds an event listener to every cell in the row. This event listener changes the cells background colour on click.
            cell.addEventListener('click', function () {
                event.target.style.backgroundColor = document.getElementById("colorPicker").value;
            });
        };
    }
}
