const e = 10;
function sum(a) {
  return function sum2(b) {
    return function sum3(c) {
      // outer functions scope
      return function sum4(d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

const sum2 = sum(1);
const sum3 = sum2(2);
const sum4 = sum3(3);
const result = sum4(4);


function add(x){
    return (y)=>{
        if( y)  {
            return add(x+y)
        }
        return x;


    }
}

console.log(add(2)(3)(4)(5)(6)(7)(8)())