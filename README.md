What is Z.i.t.e .js ?



An ultra light weight (16 kilobyte) Model View ViewModel (MVVM) framework. Designed to be small.


Files (Easy logic)

-base.js

Its a lightweight object minifyer. 

I(element) = document.getElementById(element)
Is(element) = document.getElementById(element).style
Iv(element) = document.getElementById(element).value
Ii(element) = document.getElementById(element).innerHTML 



-init.js

Init toolkit (comparable to the unix boot init). It has 10 levels to allow the boot sequence of a web page.


 init.a(function, level, place) function, level(0-9) place(0=boot or 1=shotdown)

example :
init.a(function(){alert("Hello Leo!")},5); And when the page has loaded we have a message.
init.a(function(){alert("ByeBye Leo!")},5,1) And when we close the page the page displays the message



-screen

-net.js

-error.js

-key.js

-touch.js

-mouse.js

-cron.js

-stat.js

-model.js

-animation.js

css animation maker. That will be later



Benefits:
I designed these modules to be lightweight and tuneable.  Using them will save many hours of coding Java Script.


History.
5 years ago I started working with angularjs. I found it to be simple – but slow and hugh.
For this reason I started coding modules that I could use every time rather than hand code.
The size of the code is always a factor in website page loads and finaly I maded a 3 megabite website. 
I  wasn't satisfied. After I was asked to produce an mvvm project with an mvc framework, 
I realised if I wanted to make a quality website, I would have to make my own mvvm toolkit. 
That was 4 year ago. Now I have an ADA based server engine, with a really soft frontend framework.
In the hope that it can help others I have made my code free via the General Public License.


