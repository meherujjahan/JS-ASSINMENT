function total(item, amount) {
    const memoryCost = document.getElementById(item + 'Cost');
    memoryCost.innerText = amount;
    costing()
}


// ----------
function costing() {
    //get memorycost id 
    const memoryCostText = document.getElementById('memoryCost');
    const memoryCost = parseInt(memoryCostText.innerText);
    //get storagecost id 
    const storageCostText = document.getElementById('storageCost');
    const storageCost = parseInt(storageCostText.innerText);
    //get deliverycost id 
    const deliveryCostText = document.getElementById('deliveryCost')
    const deliveryCost = parseInt(deliveryCostText.innerText);
    //get totalamount id 
    const total = document.getElementById('totalAmount');
    total.innerText = memoryCost + storageCost + deliveryCost + 1299;

    return total;
}


// memory cost function
document.getElementById('16GbMemory-input').addEventListener('click', function () {
    total('memory', '180')
})
document.getElementById('8GbMemory-input').addEventListener('click', function () {
    total('memory', '0')

})

// storageCost cost function
document.getElementById('256storage-input').addEventListener('click', function () {
    total('storage', '0')
})
document.getElementById('512storage-input').addEventListener('click', function () {
    total('storage', '100')

})
document.getElementById('1tbstorage-input').addEventListener('click', function () {
    total('storage', '180')
})

// delivery cost fuction 
document.getElementById('freeDelivery').addEventListener('click', function () {
    total('delivery', '0')
})
document.getElementById('paid-delivery').addEventListener('click', function () {
    total('delivery', '20')
})

//bonus Total function//
document.getElementById('apply-button').addEventListener('click', function () {
    let bonusInput = document.getElementById('bonus-total');
    bonusInput.innerText = 1299 / 20;
})


