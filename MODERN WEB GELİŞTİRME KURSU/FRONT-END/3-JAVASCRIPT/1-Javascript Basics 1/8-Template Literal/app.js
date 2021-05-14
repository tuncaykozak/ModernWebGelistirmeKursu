const name = "Tuncay Kozak";
const department = "Bilisim";
const salary = 4000;

//const a = "Isim: " + name + "\n" + "Departman: " + department + "\n" + "Maas: " + salary;

//const a = `Isim: ${name}\nDepartman: ${department}\nMaas: ${salary}`;

//console.log(a);

// const html = "<ul> " +
//     "<li>" + name + "</li>" +
//     "<li>" + department + "</li>" +
//     "<li>" + salary + "</li>" +
//     "</u;>";

function a() {
    return "Merhaba";
}

const html = `
            <ul>
                <li> ${name}</li>
                <li> ${department}</li>   
                <li> ${salary}</li>  
                <li> ${10 /4}</li>
                <li> ${a()}</li>
            </ul>  
                    `;

document.body.innerHTML = html;