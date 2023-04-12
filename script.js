function fibonacci(num) {
// your code here
	if(num==0)
		return 0;
	if(num==1)
		return 1;
	return fibonacci(num)+fibonacci(num-1);
}

module.exports = fibonacci;
