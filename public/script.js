document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('personForm');
    const peopleList = document.getElementById('peopleList');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const data = {
            nome: formData.get('nome'),
            cpf: formData.get('cpf'),
            telefone: formData.get('telefone')
        };

        try {
            await fetch('http://localhost:3000/api/pessoas', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            form.reset();
            loadPeople();
        } catch (error) {
            console.error('Erro ao cadastrar pessoa:', error);
        }
    });

    const loadPeople = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/pessoas');
            const people = await response.json();
            peopleList.innerHTML = people.map(person => `
                <li>${person.nome} - ${person.cpf} - ${person.telefone}</li>
            `).join('');
        } catch (error) {
            console.error('Erro ao carregar pessoas:', error);
        }
    };

    loadPeople();
});
