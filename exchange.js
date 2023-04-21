// Add and Event listiner to the button

var convertBtn = document.getElementById('convertBtn');
if (convertBtn !== null) {
    convertBtn.addEventListener('click', function() {
      // Event handler code here
      var fromCurrency = document.getElementById('fromCurrency').value;
      var toCurrency = document.getElementById('toCurrency').value;
      var amount = document.getElementById('amount').value;
  
      // Make API request to excnange rate API
      var apiurl = 'https://v6.exchangerate-api.com/v6/15d70c87deffd2697ffa3255/latest/' + fromCurrency;
      fetch(apiurl)
          .then(function(response){
              return response.json();
          })
          .then(function(data){              
              var rate = data.conversion_rates[toCurrency];            
              var convertedAmount = (amount*rate).toFixed(2);
              document.getElementById('result').innerHTML = amount + ' ' + fromCurrency + ' is equivalent to ' + convertedAmount + ' ' +toCurrency;

          })
          .catch(function(err){
              console.error('Error fetching exchange rate:', err)
          });
    });
  }

  var searchBtn = document.getElementById('searchBtn');
  searchBtn.addEventListener('click', function(){
    var toCurrency = document.getElementById('xRate').value;
    var apiurl = 'https://v6.exchangerate-api.com/v6/15d70c87deffd2697ffa3255/latest/USD';
    fetch(apiurl)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            var rate = data.conversion_rates[toCurrency];
            document.getElementById('display').innerHTML = 'Exchange rate' + ' ' + '=' + ' ' + rate;
        })
        .catch(function(err){
            console.error('Error fetching exchange rate:', err)
        });
  });

// API link for Find Code name = https://v6.exchangerate-api.com/v6/YOUR-API-KEY/codes



// var fromCurrency = document.getElementById('fromCurrency').value;
// var apiurl = 'https://v6.exchangerate-api.com/v6/15d70c87deffd2697ffa3255/latest/' + fromCurrency;
// var rawData = fetch(apiurl)
//   .then(function(response){
//     return response.json();
//   })
//   .then(function(data){
//     return data;
//   })

// document.getElementById('convertBtn', function(){
//     var toCurrency = document.getElementById('toCurrency').value;
//     var amount = document.getElementById('amount').value;
//     var rate = rawData.conversion_rates[toCurrency];
//     var convertedAmount = (amount*rate).toFixed(2);
//     document.getElementById('result').innerHTML = amount + ' ' + fromCurrency + ' is equivalent to ' + convertedAmount + ' ' +toCurrency;
// })  

//   var searchBtn = document.getElementById('searchBtn');
//   searchBtn.addEventListener('click', function(){
//     var toCurrency = document.getElementById('xRate').value;
//     var rate = rawData.conversion_rates[toCurrency];
//     document.getElementById('display').innerHTML = rate;       
//   });



document.getElementById('codeBtn').addEventListener('click', function(){
    const myWord = document.getElementById('findCode').value;
    const UrlApi = 'https://v6.exchangerate-api.com/v6/15d70c87deffd2697ffa3255/codes';
    fetch(UrlApi)
        .then(function(response){
            return response.json();
        })
        .then(function(data){            
            for(const currency of data.supported_codes){
                if(currency[0] === myWord){
                    var newWord = currency[1];
                }
            }
            document.getElementById('displayFind').innerHTML = newWord;
        }) 
})


// document.getElementById('convertBtn').addEventListener('click', function(){
//     var fromCurrency = document.getElementById('fromCurrency').value;
//     var toCurrency = document.getElementById('toCurrency').value;
//     var amount = document.getElementById('amount').value;

//     // Make API request to excnange rate API
//     var apiurl = 'https://v6.exchangerate-api.com/v6/15d70c87deffd2697ffa3255/latest/' + fromCurrency;
//     fetch(apiurl)
//         .then(function(response){
//             return response.json();
//         })
//         .then(function(data){
//             console.log(data);
//             var rate = data.conversion_rates[toCurrency];            
//             var convertedAmount = (amount*rate).toFixed(2);
//             document.getElementById('result').innerHTML = amount + ' ' + fromCurrency + ' is equivalent to ' + convertedAmount + ' ' +toCurrency;
//         })
//         .catch(function(err){
//             console.error('Error fetching exchange rate:', err)
//         });
            
        
// });



