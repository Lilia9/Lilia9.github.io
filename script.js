document.addEventListener('DOMContentLoaded', () =>{
    const addBtn = document.querySelector('#add');
    const form = document.querySelector('.add-tech-skills');
    const addInput = document.querySelector('#add-tech-skills');
    const list = document.querySelector('.tech-skills');

    addBtn.addEventListener('click', () => {
        form.classList.remove("hidden");  
        addBtn.classList.add('hidden')
    });

    addInput.addEventListener('click', () => {
        const input = document.querySelector('.addInput');
    
        if(input.value.length === 0) return;
        let item = document.createElement('li');
        item.innerText = input.value;

        list.appendChild(item);

        form.classList.add("hidden");  
        addBtn.classList.remove('hidden')

        input.value = '';
    });
});