// let duplicate = (input_array) => {
// 	let duplicate_elements = []
// 	for (num in input_array) {
// 		for (num2 in input_array) {
// 			if (num === num2) {
// 				continue;
// 			}
// 			else {
// 				if (input_array[num] === input_array[num2]) {
// 					duplicate_elements.push(input_array[num]);
// 				}
// 			}
// 		}
// 	}
// 	return [...new Set(duplicate_elements)];
// }
// var Students = [3,9,18,3,28,6,17,9,3]
// console.log(duplicate(Students));

function generatePyramid() {
    var totalNumberofRows = 1;
    var output = '';
    for (var i = 1; i <= totalNumberofRows; i++) {
        for (var j = 1; j <= i; j++) {
            output += j + '  ';
        }
        console.log(output);
        output = '';
    }
}

generatePyramid();