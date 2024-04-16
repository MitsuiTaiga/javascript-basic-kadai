const addBtn = document.getElementById('btn');

const Text =document.getElementById('text');

addBtn.addEventListener('click', ()=> {
    const list = document.createElement('text');

    list.textContent = 'ボタンをクリックしました';

    Text.removeChild(Text.firstChild);

    Text.appendChild(list);
    
});