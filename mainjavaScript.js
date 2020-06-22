var list = document.querySelector('.bgs ul');

list.addEventListener('click',function(e){
    if(e.target.className === 'buttonspan'){
        var li = e.target.parentElement;
        list.removeChild(li);

    }
})

var hide = document.getElementById('hide1');
hide.addEventListener('click',function(e){
    if(hide.checked == true){
        list.hidden= true;
    }else if(hide.checked == false){
        list.hidden= false;
    }
});