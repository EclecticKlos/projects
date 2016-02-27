var getStocksFriendsAreTrading = function(currentUserID, getFriendsListForUser, getTradeTransactionsForUser, isValidTransaction, getFriendsBuySellPerTickerAndRemoveOldTrades, getTickerTransactionCounts, sortCountsAlphabeticallyByTickers, buildNonZeroCountTickerTuples, sortAlphabeticallySortedCountsByCount, makeAlertStrings) {

  var listOfFriendsIDs = getFriendsListForUser(currentUserID);
  var listOfFriendsTransactions = getFriendsTransactions(listOfFriendsIDs);
  var friendsBuySellPerTickerList = getFriendsBuySellPerTickerAndRemoveOldTrades(listOfFriendsTransactions);
  var tickerTransactionCounts = getTickerTransactionCounts(friendsBuySellPerTickerList);
  var countsSortedAlphabeticallyByTickers = sortCountsAlphabeticallyByTickers(tickerTransactionCounts);
  var nonZeroCountTickerTuples = buildNonZeroCountTickerTuples(countsSortedAlphabeticallyByTickers, tickerTransactionCounts);
  var fullySortedCounts = sortAlphabeticallySortedCountsByCount(nonZeroCountTickerTuples);
  var alertStringsList = makeAlertStrings(fullySortedCounts);
  return alertStringsList;
}

var getFriendsTransactions = function(listOfFriendsIDs){
  var listOfFriendsTransactions = [];
  for (var i=0; i<listOfFriendsIDs.length; i++) {
    listOfFriendsTransactions.push(getTradeTransactionsForUser(listOfFriendsIDs[i]));
  }
  return listOfFriendsTransactions;
}

var isValidTransaction = function(transaction) {
  var tradeDate = new Date(transaction.split(",")[0])
  var currentDate = new Date();
  var validTradeAge = 7 * 24 * 60 * 60 * 1000; // days hours minutes seconds milliseconds
  if (currentDate - tradeDate < validTradeAge) {
    return true;
  }
  else {
    return false;
  }
}

var getFriendsBuySellPerTickerAndRemoveOldTrades = function(friendsTransactionList) {
  var friendsBuySellPerTickerList = [];
  for (var i=0; i<friendsTransactionList.length; i++){
    var friendBuySellPerTicker = {};
    for (var j=0; j<friendsTransactionList[i].length; j++){

      if (isValidTransaction(friendsTransactionList[i][j])){
        var buyOrSell = friendsTransactionList[i][j].split(",")[1];
        var ticker = friendsTransactionList[i][j].split(",")[2];

        if (ticker in friendBuySellPerTicker) {
          if (friendBuySellPerTicker[ticker].buy === false && buyOrSell === "BUY") {
            friendBuySellPerTicker[ticker].buy = true;
          }
          else if (friendBuySellPerTicker[ticker].sell === false && buyOrSell === "SELL") {
            friendBuySellPerTicker[ticker].sell = true;
          }
        }
        else {
          friendBuySellPerTicker[ticker] = {buy:false, sell:false};
          buyOrSell === "BUY" ? friendBuySellPerTicker[ticker].buy = true : friendBuySellPerTicker[ticker].sell = true;
        }
      }
    }
    friendsBuySellPerTickerList.push(friendBuySellPerTicker);
  }
  return friendsBuySellPerTickerList;
}

var getTickerTransactionCounts = function(friendsBuySellPerTickerList){
  var tickerTransactionCounts = {};

  for (var i=0; i<friendsBuySellPerTickerList.length; i++){
    for (ticker in friendsBuySellPerTickerList[i]){
      if ((ticker in tickerTransactionCounts) !== true) {
        tickerTransactionCounts[ticker] = 0;
      }
      if (friendsBuySellPerTickerList[i][ticker].buy === true && friendsBuySellPerTickerList[i][ticker].sell === false){
        tickerTransactionCounts[ticker] = tickerTransactionCounts[ticker] +1;
      }
      else if (friendsBuySellPerTickerList[i][ticker].buy === false && friendsBuySellPerTickerList[i][ticker].sell === true){
        tickerTransactionCounts[ticker] = tickerTransactionCounts[ticker] -1;
      }
    }
  }

  return tickerTransactionCounts;
}

var sortCountsAlphabeticallyByTickers = function(tickerTransactionCounts){
  var tickers = [];
  for (ticker in tickerTransactionCounts) {
    tickers.push(ticker);
  };
  var sortedTickers = mergeSortWithAlphabeticalSwitch(tickers, true);
  return sortedTickers;
}

var buildNonZeroCountTickerTuples = function(alphabeticallySortedCountList, tickerTransactionCounts){
  debugger;
  var tuples = [];
  for (var i=0; i<alphabeticallySortedCountList.length; i++){
    if (tickerTransactionCounts[alphabeticallySortedCountList[i]] !== 0) {
      var tickerVotes = [];
      if (tickerTransactionCounts[alphabeticallySortedCountList[i]] > 0){
        tickerVotes[0] = alphabeticallySortedCountList[i]
        tickerVotes[1] = tickerTransactionCounts[alphabeticallySortedCountList[i]];
        tickerVotes[2] = "BUY";
      }
      else if (tickerTransactionCounts[alphabeticallySortedCountList[i]] < 0){
        tickerVotes[0] = alphabeticallySortedCountList[i]
        tickerVotes[1] = Math.abs(tickerTransactionCounts[alphabeticallySortedCountList[i]]);
        tickerVotes[2] = "SELL";
      }
      tuples.push(tickerVotes)
    };
  }
  return tuples;
}

var sortAlphabeticallySortedCountsByCount = function(tickerTuples) {
  var fullySortedCounts = mergeSortWithAlphabeticalSwitch(tickerTuples, false);
  return fullySortedCounts;
}

var makeAlertStrings = function(fullySortedCounts) {
  var alertList = [];
  for (var i=0; i<fullySortedCounts.length; i++){
    var alertString = fullySortedCounts[i][1] + "," + fullySortedCounts[i][2] + "," + fullySortedCounts[i][0]
    alertList.push(alertString);
  }
  return alertList;
}

var mergeSortWithAlphabeticalSwitch = function(input, alphabetical){
  var joinArraysWithAlphabeticalSwitch = function(arr1, arr2, alphabetical){
    var p1 = 0;
    var p2 = 0;

    var result = [];
    if (arr1 === undefined){
      return arr2;
    } else if (arr2 === undefined){
      return arr1;
    }

    while (arr1[p1] !== undefined && arr2[p2] !== undefined){
      if (alphabetical) {
        if (arr1[p1] <= arr2[p2]){
          result.push(arr1[p1]);
          p1++;
        } else {
          result.push(arr2[p2]);
          p2++;
        }
      }
      else {
        if (arr1[p1][1] >= arr2[p2][1]){
          result.push(arr1[p1]);
          p1++;
        } else {
          result.push(arr2[p2]);
          p2++;
        }
      }
    }

    if (p1 === arr1.length){
      result = result.concat(arr2.slice(p2));
    } else if (p2 === arr2.length){
      result = result.concat(arr1.slice(p1));
    }

    return result;
  }

  if (input.length <= 1){
    return input;
  }
  var midIndex = Math.floor(input.length/2);
  return joinArraysWithAlphabeticalSwitch(mergeSortWithAlphabeticalSwitch(input.slice(0, midIndex), alphabetical), mergeSortWithAlphabeticalSwitch(input.slice(midIndex, input.length), alphabetical), alphabetical);
}


// PROVIDED FUNCTIONS

var getFriendsListForUser = function(currentUserID) {
  return [0,1,2];
};

var getTradeTransactionsForUser = function(friendUserID) {
  var fakeTransactions = [["2016-02-24,SELL,TSLA", "2016-02-25,BUY,APPL", "2016-02-25,BUY,APPL", "2016-02-24,SELL,APPL", "2016-02-25,BUY,APPL"],
  ["2016-02-24,BUY,GOOG", "2016-02-25,BUY,GOOG", "2016-02-25,BUY,GOOG", "2016-02-24,BUY,APPL", "2016-02-25,BUY,APPL", "2016-02-24,SELL,APPL", "2016-02-25,BUY,APPL"],
  ["2016-02-25,BUY,GOOG", "2016-02-25,BUY,GOOG", "2016-02-24,BUY,APPL", "2016-02-24,BUY,FB", "2016-02-25,BUY,APPL", "2016-02-24,SELL,APPL", "2016-02-25,SELL,TSLA", "2016-02-25,BUY,KLOS"]];
  //GOOG 3 APPL 0 TSLA -2 KLOS 1

  return fakeTransactions[friendUserID];
}
