let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
let timeString = hours + ":" + minutes + ":" + seconds;
let dateString = now.toDateString();
function date(){
    alert(timeString)
    alert(dateString)
}
function noth(name){
    const containerq = document.getElementById('mess');
    const newDivq = document.createElement('div');
    newDivq.className = 'new-divq';
    const newTextq = document.createElement('span');
    // Получаем текущую дату и время
let currentDate = new Date();
let formattedDate = currentDate.toLocaleString();
    newTextq.textContent = formattedDate + " "+name;
    newDivq.appendChild(newTextq);
    containerq.appendChild(newDivq);
}
function create(w,h,c,p,m,cl,t,bg){
    let createneworc = document.createElement('div');
    createneworc.style.width = w;
    createneworc.style.height = h;
    createneworc.style.backgroundColor = bg;
    createneworc.style.margin = m;
    createneworc.style.position = p;
    createneworc.style.color = c;
    createneworc.className = cl;   
    createneworc.textContent = t;   
    document.body.appendChild(createneworc);
    noth("Создан новый элемент с классом "+cl+" ( Действие от DotScript IDE )")
}
function correct(x,y,text1,text2){
    let result;
    if (x == y) {
      result = text1;
      alert(text1)
    } else {
      result =text2;
      alert(text2)
    }
    return result;
}
function save(name,textsave){
    localStorage.setItem(name, textsave);
    alert("save complite!")
}
function open(name){
    let c= localStorage.getItem(name);
    alert(c)
    localStoragevar = c
}
function file(link){
    location.href=link
}
function filesave(name,textfile){
    var textToSave = textfile;
    var blob = new Blob([textToSave], { type: 'text/plain' });
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = name;
    link.click();
}
function stylebox(backw,displayw,marginw,id,pad,cursorw,widthw,heightw){
    let stylediv = document.getElementById(id);
    stylediv.style.width = widthw;
    stylediv.style.height = heightw;
    stylediv.style.backgroundColor = backw;
    stylediv.style.margin = marginw;
    stylediv.style.position = pad;
    stylediv.style.display = displayw;
    stylediv.cursor = cursorw;   
}
function box(classname){
    document.addEventListener('DOMContentLoaded', function() {
        let box = document.createElement(div);
        box.className=classname;
        document.body.appendChild(box);
    });
}
function off(){
    location.reload()
}
function deletebox(clname){
    var element = document.querySelector('.' + clname);
    
    // Если элемент найден, удаляем его
    if (element) {
        element.remove();
        noth("Элемент с классом"+clname+"успешно удален! (действие от DotScript IDE)")
    } else {
        alert('Элемент с классом ' + className + ' не найден.');
        noth("Элемент не найден для удаления (действие от DotScript IDE)")

    }
}
function newnotf(norfname){
    noth(norfname)
    alert("Сообщение появилось в вкладке Сообщения")
}
    




 