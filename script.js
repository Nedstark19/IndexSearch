const srcData = [
    {
        "name": "Sameer",
        "lastName": "Syed",
        "age": 25,
        "friends" : ['riyaz','nagul','imran']
    },
    {
        "name": "Hussain",
        "lastName": "Syed",
        "age": 22,
        "friends" : ['subhani','nagul','imran']
    },
    {
        "name": "Subhani",
        "lastName": "Syed",
        "age": 27,
        "friends" : ['riyaz','sameer','imran']
    },
    {
        "name": "Riyaz",
        "lastName": "shaik",
        "age": 25,
        "friends" : ['riyaz','nagul','sameer']
    },
    {
        "name": "Nagul",
        "lastName": "SK",
        "age": 25,
        "friends" : ['riyaz','sameer','imran']
    },
    {
        "name": "Imran",
        "lastName": "Syed",
        "age": 25,
        "friends" : ['riyaz','nagul','sameer']
    }
]



function lstName() {
    var ip = document.getElementById('searchfield').value;
    for (let i = 0; i < srcData.length; i++) {
        if (ip == (srcData[i].name).match(ip)) {
            var op = srcData[i].lastName;
            document.getElementById('searchresult').innerHTML = op;
        }
    }
    if (op == null || op == undefined){
        document.getElementById('searchresult').textContent = 'entered name field not available in the JSON file'
    }
    return op;
};

function age() {
    var ip = document.getElementById('searchfield').value;
    for (let i = 0; i < srcData.length; i++) {
        if (ip == (srcData[i].name).match(ip)) {
            var op = srcData[i].age;
            document.getElementById('searchresult').innerHTML = op;
        }
    }
    if (op == null || op == undefined){
        document.getElementById('searchresult').textContent = 'entered name field not available in the JSON file'
    }
    return op;
};

function frnds() {
    var ip = document.getElementById('searchfield').value;
    for (let i = 0; i < srcData.length; i++) {
        if (ip == (srcData[i].name).match(ip)) {
            var op = srcData[i].friends;
            document.getElementById('searchresult').innerHTML = op;
        }
    }
    if (op == null || op == undefined){
        document.getElementById('searchresult').textContent = 'entered name field not available in the JSON file'
    }
    return op;
};



// function searchfn() {
//     for (let i = 0; i > srcData.length; i++) {
//         var output = null;
//         if (input == srcData[i].name) {
//             output = srcData[i].url;
//             return output;
//         };
//     };
//     document.getElementById('searchresult').innerHTML = output;    
// };


// function searchfn() {
//     if (input == 'Senior Officer Trade Back Office'){
//         const op = srcData[2].url;
//         document.getElementById('searchresult').innerHTML = op;
//     };    
// };




console.log(srcData[0].name);
console.log(srcData.length);
