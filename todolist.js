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
            if(!Number.isNaN(index)){
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