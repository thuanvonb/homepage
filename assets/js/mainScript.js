$(function() {
    $(".resizeBtn").click(resize)
});

let savedSection = {};

function resize(e) {
    let t = e.target;
    let expand = t.innerHTML == "+"
    t.innerHTML = expand ? "-" : "+"
    let largeDiv = t.parentElement.parentElement;
    for (let i = 2; i < largeDiv.children.length; ++i) {
        if (expand)
            largeDiv.children[i].classList.remove("hideContent")
        else
            largeDiv.children[i].classList.add("hideContent")
    }
}

function activate(selector, id, classAdded='active') {
    let classes = $(selector)
    for (let i = 0; i < classes.length; ++i)
        classes[i].classList.remove("active")
    classes[id].classList.add("active")
}

function changeEdu(no) {
    activate("#educationDiv .batch", no-1);
    activate("#nodes .dot", no-1)
}

function langChange(ln) {
    if (ln == currentLang)
        return;
    let langTarget = lang[ln];
    for (let id in langTarget)
        $("#" + id).html(langTarget[id])
    for (let l in lang)
        $("#" + l).removeClass("langActive")
    $("#" + ln).addClass("langActive")
    currentLang = ln;
    ageCalc();
}