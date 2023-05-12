

function stringHandsOn(){
    var string1 = "  Hey you are doing good, keep it up   ";
    console.log("String :", string1);
    console.log("Length of the string :", string1.length);
    var trimmedString = string1.trim();
    console.log("Trimmed string :", trimmedString, ", Length of trimmed string :",trimmedString.length);
    console.log("Total spaces trimmed :", string1.length - trimmedString.length);
    console.log("First Character in trimmed string:", trimmedString.charAt(0), ", Last Character in trimmed string :", trimmedString.charAt(trimmedString.length - 1));
    



}
stringHandsOn();