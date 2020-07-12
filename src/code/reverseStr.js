// 按单个单词反转字符串

// const reverseDtr = str => {
// 	return str
// 		.split(" ")
// 		.map(_ => _.split("").reverse().join(""))
// 		.join(" ");
// };

const reverseDtr = str => {
	return str
		.match(/[\w']+/g)
		.map(_ => _.split("").reverse().join(""))
		.join(" ");
};

module.exports = reverseDtr;
