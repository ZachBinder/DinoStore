
"strict";

//add an event listener on the load of the page 
addEventListener("load", 
   function() {
      var orderForm = document.forms.orderForm;
      orderForm.elements.orderDate.value = new Date().toDateString();
      orderForm.elements.Size.focus();

// Calculate the cost of the order
   calcOrder();

//Event handlers for the web form
   orderForm.elements.Size.onchange = calcOrder;
   orderForm.elements.qty.onchange = calcOrder;

   var planOptions = document.querySelectorAll('input[name="qual"]');

   for (var i = 0; i < planOptions.length; i++) {
      planOptions[i].onclick = calcOrder;
      }
   }
);

function calcOrder() {
   var orderForm = document.forms.orderForm;

// Calculate the initial cost of the order
   var sIndex = orderForm.elements.Size.selectedIndex;
   var sCost = orderForm.elements.Size.options[sIndex].value;

   var qIndex = orderForm.elements.qty.selectedIndex;
   var quantity = orderForm.elements.qty[qIndex].value;

// Initial cost = size cost * quantity
   var initialCost = sCost*quantity;
   orderForm.elements.initialCost.value = formatUSCurrency(initialCost);

// retrieve the cost of the quality the user selects
   var pCost = document.querySelector('input[name="qual"]:checked').value * quantity;
   orderForm.elements.protectionCost.value = formatNumber(pCost, 2);

// Calculate the order subtotal
   orderForm.elements.subtotal.value = formatNumber(initialCost + pCost, 2);

// Calculate the sales tax
   var salesTax = 0.05*(initialCost + pCost);
   orderForm.elements.salesTax.value = formatNumber(salesTax, 2);

// Calculate the cost of the total order
   var totalCost = initialCost + pCost + salesTax;
   orderForm.elements.totalCost.value = formatUSCurrency(totalCost);
}

function formatNumber(val, decimals) {
   return val.toLocaleString(undefined, {minimumFractionDigits:decimals, maximumFractionDigits:decimals});
} 

function formatUSCurrency(val) {
   return val.toLocaleString("en-US", {style: "currency", currency:"USD"});
}