function Account(name) {
    this.name = name;
    this.basket = [];
  }
  
  Account.prototype.addToBasket = function (item) {
    this.basket.push(item);
    Account.prototype.kickAKid = function (item) {
        return 'lol'
    }
  };
  
  const testAccount = new Account('Jane');
  const testAccount2 = new Account('Jane')
  console.log(testAccount.basket === testAccount2.basket)
  