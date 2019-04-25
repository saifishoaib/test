    /*function message()
    {
        console.log('welcome function');
    }

    (function(){
        //anonmysus function
    console.log('welcome to anonymous function');
    })();
    var myfunct = function()
    {
        console.log('welcome to variable function');
    }
    myfunct();
    message();
    function message(age, callback)
    {
          if(age>20 && age<50)
        { 
            callback(true);
        }
         else
        {
            callback(false);
        }
    }
    message(25,function(check){
    if(check){
    console.log('You are Allowed');

    }
    else
    {
        console.log('You ar not allowred');
    }
});
$.get('https://jsonplaceholder.typicode.com/posts')
.done(function(data){
$.map(data,function(rec){
if(rec)
{
    $.get('https://jsonplaceholder.typicode.com/posts?userId='+rec.id)
    .done(function(data){
        console.log(data);
    });
    $.get('https://jsonplaceholder.typicode.com/posts?userId='+rec.id)
    .done(function(data){
    $.map(data,function(rec){
        if(rec)
        {
            $.get('https://jsonplaceholder.typicode.com/albums?photoId='+rec.id)
            .done(function(data){
console.log(data);
            });

            
        }
    })
    });
}
});

});
function fetchData(url,callback)
{
    $.get(url)
    .done(function(data){
        $.map(data,function(rec){
callback(rec);
        });
    });
    
}
fetchData('https://jsonplaceholder.typicode.com/users',function(user){
fetchData('https://jsonplaceholder.typicode.com/posts?userId='+user.id,function(user){
    console.log(posts);
})
fetchData('https://jsonplaceholder.typicode.com/albums?userId'+user.id,function(album){
    fetchData('https://jsonplaceholder.typicode.com/photos?userId'+album.id,function(photos){
console.log(photos);
    });
})
});*/
class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }


 Rectangle.ProtoArea()
{
	
	console.log(this.w * this.h);    

}
}
class Square extends Rectangle {
    constructor() {
		super();
        super.Area();

    }
}
let obj = new Square();
console.log('hellow world');
