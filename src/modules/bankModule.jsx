// src/BankComponent.js

export default class Bank {
  constructor() {
    this.customers = {}; // Stores customer data with their balances
    this.messages = []; // Stores logs/messages
  }

  addCustomer(name, initialBalance) {
    if (name === "") {
      return "Enter customers name";
    } else if (this.customers[name]) {
      return `Customer "${name}" already exists.`;
    } else if (isNaN(initialBalance)) {
      return "Enter a real number";
    } else if (initialBalance <= 0) {
      return "Balance must be positive/real.";
    }
    this.customers[name] = initialBalance;
    const time = new Date().toLocaleString();
    const message = `Added customer "${name}" with initial balance of "$${initialBalance}" at "${time}".`;
    this.messages.push(message);
    return message;
  }

  creditMoney(name, amount) {
    if (!this.customers[name]) {
      return `Customer "${name}" does not exist.`;
    } else if (isNaN(amount)) {
      return "Enter a real amount";
    } else if (amount <= 0) {
      return "Amount to credit must be positive.";
    }
    this.customers[name] += amount;
    const time = new Date().toLocaleString();
    const message = `Credited "$${amount}" to "${name}" at "${time}".`;
    this.messages.push(message);
    return message;
  }

  creditMoneyAll(amount) {
    if (amount <= 0) {
      return "Amount to credit must be positive.";
    } else if (isNaN(amount)) {
      return "Enter a real amount";
    }
    for (let name in this.customers) {
      this.customers[name] += amount;
    }
    const time = new Date().toLocaleString();
    const message = `Credited "$${amount}" to all customers at "${time}".`;
    this.messages.push(message);
    return message;
  }

  debitMoney(name, amount) {
    if (!this.customers[name]) {
      return `Customer "${name}" does not exist.`;
    } else if (isNaN(amount)) {
      return "Enter a real amount";
    } else if (amount <= 0) {
      return "Amount to debit must be positive.";
    } else if (this.customers[name] < amount) {
      return `Insufficient funds for "${name}". Current balance is "$${this.customers[name]}".`;
    }
    this.customers[name] -= amount;
    const time = new Date().toLocaleString();
    const message = `Debited $${amount} from ${name} at ${time}.`;
    this.messages.push(message);
    return message;
  }

  debitMoneyAll(amount) {
    if (amount <= 0) {
      return "Amount to debit must be positive.";
    } else if (isNaN(amount)) {
      return "Enter a real amount";
    }
    let AccountsWithInsufficientFunds = [];
    for (let name in this.customers) {
      if (this.customers[name] < amount) {
        const message = `Insufficient funds for "${name}". Current balance is "$${this.customers[name]}".`;
        this.messages.push(message);
        return message;
      }
      this.customers[name] -= amount;
    }
    const time = new Date().toLocaleString();
    const message = `Debited "$${amount}" from all customers at "${time}".`;
    this.messages.push(message);
    return message;
  }

  transferMoney(sender, receiver, amount) {
    if (!this.customers[sender]) {
      return `Sender "${sender}" does not exist.`;
    } else if (!this.customers[receiver]) {
      return `Receiver "${receiver}" does not exist.`;
    } else if (isNaN(amount)) {
      return "Enter a real amount";
    } else if (amount <= 0) {
      return "Amount to transfer must be positive.";
    } else if (this.customers[sender] < amount) {
      return `Insufficient funds for "${sender}". Current balance is "$${this.customers[sender]}".`;
    }
    this.customers[sender] -= amount;
    this.customers[receiver] += amount;
    const time = new Date().toLocaleString();
    const message = `Transferred "$${amount}" from "${sender}" to "${receiver}" at "${time}".`;
    this.messages.push(message);
    return message;
  }

  getBalance(name) {
    if (!this.customers[name]) {
      return `Customer "${name}" does not exist.`;
    }
    return `${name}'s balance is $${this.customers[name]}.`;
  }

  getAllCustomers() {
    // console.log(this.customers);
    // console.log(Object.entries(this.customers).length);
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

  getAllMessages() {
    console.log(this.messages);
    console.log(this.messages.length);
    if (this.messages.length === 0 && localStorage.getItem("messages")) {
      this.messages = JSON.parse(localStorage.getItem("messages"));
    } else {
      localStorage.setItem("messages", JSON.stringify(this.messages));
    }
    return this.messages;
  }

  resetData() {
    localStorage.clear();
    this.customers = {};
    this.messages = [];
  }
}
