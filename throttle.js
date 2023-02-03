const btnElement = document.getElementById("click_btn");
const clickCountElement = document.getElementById("click_count");
const funCallElement = document.getElementById("function_count");
let clickedCount = 0;
let apiCallCount = 0;

// throttle code  using lodash starts here
// const apiCall = _.throttle(() => {
//     funCallElement.innerHTML = `api called ${++apiCallCount} times`;
// }, 800);

// throttle code  using lodash ends here

const myThrottle = (cb, delay) => {
    let lastEvent = 0;
    return (...args) => {
        let currentEvent = new Date().getTime();
        if (currentEvent - lastEvent < delay) return;
        lastEvent = currentEvent;
        return cb(...args);
    }
}

const apiCall = myThrottle(() => {
    funCallElement.innerHTML = `api function called ${++apiCallCount} times`;
}, 1000);

btnElement.addEventListener('click', () => {
    clickCountElement.innerHTML = `you clicked the button ${++clickedCount}`;
    apiCall();
});