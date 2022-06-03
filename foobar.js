function countEm(n){
    let result = '';
    for(let i = 1; i<=n; i++){
        if(i%3 === 0 && i%5 === 0){ 
            result += ' FooBar'
        }
        else if(i%3 === 0){ 
            result += ' Foo'
       }
       else if(i%5 === 0 ){
            result += ' Bar';
       }else{
            result +=  ' '+i.toString();
       }
    }
    return result;
}

console.log(countEm(100));

module.exports = countEm;



