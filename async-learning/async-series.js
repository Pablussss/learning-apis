async.series([  
    function(callback){  
      setTimeout(function() {  
        callback(null, 'one');  
      }, 200);  
    },  
    function(callback){  
      setTimeout(function() {  
        callback(null, 'two');  
      }, 100);  
    }  
  ],  
  // optional callback  
  function(err, results){  
    // results is now equal to ['one', 'two']  
  });  