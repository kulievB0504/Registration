let form = document.forms.signup
let inputs = form.querySelectorAll('input')
let success = document.querySelector('#success')
let error = document.querySelector('#error')
let pattern = {
    name: /^[a-zA-Zа-яА-Я]+$/,
    mom: /^[a-zA-Zа-яА-Я]+$/,
    dad: /^[a-zA-Zа-яА-Я]+$/,
    itself: /^[a-zA-Zа-яА-Я]+$/,
    js: /^[a-zA-Zа-яА-Я]+$/,
    css: /^[a-zA-Zа-яА-Я]+$/,
    html: /^[a-zA-Zа-яА-Я]+$/,
    car: /^[a-zA-Zа-яА-Я]+$/,
    surname: /^[a-zA-Zа-яА-Я]+(-[a-zA-Zа-яА-Я]+)?$/,
    email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    phone: /^998(9[012345789]|6[125679]|7[01234569])[0-9]{7}$/,
    age: /^([8-9]|[1-9][0-9]|100)$/,

}



inputs.forEach(inp => {
    inp.onkeyup = () => {
        if (pattern[inp.name].test(inp.value)) {
            inp.parentElement.classList.remove('error')
        } else {
            inp.parentElement.classList.add('error')
        }
    }
})


form.onsubmit = (event) => {
    event.preventDefault();

    let success_counter = 0
    let error_counter = 0


    inputs.forEach(inp => {
        if (pattern[inp.name].test(inp.value)) {
            inp.parentElement.classList.remove('error')
            success_counter++
        } else {
            inp.parentElement.classList.add('error')
            error_counter++
        }
    })

    success.innerHTML = `Success: ${ success_counter } /12`;
    error.innerHTML = `Error: ${ error_counter } /12`;

    if (error_counter === 0) {
        submit(form)
    } else {
        alert('Error')
    }

}

function submit(form) {
    let user = {}

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })
    console.log(user);

    form.reset()
}