/*************** 
    CODE OUR TEAM
***************/

const personalInformation = document.getElementById('personal-information');

const teamInformation = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        photo: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        photo: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        photo: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: 'barbara-ramos-graphic-designer.jpg'
    }
]

let elementInformation = ''

for (let information of teamInformation) {
    
    console.log(information.name, information.role, information.photo)

    
    elementInformation += 
    `
    <div class="col-4">
    <img src="img/${information.photo}"> 
    <p class="pt-3">${information.name}</p>
    <p class="pb-3">${information.role}</p>
    </div>
    `
}

personalInformation.innerHTML = elementInformation