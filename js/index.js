let currentYear = $("#year")
contactUs = $("#contact")
contactModal = $("#contactModal")

contactUs.on("click", ()=>{
    contactModal.show()
})

let Cyear = new Date().getFullYear();
console.log(Cyear);

currentYear.text(new Date().getFullYear());