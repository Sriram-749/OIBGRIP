const input = document.querySelector('input')
const add = document.querySelector('.container > button')

add.addEventListener('click',addList);

function addList() {
    const completed = document.querySelector('.completed');
    const notCompleted = document.querySelector('.notCompleted');

    const newLi = document.createElement('li');
    const done = document.createElement('button');
    const trash = document.createElement('button');
    done.style.background = 'none';
    done.style.border = 'none';
    done.style.float = 'right';
    trash.style.background = 'none';
    trash.style.border = 'none';
    trash.style.float = 'right';

    done.innerHTML = '<span class="material-symbols-outlined">check</span>'
    trash.innerHTML = '<span class="material-symbols-outlined">delete</span>'

    if(input.value !== '') {
        newLi.textContent = input.value;
        input.value = '';
        notCompleted.appendChild(newLi);
        newLi.append(trash);
        newLi.appendChild(done);
    }

    done.addEventListener('click',function() {
        const parent = this.parentNode;
        parent.remove();
        completed.appendChild(parent);
        done.style.display='none';
    });
    trash.addEventListener('click',function() {
        const parent = this.parentNode;
        parent.remove();
    });
}