// delete element
var list = document.querySelector('.bgs ul');

list.addEventListener('click',function(e){
    if(e.target.className === 'buttonspan'){
        var li = e.target.parentElement;
        list.removeChild(li);

    }
});

// hide element
var hide = document.getElementById('hide1');
hide.addEventListener('click',function(e){
    if(hide.checked == true){
        list.hidden= true;
    }else if(hide.checked == false){
        list.hidden= false;
    }
});

// add element

var form = document.forms['add'];
form.addEventListener('sumbit',function(e){
    
    e.preventDefault(); 
    
    var val1=form.querySelector('input[type="text"]').value;
    console.log(val1)
    
    var li=document.createElement('li');
    
    var label=document.createElement('label');
    
    var buttonspan=document.createElement('button');
    
    li.appendChild(label);
    li.appendChild(buttonspan);
    list.appendChild(li);

    label.textContent = val1;
    buttonspan.textContent = 'label';
    
    label.classList.add('name');
    buttonspan.classList.add('Submitspan');

});



