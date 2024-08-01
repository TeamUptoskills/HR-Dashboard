document.getElementById("add-gstin-btn").onclick = function() {
    document.getElementById("gstin-modal").style.display = "block";
}

document.getElementsByClassName("billing-close")[0].onclick = function() {
    document.getElementById("gstin-modal").style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById("gstin-modal")) {
        document.getElementById("gstin-modal").style.display = "none";
    }
}

document.getElementById("billing-credits-plan-link").onclick = function() {
    window.location.href = "https://www.example.com/credits-plan";  // Replace with the actual URL
}
