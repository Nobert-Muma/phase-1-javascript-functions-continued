// code your solution here
function saturdayFun(firstArg) {
    if (firstArg==="bathe my dog") {
        return `This Saturday, I want to ${firstArg}!`;
    } else {
        return `This Saturday, I want to roller-skate!`;
    }
}
saturdayFun("bathe my dog");


 
function mondayWork(whatToDo = "go to the office") {
    return `This Monday, I will ${whatToDo}.`;
  }  
   console.log(mondayWork()); 
   console.log(mondayWork("work from home")); 
  
  
function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  
  
  const encouragingPromptFunction = wrapAdjective("!!!");
  console.log(encouragingPromptFunction("a dedicated programmer"));   
  const criticalReviewFunction = wrapAdjective("(");
  console.log(criticalReviewFunction("interesting", "&")); 
  