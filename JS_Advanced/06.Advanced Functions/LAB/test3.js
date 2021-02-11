
function funcA (paramA) {
	return {funcB};
	function funcB(n){
        console.log(n*paramA);

}
}

let test = funcA(6)
test.funcB(7)
funcA(6).funcB(9)