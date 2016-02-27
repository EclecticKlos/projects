<?php

/*
|--------------------------------------------------------------------------
| Linked Lists Practice
|--------------------------------------------------------------------------
|
| Here I am practicing linked lists from the DBC algorithm nights
|

For refactoring: previous in the case of being at the head node

*/

class Node {
  public $value;
  public $next;
  public $previous;

  function __construct($value){
    $this->value = $value;
    $this->next = NULL;
    $this->previous = NULL;
  }

  function readNode(){
    return $this->value;
  }

}

class Linked {
  private $head;
  private $current;

  function __construct() {
    $this->head = NULL;
    $this->current = NULL;
  }

  function add($value) {
    //If there is no head node
    if ($this->head === NULL) {
      $this->head = new Node($value);
    }
    //If the head node exists
    else {
      $this->current = $this->head;

      while ($this->current->next !== NULL) {
        $this->current = $this->current->next;
      }
        $this->current->previous = $this->current;
        // echo "Here is previous: ";
        // echo $this->current->previous->value;
        $node = new Node($value);
        $this->current->next = $node;
        // echo "Here is current: ";
        // echo $this->current->value;
        $this->current = $this->current->next;
    }
  }

  function dataExists($value) {
    $this->current = $this->head;
    while ($this->current !== NULL) {
      if ($this->current->value === $value) {
        return true;
      }
      else {
        $this->current = $this->current->next;
      }
    }
    return false;
  }

  // function nextNode($value) {
  //   if (dataExists($value) === true) {

  //   }

  // }

  // function prevousNode($value) {
  //   if ($this != $this->head) {
  //     return $this->prevoius;
  //   }
  // }

  function findTheIndex($value) {
    $index = 0;
    $this->current = $this->head;

    while ($this->current !== NULL) {
      if ($this->current->value === $value) {
        echo "Index = " . $index . "\n";
        return;
      }
      else {
        $this->current = $this->current->next;
        $index++;
      }
    }
      echo "Value not found."  . "\n";
  }

}

$dans_list = new Linked();
$dans_list->add(3);

$dans_list->add(4);
$dans_list->add(5);

//Should print the linked list of 3, 4 and 5
// print_r ($dans_list);

// Test for dataExists method, should echo TRUE and FALSE
if ($dans_list->dataExists(5) === true) echo "TRUE" . "\n";
if ($dans_list->dataExists(2) === false) echo "FALSE" . "\n";

// Test findTheIndex method, should echo "Value not found" and "Index = 1"
// $dans_list->findTheIndex(2);
// $dans_list->findTheIndex(4);


































































