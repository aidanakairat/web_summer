function addChess() {
	// 
	var a = document.getElementById("rows").value;
	var b = document.getElementById("cols").value;
	// 
	// 
	var c = new Chess(a, b);
	c.render();
}

function Chess(rows, cols){
	this.rows = rows;
	this.cols = cols;

	this.render = function(){
		var body = document.getElementsByTagName("body")[0];
		var tbl = document.createElement("table");
		var tblBody = document.createElement("tbody");


		for (var i = 0; i < rows; i++) {
			var row = document.createElement("tr");

			for (var j = 0; j < cols; j++) {
				var cell = document.createElement("td");
				var cellText = document.createTextNode("");
				if ((i+j) % 2 == 1){
					cell.setAttribute("bgcolor", "black");
					cell.setAttribute("width", "50px");
					cell.setAttribute("height", "50px");
				}
				cell.appendChild(cellText);
				row.appendChild(cell);
			}

			tblBody.appendChild(row);
		}
		tbl.appendChild(tblBody);
		body.appendChild(tbl);
		
	}
}
