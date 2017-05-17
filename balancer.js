function Balancer() {

  // --- Data ----
  this.capital = 1000;
  // this.transaction cost - coming soon
  this.stocks = [
    {
      ticker: 'XIC',
      price: 24.69,
      quantity: 8,
      target: 0.5
    },
    {
      ticker: 'VTI',
      price: 123.36,
      quantity: 2,
      target: 0.25
    }
  ];
  this.actions = [];

  // ---- Methods ----

  /**
  * {Float} price - price of stock
  * {Float} total_money - total assets
  * {Float} target - percentage (out of 1)
  */
  this.optimal_calc = function(price, total_money, target) {

    var tmp = target * total_money / price;
    var optimal = Number(tmp);
    return optimal;

  };

  /**
  * {Float} optimal - ideal percentage
  * {Number} total_money - total capital
  */
  this.rebalance = function(optimal, quantity) {

    var delta = optimal - quantity;
    return delta;

  };

  this.main = function() {

    for (var i in this.stocks) {
      var optimal = this.optimal_calc(this.stocks[i].price, this.capital, this.stocks[i].target);
      var delta = this.rebalance(optimal, this.stocks[i].quantity);
      this.actions.push({
        ticker: this.stocks[i].ticker,
        action: Math.round(delta)
      });
    }

    console.log(this.actions);

  };

}

var balance = new Balancer();

balance.main();