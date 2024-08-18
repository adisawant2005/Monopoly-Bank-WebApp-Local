// src/BankComponent.js

export default class Bank {
  constructor() {
    this.customers = {}; // Stores customer data with their balances
  }

  addCustomer(name, initialBalance) {
    if (name === "") {
      return "Enter customers name";
    } else if (this.customers[name]) {
      return `Customer ${name} already exists.`;
    } else if (isNaN(initialBalance)) {
      return "Enter a real number";
    } else if (initialBalance <= 0) {
      return "Balance must be positive/real.";
    }
    this.customers[name] = initialBalance;
    return `Added customer ${name} with initial balance of $${initialBalance}.`;
  }

  creditMoney(name, amount) {
    if (!this.customers[name]) {
      return `Customer ${name} does not exist.`;
    } else if (amount <= 0) {
      return "Amount to credit must be positive.";
    }
    this.customers[name] += amount;
    return `Credited $${amount} to ${name}. New balance is $${this.customers[name]}.`;
  }

  creditMoneyAll(amount) {
    if (amount <= 0) {
      return "Amount to credit must be positive.";
    }
    for (let name in this.customers) {
      this.customers[name] += amount;
    }
    return `Credited $${amount} to all customers.`;
  }

  creditMoneyFromAllToOne(name, amount) {
    if (!this.customers[name]) {
      return `Customer ${name} does not exist.`;
    } else if (amount <= 0) {
      return "Amount to credit must be positive.";
    }
    for (let name in this.customers) {
      this.customers[name] += amount;
    }
    return `Credited $${amount} to all customers.`;
  }

  debitMoney(name, amount) {
    if (!this.customers[name]) {
      return `Customer ${name} does not exist.`;
    } else if (amount <= 0) {
      return "Amount to debit must be positive.";
    } else if (this.customers[name] < amount) {
      return `Insufficient funds for ${name}. Current balance is $${this.customers[name]}.`;
    }
    this.customers[name] -= amount;
    return `Debited $${amount} from ${name}. New balance is $${this.customers[name]}.`;
  }

  debitMoneyAll(amount) {
    if (amount <= 0) {
      return "Amount to debit must be positive.";
    }
    let AccountsWithInsufficientFunds = [];
    for (let name in this.customers) {
      if (this.customers[name] < amount) {
        return `Insufficient funds for ${name}. Current balance is $${this.customers[name]}.`;
      }
      this.customers[name] -= amount;
    }
    return `Debited $${amount} from all customers.`;
  }

  transferMoney(sender, receiver, amount) {
    if (!this.customers[sender]) {
      return `Sender ${sender} does not exist.`;
    } else if (!this.customers[receiver]) {
      return `Receiver ${receiver} does not exist.`;
    } else if (amount <= 0) {
      return "Amount to transfer must be positive.";
    } else if (this.customers[sender] < amount) {
      return `Insufficient funds for ${sender}. Current balance is $${this.customers[sender]}.`;
    }
    this.customers[sender] -= amount;
    this.customers[receiver] += amount;
    return `Transferred $${amount} from ${sender} to ${receiver}.`;
  }

  getBalance(name) {
    if (!this.customers[name]) {
      return `Customer ${name} does not exist.`;
    }
    return `${name}'s balance is $${this.customers[name]}.`;
  }

  getAllCustomers() {
    console.log(this.customers);
    console.log(Object.entries(this.customers).length);
    if (
      Object.entries(this.customers).length === 0 &&
      localStorage.getItem("data")
    ) {
      this.customers = JSON.parse(localStorage.getItem("data"));
    } else {
      localStorage.setItem("data", JSON.stringify(this.customers));
    }
    return this.customers;
  }

  resetData() {
    localStorage.clear();
    this.customers = {};
  }
}
