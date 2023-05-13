

function stringHandsOn(){
    var string1 = "  Hey you are doing good, keep it up   ";

    console.log(`1. Print the string as it is on console`);
    console.log(`String : ${string1}`);
    console.log("");

    console.log(`2. Calculate length of the String`);
    console.log(`Length of the string : ${string1.length}`);
    console.log("");

    console.log(`3. Remove the leading and trailing extra spaces and log string on console with its length`);
    var trimmedString = string1.trim();
    console.log(`Trimmed string : ${trimmedString}  |   Length of trimmed string : ${trimmedString.length}`);
    console.log("");

    console.log(`4. Print the total number extra spaces count that is removed in step 3.`);
    console.log(`Total spaces trimmed :  ${string1.length - trimmedString.length}`);
    console.log("");

    console.log(`5. Print the first and last character on the same line after trim() `);
    console.log(`First Character in trimmed string : ${trimmedString.charAt(0)}  |   Last Character in trimmed string : ${trimmedString.charAt(trimmedString.length - 1)}`);
    console.log("");

    console.log(`6. Print the count of total words available in the string after step 3.`);
    var resultSplit = trimmedString.split(" ");
    console.log(`Total count of words available in the string :  ${resultSplit.length}`);
    console.log("");

    console.log(`7. Print the index of word "good" from the given string `);
    console.log(`Index of word "good" in the string :  ${trimmedString.search("good")}`);
    console.log("");

    console.log(`8. Print the substring starting from index 22, using substring() and slice()`);
    console.log(`Substring starting from index 22 using substring() : ${trimmedString.substring(22, )}`);
    console.log(`Substring starting from index 22 using slice() : ${trimmedString.slice(22, )}`);
    console.log("");

    console.log(`9. Check, is string ends with word "up" after step 3?`);
    console.log(`Does string end with word "up"? ${trimmedString.endsWith("up")}`);
    console.log("");

    console.log(`10. Check is string starts with word "Hey" after trimming -> i.e. after step 3 output string value`);
    console.log(`Does string start with word "Hey"? ${trimmedString.startsWith("Hey")} `);

}
stringHandsOn();