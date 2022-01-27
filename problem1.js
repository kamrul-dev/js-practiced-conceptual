var age = 23;
var vaccineCount = 1;
var isVaccinated =false;

 if(age > 20 && vaccineCount == 2){
    console.log("you can go foreign country");
 }

 if(age > 15 && age < 20 && vaccineCount == 0){
     console.log("Tomorrow is the final date for your first vaccine");
 }
 if(age > 15 && age < 20 && vaccineCount == 2){
     isVaccinated = true;
     console.log("Congratulations. Your are Vaccinated");
 }