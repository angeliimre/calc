
const tomb = [ ...Array(10).keys(), '+', '-', '*', '/', 'C', '=' ]

let out='';
tomb.forEach(function(item){
    out+='<button>'+item+'</button>'
    
})

document.getElementById('buttons').innerHTML = out;


document.querySelectorAll('button').forEach(button=>{
    button.addEventListener('click', function(){
        alert( button.innerText )

        
    })
})    


