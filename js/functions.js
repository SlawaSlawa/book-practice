function checkForm(form) {
    console.log('object');
    const name = form.name.value
    const phone = form.phone.value
    let bad = ''

    if (name.length == 0) bad += 'Вы не ввели имя' + '\n'
    if (phone.length == 0) bad += 'Вы не ввели телефон' + '\n'

    if (bad) {
        alert(bad)
        return false
    }
    return true
}