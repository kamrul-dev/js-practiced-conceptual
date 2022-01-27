var budget = 8000;
if(budget > 500){
    console.log("Hurrah ! I will prepare for tour");
    var hotelCost = 4000;
    var remainingMoney = budget - hotelCost;
    console.log(remainingMoney);

    if(remainingMoney > 2000){
        console.log("bbq party");
    }else{
        console.log("go shopping")
    }
}
else{
    console.log("I will sleep, because I have no money");
}