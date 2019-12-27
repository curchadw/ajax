$.ajax('Ajax.txt', function(data){
   alert(data);
}).fail(function(){
   alert('Could not retrieve data');
})
