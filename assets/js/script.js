const rate = 0,
    advance = 1.6,
    cards = [
        { card: "visa", debit: 1.35, credit: 1.89, installments: [2.99, 3.5] },
        { card: "master", debit: 1.35, credit: 1.89, installments: [2.99, 3.5] },
        { card: "hiper", debit: 0, credit: 2.5, installments: [3.39, 3.84] },
        { card: "elo", debit: 1.89, credit: 2.99, installments: [3.59, 3.99] },
        { card: "american express", debit: 0, credit: 3.99, installments: [4.29, 4.59] },
        { card: "cabal", debit: 5, credit: 5, installments: [5.25, 5.50] },
        { card: "unionpay", debit: 4, credit: 4, installments: [4, 4] }
    ];
function calc() {
    let a = $("#price").val(),
        e = $("#flag").val(),
        l = $("#installments").val();
        console.log("price: "+ a, "flag:" + e, "parcelas:" + l)
    $("#currency").html(calculating(a.replace("R$ ", "").replace(".", "").replace(",", "."), l, e));
}
function calculating(a, e = 0, l = 0) {
    console.log(price, installments, flag);
//   let total = (price / (100 - (advance + cards[flag]['installments'][installments]))) * 100;
//   const total = (price / (100 - (advance + cards[flag].credit * installments ))) * 100;
  // const total1 = (price / (100 - (advance + cards[flag].credit)))*100; 
  let total1 = 2;
  if(+installments === 0)
  {
    total1 = (price / (100 - (advance + cards[flag].credit ))) * 100; 
  }
  else if(+installments >= 1 && +installments < 7)
  {
    total1 = (price / (100 - (advance + (cards[flag].installments[0] * installments)))) * 100;
  }else if(+installments >= 7)
  {
    total1 = (price / (100 - (advance + (cards[flag].installments[1] * installments)))) * 100;
  }
  console.log(`(${price} / (100- (${advance} + ${cards[flag].credit})))*100`);
  return accounting.formatMoney(total1, 'R$', 2, '.', ',');
}
$("#price").maskMoney(),
    $("#price").on("keyup", () => {
        calc();
    }),
    $("#flag").on("change", () => {
        calc();
    }),
    $("#installments").on("change", () => {
        calc();
    });
