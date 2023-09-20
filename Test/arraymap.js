const displayData = () => {
    const peoples = [
        {
            name: 'Nur Ahad',
            profession: 'Web Developer',
            sallary: 25000,
        },
        {
            name: 'Kazi Fahim',
            profession: 'Marketing Manager',
            sallary: 30000,
        },
        {
            name: 'Jakir Ahamed',
            profession: 'Teacher',
            sallary: 45000,
        },
        {
            name: 'Fatima Khanom',
            profession: 'Digital Marketar',
            sallary: 25000,
        }
    ]


    const peopleContainer = document.getElementById('container');

    peoples.map(people => {
        const innerDiv = document.createElement('div');
        innerDiv.classList.add('card');
            innerDiv.innerHTML = `
            <h4>${people.name}</h4>
            <p>${people.profession}</p>
            <p>${people.sallary}</p>
            <div>
                <button>Contact</button>
            </div>
            `;

        peopleContainer.appendChild(innerDiv);
    });
}

displayData();