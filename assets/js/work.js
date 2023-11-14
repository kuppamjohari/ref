const counter = document.querySelector(".n-t-l");
async function updateActivity() {
    let response = await fetch(
        "https://o73g5ptpujgtclinhzhhneplje0jogoh.lambda-url.us-east-1.on.aws/"
    );
    let data = await response.json();
    counter.innerHTML = `Number of Login's : ${data}`;
}
updateActivity();