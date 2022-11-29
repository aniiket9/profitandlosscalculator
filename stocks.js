const initialPrice = document.querySelector("#initial-price");
const noOfStocks = document.querySelector('#stocks-quantity');
const currentPrice = document.querySelector("#current-price");
const outputBox = document.querySelector('#output');
const resultBtn = document.querySelector("#rslt-btn");

function calculateProfitLoss(initial,quantity,current){
    if(initial>current){
        var loss = (initial-current)*quantity;
        var lossPercentage = (loss/initial)*100;
        outputBox.innerText = `Oops!! the loss is ${loss.toFixed(2)} and the Loss Percentage is ${lossPercentage.toFixed(2)}% 📉`;
    }else if(initial<current){
        var profit = (current-initial)*quantity;
        var profitPercentage = (profit/initial)*100;
        outputBox.innerText = `Hey!! the profit is ${profit.toFixed(2)} and the Profit Percentage is  ${profitPercentage.toFixed(2)}% 📈`;
    }else{
        outputBox.innertext = `No Pain No Gain and No Gain No Pain 💸`;
    }
}
function submitHandler(){
    var ip = Number(initialPrice.value);
    var qos = Number(noOfStocks.value);
    var cp = Number(currentPrice.value);

   calculateProfitLoss(ip,qos,cp);


}

resultBtn.addEventListener('click', submitHandler)