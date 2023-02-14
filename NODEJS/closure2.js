//closure module
//var :global scope
//module:alert
//npm install alert
var alert=require('alert')
function init(){//functional-outer/parent
    var name="Chrome";//name is a local variable created by init
    function displayName(){//displayName() is the inner function, a closure
        alert(name);
    }
    displayName();
}
init();