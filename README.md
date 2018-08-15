# jqueryWarmup
#### Instructions
* Fork and clone this repo to do it on your own. Submit a pull request when you get it working.

* In your app.js file, using jQuery, create an on.('click', function(){//something here}) event for the button with the id of 'addButton'

* Within the function of that click event create a for loop like this:
```
for(var i = 0;i <= 11;i++){
//do magic here

}
```
* On every iteration of the for loop, append a new paragraph tag with some text inside of the div with an id of 'containingDiv'. Now try opening your html file in your browser, and if you click that button you should see those 11 paragraph tags get created

* Now, add an on.('click', function(){//something here}) event for the button with an id of 'removeButton'.In the function of that click event, check the value of the input with an id of 'removeInput' , and if the value of the input is 'delete' then run another for loop that will remove all of the paragraph tags you originally created

* Hint:
```
$('#containingDiv').children('p').each(function() {

});

```
