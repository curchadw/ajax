$.ajax('blah.txt').done(function(data){
   $('p').html(data);
}).fail(function(){
   alert('Could not retrieve data');
});
