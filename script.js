function tIp(){
    var bill = parseFloat(document.getElementById("bill").value)
    var peoples = parseFloat(document.getElementById("peoples").value)
    var tip = parseFloat(document.getElementById("tips").value)


    var firste = document.getElementById("firste")
    var seconde = document.getElementById("seconde")
    var thirde = document.getElementById("thirde")

    var firsten = document.getElementById("firsten")
    var seconden = document.getElementById("seconden")
    var thirden = document.getElementById("thirden")

    firste.textContent = "";
    seconde.textContent = "";
    thirde.textContent = "";


    firsten.textContent = "";
    seconden.textContent = "";
    thirden.textContent = "";

    
    var under = document.querySelector("p")
    var bel = document.querySelector("h4")

    var h3 = document.querySelectorAll("h3")
    var ach = document.getElementById("up")

    under.textContent = "";
    bel.textContent = "";

    if(isNaN(bill) || isNaN(peoples) || isNaN(tip)){
        under.textContent = "Enter your value!"
        return
    }

    
    var tipAmount = tip/100*bill

    tipAmount = tipAmount.toFixed(2)


  

    firsten.textContent = ": " + "$" + bill + ".00";
    seconden.textContent = ": " +  peoples;
    thirden.textContent = ": " +  tip + "%";

    firste.textContent = "Bills($)";
    seconde.textContent = "peoples";
    thirde.textContent = "Tip(%)";

    under.textContent = tipAmount;
    bel.textContent = "Total Tip percentage"
    h3.forEach(function(h3){
        h3.textContent = ""
    });

    ach.textContent = "Result";

    
}



var bill = document.getElementById("bill")
var peoples = document.getElementById("peoples")
var tip = document.getElementById("tips")
var reset = document.getElementById("reset")
var under = document.querySelector("p")
var ach = document.getElementById("up")

var kl = document.getElementById("kl")
var kj = document.getElementById("kj")
var km = document.getElementById("km")

var firste = document.getElementById("firste")
var seconde = document.getElementById("seconde")
var thirde = document.getElementById("thirde")

var firsten = document.getElementById("firsten")
var seconden = document.getElementById("seconden")
var thirden = document.getElementById("thirden")

var bel = document.querySelector("h4")

reset.addEventListener("click", function(){
    bill.value = "";
    peoples.value = "";
    tip.value = "";
    under.textContent = "";
    ach.textContent = "Basic Information"
    kl.textContent = ". The bill fiels indicates, how much your cost is in the droller"
    kj.textContent = ". The tip field indicates, the tip percentage you want to give"
    km.textContent = ". The number of person field indicates, how many of want to give tip."

    firste.textContent = ""
    seconde.textContent = ""
    thirde.textContent = ""
    firsten.textContent = ""
    seconden.textContent = ""
    thirden.textContent = ""

    bel.textContent = ""
})
