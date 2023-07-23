function modifyText() {
    const t2 = document.getElementById("hy");
    console.log(t2.firstChild);
    const Node = t2.firstChild.nodeValue === "popcorn";
    t2.firstChild.nodeValue = Node ? "cinnamoroll" : "popcorn";} 

const el = document.querySelector(".buttony");
el.addEventListener("click",modifyText,false);


