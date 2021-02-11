function solve() {
  let input = document.getElementById('text').value.toLowerCase();
  let conv = input.split(" ");
  let result = document.getElementById('result');
  
  let convention = document.getElementById('naming-convention').value
  
  if (convention != "Camel Case" && convention !="Pascal Case") {
    result.textContent = "Error!";
    return
  }
    conv = conv.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    conv = conv.join('');
  
  if (convention == "Camel Case") {
    conv = conv.charAt(0).toLowerCase()+conv.slice(1)
  }
  result.textContent = conv;
}
