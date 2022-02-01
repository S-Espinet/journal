import $ from 'jquery';
import {Entry} from './journal.js';

$(document).ready(function(){
  $("form#words").submit(function(event){
    event.preventDefault();
    let input = $("#text-passage").val();
    let userInput = new Entry (input);
    let wordCount = userInput.wordCounter();
    $("#all-words").html(wordCount);
    let test = userInput.getTeaser();
    $("#teaser").html(test);
    
  });
});