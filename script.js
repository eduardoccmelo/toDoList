// console.log("Hello world");
// console.log(1+5);

// let rating = 3;
// if(rating === 3){
//     console.log("your number is 3");
// };

// if(1+1 ===2){
//     console.log("true");
// };

// let random = Math.random();
// if(random < 0.5){
//     console.log("your number is LESS than 0.5!");
// }else{
//     console.log("your number is GREATER or EQUAL than 0.5"); 
// }
// console.log(random);

// const dayOfWeek = "Tuesday";

// if(dayOfWeek === "Monday"){
//     console.log("I hate Mondays!")
// } else if(dayOfWeek === "Saturday"){
//     console.log("I LOVE Saturdays!!!")
// } else if(dayOfWeek === "Friday"){
//     console.log("FRYAY!!!!!!!!!!!")
// } else{
//     console.log("another day!");
// }

// const age = 1;

// if(age < 5){
//     console.log("free entry");
// } else if(age < 10){
//     console.log("$10");
// } else if(age < 65){
//     console.log("$20");
// } else if(age > 65){
//     console.log("Senior!");
// };

// const password = prompt("Please enter your password");
// if(password.length >= 6){
//     if(password.indexOf(" ") === -1){
//         console.log("Valid Password!");
//     } else{
//         console.log("No spacing please!")
//     }
// } else{
//     console.log("too short");
// }

// let num = prompt("Enter how many times to loop:");

// for (let i = 1; i <= num; i++){
//     alert("Loop number" + " " + i)
// };

// for(let i = 0; i <= 4; i += 2){
//     console.log("Even numbers between 0 and 4");
//     console.log(i);
// }

// for(let i = 100; i >= 0; i -= 10){
//     console.log(i);
// }


// for(let i = 25; i >= 0; i -= 5){
//     console.log(i)
// }

// for(i = 1; i <= 3; i++){
//     // console.log(prompt("Enter a name"));
//     console.log("Your name is:" + " " + prompt("Enter a name:"));
// }

// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

// for(let i = 0; i < people.length; i++){
//     console.log(people[i].toUpperCase());
// }

// for(let i = 1; i <= 2; i++){
//     console.log(`i is: ${i}`);
//     for(let j = 1; j <= 3; j++){
//         console.log(`    j is: ${j}`)
//     }
// }

// const teams = [
//     ["Cruzeiro", "America", "Atletico"],
//     ["Flamengo", "Botafogo", "Vasco"],
//     ["Gremio", "Inter"],
//     ["Sao Paulo", "Corinthians", "Palmeras", "Santos"]
// ]

// for(let each of teams){
//     for(let team of each){
//         console.log(`Your team is ${team}`);
//     } 
// }

// for(let letra of "eduardo"){
//     console.log(letra);
// }

// for(i = 0; i < teams.length; i++){
//     const state = teams[i];
//     console.log(`State number #${i + 1}`.toLocaleUpperCase());
//     for(let j = 0; j < state.length; j++){
//         console.log(state[j]);
//     }
// }

// let count = 1;
// while(count <= 3){
//     console.log("while loop");
//     console.log(count);
//     count++;
// }

// for(i=1; i <= 3; i++){
//     console.log("for loop");
//     console.log(i);
// }

// const secret = "dudu";
// let guess = prompt("Guess the Password:");
// while(guess !== secret){
//     guess = prompt("Try again! Guess the password:")
// }
// alert("You are in!!!");

// let input = prompt("Say something:");
// while(true){
//     input = prompt(input);
//     if(input === "stop") break;
// } alert("game over!");

// let maximum = parseInt(prompt("Enter a maximum number:"));
// while(!maximum){
//     maximum = parseInt(prompt("Enter a valid number:"));
// }

// const targetNum = Math.floor(Math.random() * maximum) +1;
// console.log(targetNum);

// let guess = prompt("Enter your first guess");
// let attempts = 1;

// while(parseInt(guess) !== targetNum){
//     if(guess === "quit"){
//         break;
//     } else if (!parseInt(guess)){
//         attempts++;
//         guess = prompt("Enter a valid number");
//     } else if(targetNum > guess){
//         attempts++;
//         guess = prompt("Too LOW! Try again:");
//     } else{
//         attempts++;
//         guess = prompt("Too HIGH! Try again:");
//     } 
// } 

// if(guess === "quit"){
//     console.log("Bye!");
//     alert("You quit!");
// } else{
//     console.log("You win!");
//     alert(`Congrats! It took you ${attempts} attempts to win!`);
// }



let list = [];
setTimeout(() => {
    let item = prompt("What do you like to do?");
    while(prompt !== "quit"){
        if (item === "quit"){
            console.log("YOU QUIT!");
            alert("See you next time!");
            break; 
        } else if(item === "new"){
            item = prompt("ADD a new item to the LIST:"),
            list.push(item);
            console.log(`"${item}" added to the LIST`);
            item = prompt("What do you like to do next?");
        } else if(item === "list"){   
          for(let i = 0; i < list.length; i++){
              console.log(`${i}: ${list[i].toUpperCase()}`);
          }
            item = prompt("What do you like to do next?");
        } else if(item === "delete"){
            let index = parseInt(prompt("Type the INDEX of the item to delete:"));
            if(index > list.length || index < list.length && index !== 0){
                console.log("Invalid INDEX number!")
            } else if(!Number.isNaN(index)){
                let deleted = list.splice(index, 1);
                console.log(`"${deleted}" DELETED`);
                item = prompt("What do you like to do next?");
            } else{
                console.log("Plese enter a valid INDEX number!");
            }
        } else{
            item = prompt("Please enter a valid key!");
        }  
    };
  }, 50);


