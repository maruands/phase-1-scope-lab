// Write your solution in this file!
var customerName = "bob";
var bestCustomer;
const leastFavoriteCustomer = "andrew";
function upperCaseCustomerName()
{
    customerName = customerName.toUpperCase();
    return customerName;
}

function setBestCustomer()
{
    bestCustomer = "not bob";
}

function overwriteBestCustomer()
{
    return bestCustomer = "maybe bob";
}

function changeLeastFavoriteCustomer()
{
    return leastFavoriteCustomer = "kimaru";
}