const search = function () {
    const input = document.querySelector('.search-block > input')
    const searchBtn = document.querySelector('.search-block > button')
    
    input.addEventListener('input',  (event) => {    /*() => {}  это сокращенное обозначение функции, event - аргумент функции, объект самого события*/
        console.log(event.target.value)

    })  

}
search()