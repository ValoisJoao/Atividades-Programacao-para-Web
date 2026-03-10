function verficarNumeroPrimo(n){
    if(n<=1){
        return false;
    }
    for(let i = 2; i<n;i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}
console.log(`O número 0 é primo = ${verficarNumeroPrimo(0)}`);
console.log(`O número 1 é primo = ${verficarNumeroPrimo(1)}`);
console.log(`O número 2 é primo = ${verficarNumeroPrimo(2)}`);
console.log(`O número 3 é primo = ${verficarNumeroPrimo(3)}`);
console.log(`O número 7 é primo = ${verficarNumeroPrimo(7)}`);
console.log(`O número 83 é primo = ${verficarNumeroPrimo(83)}`);
console.log(`O número 100 é primo = ${verficarNumeroPrimo(100)}`);
console.log(`O número 991 é primo = ${verficarNumeroPrimo(991)}`);
console.log(`O número 104729 é primo = ${verficarNumeroPrimo(104729)}`);
console.log(`O número 14348907 é primo  = ${verficarNumeroPrimo(14348907)}`);