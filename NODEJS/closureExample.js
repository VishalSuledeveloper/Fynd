function outerScope(){
    const result=[];
    function innerScope(){
        for(let i=0;i<5;i++){
            //this is just storing the excecution of the inner function
            result[i] = (function inner(x){
                //additional enclosing context
                return function(){
                    console.log(x);
                };

            })(i);
        }
    }
    innerScope();
    for (let i=0;i<5;i++){
        result[i]();
    }
}
outerScope();