//JSON = (JavaScript Object Notation) data interchange format
//        Used for exchanging data between a server and a web 
//        application
//        JSON files {key:value} OR [value1,value2.value3]

//        JSON.stringify() = converts a JS object to a JSON string
const names = ["Spongebob","Patrick","Squidward","Sandy"];
const person = {
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies":["Jellyfishing","Karate"]
};
const people = [{
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true
},
{
    "name": "Patrick",
    "age": 50,
    "isEmployed": true
},
{
    "name":"Squidward",
    "age":50,
    "isEmployed":true
}
,{
    "name":"Sandy",
    "age": 20,
    "isEmployed":false
}];
const jsonString = JSON.stringify(people);

console.log(jsonString);

//        JSON.parse() = converts a JSON string to a JS object

const JSON_names = '["Spongebob","Patrick","Squidward","Sandy"]';
const JSON_person = '{"name": "Spongebob","age": 30,"isEmployed": true,"hobbies":["Jellyfishing","Karate"]}';
const JSON_people = '[{"name": "Spongebob","age": 30,"isEmployed": true},{"name": "Patrick","age": 50,"isEmployed": true},{"name":"Squidward","age":50,"isEmployed":true},{"name":"Sandy","age": 20,"isEmployed":false}]';

const parseData = JSON.parse(JSON_names);

console.log(parseData);


fetch("names.json")
    .then(response => response.json()) //CONVERT response TO JSON
    .then(value=>console.log(value)) //DISPLAY response

fetch("person.json")
    .then(response => response.json()) //CONVERT response TO JSON
    .then( values => values.array.forEach(value => console.log(value))) //DISPLAY response