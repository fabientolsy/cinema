const accordeonItem = document.getElementsByClassName('accordeonItem');
const accordeonHeader = document.getElementsByClassName('accordeonItemHeader');

for (i = 0; i < accordeonHeader.length; i++){
    accordeonHeader[i].addEventListener('click', basculerItem);
}
function basculerItem(){
    let itemClass = this.parentNode.className;
    for (i = 0; i < accordeonItem.length; i++){
        accordeonItem[i].className = 'accordeonItem fermer';
    }
    if (itemClass == 'accordeonItem fermer') {
        this.parentNode.className = 'accordeonItem ouvert'
    }
}