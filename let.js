// if (true){let a = 1;} // SyntaxError: Lexical declaration cannot appear in a single-statement context


function abc(){
    console.log(x); // reference error

    let x=10;
    
}
abc()



function foo(a) {
    let a = 1; // SyntaxError: Identifier 'a' has already been declared
    console.log(a);
    
    try {                                                                                                                                                                                             
    } catch (e) {
        
    }
} 
foo(4)


function test() {
    var foo = 33;
    if (foo) {

      let foo = foo + 55; // ReferenceError
    }
}
test();

 /*  
    TDZ & Shadowing
    Inside the if block, you declare a new let foo.

    Because of lexical scoping and hoisting, this new foo shadows the outer var foo.

    This new foo is hoisted to the top of the block but is in the Temporal Dead Zone (TDZ) until its declaration is reached.
*/



