const form = document.querySelector("[data-js-form]");
const template = document.querySelector("[data-js-template]");
const wrapper = document.querySelector("[data-js-wrapper]")

function handleSubmit(event) {
    event.preventDefault();

    const rating = new FormData(event.target).get("rating")
    console.log(rating);

    if (rating) {
        wrapper.computedStyleMap.height = wrapper.offsetHeight + "px";
        wrapper.innerHTML = template.innerHTML.replace(/{{ rating }}/, rating);
    }
    
}


form.addEventListener("submit", handleSubmit);