exports.calculate = function(phone, quantity)
{
    
    if(phone === "Iphone")
        return 4600 * quantity;

    else if (phone == "Samsung")
        return 4000 * quantity;
    
}