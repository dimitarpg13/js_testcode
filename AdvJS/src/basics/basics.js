var onSale = true,
    inventoryLevel = 12,
    discount = 3;
if (onSale && inventoryLevel > 10) {
    console.log("We have plenty left");
}
if (onSale || discount > 0) {
    console.log("On sale!");
} else {
    console.log("Full price");
}
var rect = {
    width: 100,
    height: 50,
    toString: function() {
        return "Width: " + this.width + ", height: " + this.height;
    }
};
console.log("My object is " + rect.toString());

