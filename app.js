let user = prompt("you find the word");

let word = "Tailwind CSS is a utility-first CSS framework that provides pre-designed classes for styling web elements. It's designed to be used within HTML, allowing developers to build custom designs by combining these utility classes rather than writing custom CSS. This approach promotes consistency, speed, and efficiency in web development.";


let userword = word.split(" ");

console.log(userword);


let flag = false;


for (let i = 0; i < userword.length; i++) {
   if (userword[i] === user) {
     flag = true
     break
   }
    
}

if (flag) {
    console.log("yes");
    
}else{
    console.log("NO");
    
}


let array = ["hasnain" , 'ahmed'  ]

for (let i = 0; i < array.length; i++) {
   const capitlaiz = array[i][0].toLocaleUpperCase()
   
   console.log(capitlaiz + array[i].slice(1))
    
}
