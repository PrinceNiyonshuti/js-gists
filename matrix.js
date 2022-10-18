/** @format */

function multiply(a, b) {
	var aNumRows = a.length,
		aNumCols = a[0].length,
		bNumRows = b.length,
		bNumCols = b[0].length,
		m = new Array(aNumRows); 
	for (var r = 0; r < aNumRows; ++r) {
		m[r] = new Array(bNumCols); 
		for (var c = 0; c < bNumCols; ++c) {
			m[r][c] = 0; 
			for (var i = 0; i < aNumCols; ++i) {
				m[r][c] += a[r][i] * b[i][c];
			}
		}
	}
	return m;
}

function display(m) {
	for (var r = 0; r < m.length; ++r) {
		console.log("" + m[r].join(" ") + "");
	}
}

var a = [
		[5, 3, 2],
		[4, 8, 6],
		[1, 4, 6],
	],
	b = [
		[8, 6, 5],
		[5, 3, 1],
		[9, 3, 7],
	];
console.log("matrix a:");
display(a);
console.log("matrix b:");
display(b);
console.log("The product of a * b is:");
display(multiply(a, b));
