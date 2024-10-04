function submitForm() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const selectedExams = Array.from(checkboxes).map(checkbox => checkbox.value);
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = selectedExams.length > 0 ? 'You selected: ' + selectedExams.join(', ') : 'No exams selected';

    const buttonele=document.createElement('div')
    buttonele.id="buttonele"
    buttonele.innerHTML=`
    <a href="../selectcollege/inputpage.html">
        <button id="select-college-button" class="submit-btn">lets select college</button>
    </a>
    `

    if(selectedExams.length!=0){
        const parent_=document.getElementById("form-container")
        parent_.appendChild(buttonele)

        const oldbutton=document.getElementById("submit-btn")
        oldbutton.remove()

        
    }
}