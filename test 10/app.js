const email = document.querySelector(".email")
const password = document.querySelector(".password")
const result = document.querySelector(".result")
const arry =[]

function showval(e) {
    e.preventDefault()
    result.innerHTML = '';
    console.log(email.value);
    console.log(password.value);

const user = {
    email: email.value,
    password: password.value,
}
arry.push(user)
// console.log(arr);
email.value = ''
password.value = ''


for (let i = 0; i < arry.length; i++) {
    result.innerHTML += `<p> Email: ${arry[i].email}</p>
    <p> Password: ${arry[i].password}</p>
    <button onclick="edit(${i})">edit</button>
    <button onclick="delete(${i})">delete</button>`
}


}

function edit(index) {
    // console.log(index)
    result.innerHTML = ''
    
    const chngEmail = prompt("Change Email",arry[index].Email)
    const chngPassword = prompt("Change Password",arry[index].Password)
    arry[index].Email=chngEmail;
    arry[index].Password=chngPassword;
    for (let i = 0; i < arry.length; i++) {
        // console.log(arry[i]);
        result.innerHTML += `<p>Email: ${arry[i].Email}</p>
    <p>Password:${arry[i].Password}</p>
    <button onclick="edit(${i})">Edit</button>
    <button onclick="delete(${i})">delete</button>
    `
}

}




function remove(index){
    // console.log(index);
result.innerHTML = ''

    arry.splice(index,1)
    for (let i = 0; i < arry.length; i++) {
        // console.log(arry[i]);
        result.innerHTML += `<p>Email: ${arry[i].Email}</p>
    <p>Password:${arry[i].Password}</p>
    <button onclick="edit(${i})">edit</button>
    <button onclick="delete(${i})">delete</button>
    `
    }


}
