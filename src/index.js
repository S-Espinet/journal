import $ from 'jquery';
import {Entry} from './journal.js';

$(document).ready(function(){
  $("form#words").submit(function(event){
    event.preventDefault();
    let input = $("#text-passage").val();
    let userInput = new Entry (input);
    wordCount = userInput.wordCounter();
    $("#all-words").html(wordCount);
    /*$("#all-words").html("<p>" + wordCount + "<span id='all-words'></span></p>");*/

  });
});