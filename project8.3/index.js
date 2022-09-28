const state = {
  earnings: 0,
  expense: 0,
  net: 0,
  transactions: [],
};

let isUpdate = false;
let tid;

const transactionFormEl = document.getElementById("transactionForm");

const renderTransactions = () => {
  const transactionContainerEl = document.querySelector(".transactions");
  const netAmountEl = document.getElementById("netAmount");
  const earningEl = document.getElementById("earning");
  const expenseEl = document.getElementById("expense");

  const transactions = state.transactions;

  let earning = 0;
  let expense = 0;
  let net = 0;
  transactionContainerEl.innerHTML = "";
  transactions.forEach((transaction) => {
    const { id, amount, text, type } = transaction;
    const isCredit = type === "credit" ? true : false;
    const sign = isCredit ? "+" : "-";

    const transactionEl = `
     <div class="transaction" id="${id}">
        <div class="content" onclick="showEdit(${id})">
            <div class="left" >
            <p>${text}</p>
            <p>${sign} ₹ ${amount}</p>
        </div>
            <div class="status ${isCredit ? "credit" : "debit"}">${
      isCredit ? "C" : "D"
    }</div>
        </div>
        <div class="lower">
        <div class="icon" onclick="handleUpdate(${id})">
            <img src="./icons/pen.svg" alt="pen" />
        </div>
        <div class="icon" onclick="handleDelete(${id})">
            <img src="./icons/trash.svg" alt="trash" />
        </div>
        </div>
  </div>`;
    earning += isCredit ? amount : 0;
    expense += !isCredit ? amount : 0;
    net = earning - expense;

    transactionContainerEl.insertAdjacentHTML("afterbegin", transactionEl);
  });

  console.log({ net, earning, expense });

  netAmountEl.innerHTML = `₹ ${net}`;
  earningEl.innerHTML = `₹ ${earning}`;
  expenseEl.innerHTML = `₹ ${expense}`;
};

const addTransaction = (e) => {
  e.preventDefault();

  const isEarn = e.submitter.id === "earnBtn" ? true : false;

  const formData = new FormData(transactionFormEl);
  const tData = {};

  formData.forEach((value, key) => {
    tData[key] = value;
  });
  const { text, amount } = tData;
  const transaction = {
    id: isUpdate ? tid : Math.floor(Math.random() * 1000),
    text: text,
    amount: +amount,
    type: isEarn ? "credit" : "debit",
  };

  if (isUpdate) {
    const tIndex = state.transactions.findIndex((t) => t.id === tid);

    state.transactions[tIndex] = transaction;
    isUpdate = false;
    tid = null;
  } else {
    state.transactions.push(transaction);
  }

  renderTransactions();

  transactionFormEl.reset();
  console.log({ state });
};

const showEdit = (id) => {
  console.log("id", id);

  const selectedTransaction = document.getElementById(id);
  const lowerEl = selectedTransaction.querySelector(".lower");

  lowerEl.classList.toggle("showTransaction");
};

const handleUpdate = (id) => {
  const transaction = state.transactions.find((t) => t.id === id);

  const { text, amount } = transaction;
  const textInput = document.getElementById("text");
  const amountInput = document.getElementById("amount");
  textInput.value = text;
  amountInput.value = amount;
  tid = id;
  isUpdate = true;
};

const handleDelete = (id) => {
  const filteredTransaction = state.transactions.filter((t) => t.id !== id);

  state.transactions = filteredTransaction;
  renderTransactions();
};

renderTransactions();
transactionFormEl.addEventListener("submit", addTransaction);
