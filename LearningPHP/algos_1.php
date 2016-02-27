<?php
/*
|--------------------------------------------------------------------------
| This is interview practice, where the exercises are sourced from DBC's Algorithm's night
|--------------------------------------------------------------------------
*/



/*
|--------------------------------------------------------------------------
| Prime Number Finder
|--------------------------------------------------------------------------
|
| Determine if input is a prime number
|
*/

  function isPrime($num) {
    $squareRoot = sqrt($num);
    $dividor = 3;
    if ($squareRoot % 2 === 0 || fmod($squareRoot, $dividor) === 0) {
      echo "false";
      return;
    }
    while ($dividor < $squareRoot) {
      if ($num % $dividor === 0){
        echo "false";
        return ;
      }
      else {
        $dividor += 2;
      }
    }
    echo "true";
    return;
  }

// Testing the function
 // isPrime(2);
 // isPrime(4);
 // isPrime(11);
 // isPrime(12);


/*
|--------------------------------------------------------------------------
| Valid Parens
|--------------------------------------------------------------------------
|
| Take string and determine if parens would be valid in code
|
*/

function validParens($string){
  $strArray = str_split($string);
  $leftParenCount = 0;
  $rightParenCount = 0;

  foreach($strArray as $char){
    if ($char === "(") {
      $leftParenCount ++;
    }
    else if ($char === ")") {
      $rightParenCount ++;
    }

    if (($leftParenCount - $rightParenCount) < 0) {
      echo "False";
      return;
    }
  }
  if ($leftParenCount !== $rightParenCount) {
    echo "False";
  }
  else {
    echo "True";
  }
}

//Testing the function
// validParens("function validParens(string)");
// validParens(")if (leftParenCount !== rightParenCount)");
// validParens("(())");
// validParens("())");
// validParens("(()");

/*
|--------------------------------------------------------------------------
| Valid Decodings
|--------------------------------------------------------------------------
|
| Take a number input and determine the number of valid decodings which could be derived from said number
|
*/

// Returns Fibonacci number
function getFib($n){
  echo round(pow((sqrt(5)+1)/2, ($n + 1)) / sqrt(5));
}

function numValidDecodings($num) {
  $numStr = strval($num);
  $numStrArr = str_split($numStr);
  $decodingsCount = 0;

  for ($i=0; $i <= count($numStrArr); $i++) {
    // For numbers with one or more consecutive pairs whose (pair) sum < 26
    $fibonacciIndex = 1;  // getFib() already takes into account the redundant 1 in the Fibonacci sequence
    $total = ($numStrArr[$i] . $numStrArr[$i+1]);
    $total = (int)$total;
    while (($numStrArr[$i] . $numStrArr[$i+1]) <= 26 && $i <= count($numStrArr)) {
      $fibonacciIndex++;
      $i++;
    }

    // If 2 or more consecutive numbers find decodings with Fibonacci, else add one to decoding count
    if ($fibonacciIndex > 1) {
      $decodingsCount += getFib($fibonacciIndex);
    }
    else if (($numStrArr[$i] . $numStrArr[$i+1]) > 26) {
      $decodingsCount++;
    }
  }
  echo $decodingsCount;
}

numValidDecodings(12);











 ?>

