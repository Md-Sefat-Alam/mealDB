const buddyLoad = () => fetch("https://randomuser.me/api/?results=5").then(res => res.json()).then(data => buddyShow(data));

const buddyShow = (buddy) => {
    const buddyDiv = document.getElementById("buddyList");
    const buddyList = buddy.results
    for (const data of buddyList) {
        const div = document.createElement('div');
        div.innerText = `Name: ${data.name.title} ${data.name.fist} ${data.name.last}\nemail:  ${data.email}`;
        div.style.marginBottom = "20px"
        buddyDiv.appendChild(div);
    }
}