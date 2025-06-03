document.getElementById('symptom-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const description = document.getElementById('description').value;
    const severity = document.getElementById('severity').value;
    const duration = document.getElementById('duration').value;
    
    const symptom = {
        date: date,
        time: time,
        description: description,
        severity: severity,
        duration: duration
    };
    
    let symptoms = JSON.parse(localStorage.getItem('symptoms')) || [];
    symptoms.push(symptom);
    localStorage.setItem('symptoms', JSON.stringify(symptoms));
    
    displaySymptoms();
    
    document.getElementById('symptom-form').reset();
});

function displaySymptoms() {
    const symptoms = JSON.parse(localStorage.getItem('symptoms')) || [];
    const symptomList = document.getElementById('symptom-list');
    
    symptomList.innerHTML = '';
    
    symptoms.forEach(symptom => {
        const li = document.createElement('li');
        li.textContent = `Date: ${symptom.date}, Time: ${symptom.time}, Description: ${symptom.description}, Severity: ${symptom.severity}, Duration: ${symptom.duration}`;
        symptomList.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', displaySymptoms);
