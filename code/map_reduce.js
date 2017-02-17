//请把用户输入的不规范的英文名字，变为首字母大写，其他小写的规范名字。输入：['adam', 'LISA', 'barT']，输出：['Adam', 'Lisa', 'Bart']。
function normalize(arr) {
const normal = str => {
	return Array.prototype.map.call(str, function(x,idx,arr) {
	console.log(idx);
	if(idx ==0 ){
	return x.toUpperCase();
	}else{
		return x.toLowerCase();
	}
}).join('');
}
return arr.map(normal);
}
