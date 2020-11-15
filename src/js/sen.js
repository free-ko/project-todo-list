const sentence = document.querySelector('.sentence');
const Quotation = sentence.querySelector('span');
const Quotations = new Array()
const whichQuotation = Math.floor(Math.random()*10);


// 명언들
Quotations[0] = "Be true to thyself.";
Quotations[1] = "Life is a choice.";
Quotations[2] = "Live Well, Love Much, Laugh Often.";
Quotations[3] = "Follow your heart.";
Quotations[4] = "Never stop believing.";
Quotations[5] = "Attitude is everything.";
Quotations[6] = "Never give up.";
Quotations[7] = "Don't sweat the small stuff.";
Quotations[8] = "Faith makes all things possible.";
Quotations[9] = "Don't dream it, be it.";



function showQuotation(){
    Quotation.innerText = Quotations[whichQuotation]
    
}

function init() {
    showQuotation();
}

init()

