const click_btn = document.querySelector("#click_btn");
const btnClickedElement = document.querySelector("#click_count");
const funCountElement = document.querySelector("#function_count");
let btnCount = 0;
let funCalled = 0;

// starting code of debounce using lodash
// const apiCall = _.debounce(() => {
//     funCountElement.innerHTML = `you called api ${++funCalled} times`;
// }, 800);

// ends code of debounce using lodash

const myDebounce = (cb, delay) => {
    let timer;
    return function () {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            cb();
        }, delay)
    }
}

const apiCall = myDebounce(() => {
    funCountElement.innerHTML = `you called api ${++funCalled} times`;
}, 800);

click_btn.addEventListener("click", () => {
    btnClickedElement.innerHTML = `you clicked button ${++btnCount} times`;
    apiCall();
})