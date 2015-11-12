function repeatify(string, times){
    complete_string="";
    var i=0;
    while (i < times){
        complete_string += string;
        i = i + 1;
    }
    return complete_string
}

console.log(repeatify("bonjour", 3));
