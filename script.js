const tagsEl = document.getElementById('tags')
console.log(tagsEl)
const textarea = document.querySelector("#textarea");

textarea.focus();

textarea.addEventListener("keyup", function(e){
    createTags(this.value);

    if(e.key === 'Enter'){
        // clearing the text area
        e.target.value = "";

        randomSelect();
    }
})


function createTags(input){
    // creating tags of that we were enter when we type ,
    const tags = input.split(",").filter(tag => tag.trim() != "").map(tag => tag.trim());
    
    tagsEl.innerHTML = ""

    tags.forEach(tag => {
        const tagEl = document.createElement("span"); // creating a new element
        tagEl.classList.add("tag");   // adding a tag class to the newly created element above
        tagEl.innerText = tag;    
        tagsEl.appendChild(tagEl)   // add the above new element to parent div having id="tags"
    })
}

function randomSelect(){
    const times = 30;

    // for highlighting the tags at 0.1s interval
    const interval = setInterval(() => {
        const randomTag = pickRandomTag();

        highlightTag(randomTag);

        setTimeout(() => {
            unHighlightTag(randomTag);
        }, 100);
    }, 100);

    // for stop highlighting(means unHighlight) the tag i.e. stop the above running interval
    setTimeout(() => {
        clearInterval(interval);

        // select anyone tag
        setTimeout(() => {
            const randomTag = pickRandomTag();

            highlightTag(randomTag);
        }, 100);

    }, times * 100);
}


// for picking any random tag
function pickRandomTag() {
    const tags = document.querySelectorAll(".tag");
    return tags[Math.floor(Math.random()*tags.length)];
}


// for highlighting the tag
function highlightTag(tag){
    tag.classList.add("highlight");
}

// for UnHighlighting the tag
function unHighlightTag(tag){
    tag.classList.remove("highlight");
}