// navbar


window.addEventListener("scroll",()=>{


let nav=document.getElementById("navbar");


if(window.scrollY>50)

nav.classList.add("active");


else

nav.classList.remove("active");


});






function toggleMenu(){


document
.querySelector(".nav-links")
.classList.toggle("show");


}








// typing


let text="Innovate. Create. Grow.";

let i=0;



function typing(){


if(i<text.length){


document.getElementById("typing")
.innerHTML+=text[i];


i++;


setTimeout(typing,100);


}


}


typing();







function explore(){


document
.getElementById("services")
.scrollIntoView({

behavior:"smooth"

});


}







function showService(type){


let box=document.getElementById("service-info");



if(type=="AI"){


box.innerHTML=

`
<h2>🤖 AI Solutions</h2>

<p>
We build AI applications,
automation tools and smart chatbots
for businesses.
</p>

`;

}





if(type=="WEB"){


box.innerHTML=

`
<h2>💻 Web Development</h2>

<p>
We create responsive websites,
web apps and modern user interfaces.
</p>

`;

}




if(type=="CLOUD"){


box.innerHTML=

`
<h2>☁️ Cloud Services</h2>

<p>
We provide secure cloud hosting,
storage and scalable solutions.
</p>

`;

}


}