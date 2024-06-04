class UberPriceCalculator {
    constructor(baseFare, costPerMile, costPerMinute, bookingFee) {
        this.baseFare = baseFare;
        this.costPerMile = costPerMile;
        this.costPerMinute = costPerMinute;
        this.bookingFee = bookingFee;
    }

    calculatePrice(distance, time) {
        const distanceCost = distance * this.costPerMile;
        const timeCost = time * this.costPerMinute;
        const totalFare = this.baseFare + distanceCost + timeCost + this.bookingFee;
        return totalFare.toFixed(2);
    }
}

// Example usage:
const baseFare = 2.50;  // Base fare in dollars
const costPerMile = 1.75;  // Cost per mile in dollars
const costPerMinute = 0.30;  // Cost per minute in dollars
const bookingFee = 1.00;  // Booking fee in dollars

const calculator = new UberPriceCalculator(baseFare, costPerMile, costPerMinute, bookingFee);

const distance = 10;  // Distance in miles
const time = 15;  // Time in minutes

const price = calculator.calculatePrice(distance, time);
console.log(`The total fare is $${price}`);
