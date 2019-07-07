//////////////////////////////////////////////////////////////////////////////////////////
// author: roland nyamoga                                                               //
// description: function that tests if different objects are equal.                     //
// comments: I realized that JS is forcing me to dig down into objects until I get to   //
// the attributes, so I decided to make the function  recursive for objects.            //
//////////////////////////////////////////////////////////////////////////////////////////

function deepEqual(a, b)
{
    if ((a == null) || (b == null)) {
        return "Error. Cannot compare null objects."          
    }
    else if (((typeof(a) == "object" ) && (typeof(b) == "object") && 
        (Object.keys(a).length) == (Object.keys(b).length))) {

            for (let i = 0; i < Object.keys(a).length; i++) {
                var key = Object.keys(a)[i]

                a = a[key]
                b = b[key]

                return deepEqual(a, b)
            }                    
    }
    return a === b
}

///////////////
//  Testing //
//////////////

console.log(deepEqual("rola", 1)) //false
console.log(deepEqual("rola", "rola")) //true
console.log(deepEqual(1, 1)) //true
console.log(deepEqual(1, 2)) //false
console.log(deepEqual({class: 2019, year: 2000}, {class: 2019, year: 2000})) //true
console.log(deepEqual({year: 2000, class: 2019}, {class: 2019, year: 2000})) //true
console.log(deepEqual({class: 2019, year: 2000}, {year: 2000, class: 2019})) //true
console.log(deepEqual({class: 2019, year: 2000}, {class: 2019, year: 2000})) //true
console.log(deepEqual({class: 2019, year: 2000, money: "no"}, {class: 2019, year: 2000}))//false
console.log(deepEqual({class: 2019, year: 2000}, {class: 2019, year: 2000, classe: 2019}))//false
console.log(deepEqual(null, {class: 2019, year: 2000, classe: 2019}))//false

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
