/*jshint multistr:true */
var text = "hello Matthew with Matthew";
var myName = "Matthew";
var hits = [];

for (var i = 0; i < text.length; i++){
    if (text[i] === myName[0]){
        for (var k = i; k < myName.length + i; k++){
            if(text[k] === myName[k-i]) {
                hits.push(text[k]);   
            }
        }
    }
}

if (hits.length === 0){
    console.log("Your name wasn't found!");   
} else{
    console.log(hits);   
}
