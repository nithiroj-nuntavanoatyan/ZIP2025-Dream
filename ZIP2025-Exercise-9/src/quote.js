const randomquotetext = document.querySelector('#randomquotetext')
const randomquoteauthor = document.querySelector('#randomquoteauthor')
const randomquotebutton = document.querySelector('#randomButton')
const numberofitemperpage = document.querySelector('#numberofitemperpage')
const pagenumber = document.querySelector('#pagenumber')
const ShowQuoteContainer = document.querySelector('#ShowQuoteContainer')

let currentpage = 1;
let itemperpage = parseInt(numberofitemperpage.value);
let totalitem = 0;
let totalpage = 1;

function fetchquoteandrender(limit, skip) {
    fetch(`https://dummyjson.com/quotes?limit=${limit}&skip=${skip}`)
      .then(res => res.json())
      .then(data => {
        totalitem = data.total;
        totalpage = Math.ceil(totalitem / itemperpage);

        ShowQuoteContainer.innerHTML = '';
        data.quotes.forEach(quote => {
          const card = document.createElement('div');
          card.className = 'bg-[#8f5555] rounded-xl p-2 ';

          const quoteText = document.createElement('p');
          quoteText.className = ' text-xl sm:text-2xl border-b-2 py-4 wrap-normal';
          quoteText.textContent = quote.quote;

          const authorText = document.createElement('p');
          authorText.className = ' text-lg sm:text-xl wrap-normal';
          authorText.textContent ="By " + quote.author;

          card.appendChild(quoteText);
          card.appendChild(authorText);
          ShowQuoteContainer.appendChild(card);
        });

        renderPagination();
      });
  }


    function renderPagination() {
    pagenumber.innerHTML = '';

    // previous page button
    const prev = document.createElement('button');
    prev.textContent = '←';
    prev.className = 'bg-[#c84b4b] text-white rounded-xl px-2 m-1';
    prev.onclick = () => {
      if (currentpage > 1) {
        currentpage--;
        loadQuotes();
      }
    };
    pagenumber.appendChild(prev);

    const maxButtons = 5;
    let startPage = Math.max(1, currentpage - Math.floor(maxButtons / 2));
    let endPage = startPage + maxButtons - 1;

    if (endPage > totalpage) {
      endPage = totalpage;
      startPage = Math.max(1, endPage - maxButtons + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      const btn = document.createElement('button');
      btn.textContent = i;
      btn.className = `bg-[#c84b4b] text-white rounded-xl px-2 m-1`;
      btn.onclick = () => {
        currentpage = i;
        loadQuotes();
      };
      pagenumber.appendChild(btn);
    }

    // next page button
    const next = document.createElement('button');
    next.textContent = '→';
    next.className = 'bg-[#c84b4b] text-white rounded-xl px-2 m-1';
    next.onclick = () => {
      if (currentpage < totalpage) {
        currentpage++;
        loadQuotes();
      }
    };
    pagenumber.appendChild(next);
  }

  function loadQuotes() {
    const skip = (currentpage - 1) * itemperpage;
    fetchquoteandrender(itemperpage, skip);
  }

  numberofitemperpage.onchange = () => {
    itemperpage = parseInt(numberofitemperpage.value);
    currentpage = 1;
    loadQuotes();
  };

  loadQuotes();

randomquotebutton.addEventListener('click', () => {
    fetch('https://dummyjson.com/quotes/random')
        .then(res => res.json())
        .then(quotedata => {
            console.log("Random fetch success")
            randomquotetext.textContent = quotedata.quote
            randomquoteauthor.textContent = "By " + quotedata.author
        }).catch(error => {
            console.error("Random fetch error");
            alert("Random fetch error")
        })
});

// var dropdown = document.getElementById("numberofitemperpage")
// var selectoption = null
// function onChange() {
//     selectoption = dropdown.value;
//     var text = dropdown.options[dropdown.selectedIndex].text;
//     console.log(selectoption, text);

//     ShowQuoteContainer.innerHTML = "";

//     fetchquoteandrender(selectoption, 0)
// }

// dropdown.onchange = onChange;
// onChange();

// function fetchquoteandrender(itemperpage, skip) {
//     fetch(`https://dummyjson.com/quotes?limit=${itemperpage}&skip=${skip}`)
//         .then(res => res.json())
//         .then(qoutedata => {
//             console.log(qoutedata);
//             const quote = qoutedata.quotes;

//             quote.forEach(quotedata => {
//                 const qoutediv = document.createElement('div');
//                 qoutediv.className = 'bg-[#8f5555] rounded-xl p-2 '
//                 const quotetext = document.createElement('h6');
//                 quotetext.className = 'text-xl border-b-2 py-4 wrap-normal'
//                 const qouteauthor = document.createElement('p');
//                 qouteauthor.className = 'text-xl wrap-normal'

//                 quotetext.textContent = quotedata.quote;
//                 qouteauthor.textContent = quotedata.author;

//                 qoutediv.appendChild(quotetext);
//                 qoutediv.appendChild(qouteauthor);

//                 ShowQuoteContainer.appendChild(qoutediv);
//             });

//         });
// }

// function fetchall() {
//     fetch('https://dummyjson.com/quotes')
//         .then(res => res.json())
//         .then(quotedata => {
//             const allquote = quotedata.quotes
//         });
// };

// function displayqoute(quote) {
//     const qoutediv = document.createElement('div');
//     qoutediv.className = 'bg-[#8f5555] rounded-xl p-2 '
//     const quotetext = document.createElement('h6');
//     quotetext.className = 'text-xl border-b-2 py-4 wrap-normal'
//     const qouteauthor = document.createElement('p');
//     qouteauthor.className = 'text-xl wrap-normal'

//     quotetext.textContent = quotedata.quote;
//     qouteauthor.textContent = quotedata.author;

//     qoutediv.appendChild(quotetext);
//     qoutediv.appendChild(qouteauthor);

//     ShowQuoteContainer.appendChild(qoutediv);
// }
