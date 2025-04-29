let textarea = document.getElementById("textarea");
let quizForm = document.getElementById('quizForm');

function getData() {
    let text = textarea.value
    // console.log(text);

    if (text === "") {
        Swal.fire({
            icon: 'warning',
            title: 'No Input Found',
            text: 'Please write something in the textarea before submitting.'
        });
        return;
    }

    let lines = text.split("\n");
    // console.log(lines);

    let result = [];

    lines.forEach(line => {
        line = line.trim()

        if (line === "") {
            return;
        }
        // console.log(line);
        result.push(line)
    });

    // console.log(result);

    let temp = [];
    let finalResult = [];

    for (let i = 0; i < result.length; i++) {
        temp.push(result[i])
        // console.log(temp);

        if (temp.length === 5) {
            let obj = {
                question: temp[0],
                option1: temp[1],
                option2: temp[2],
                option3: temp[3],
                option4: temp[4]
            };

            finalResult.push(obj);
            temp = [];
        } 
    }
    
    if (temp.length > 0 && temp.length < 5) {
        Swal.fire({
            icon: 'warning',
            title: 'Incomplete Entry',
            text: 'Please make sure each question has exactly 4 options.'
        });
    }

    // console.log(finalResult);

    let inputSection = document.getElementById('inputSection');
    document.getElementById('answerSubmit').style.display = 'block'
    inputSection.remove();

    finalResult.forEach((q, index) => {
        // console.log(q.question);
        // console.log(index);

        
            quizForm.innerHTML += `<div class="card mb-4 shadow-sm">
            <div class="card-body">
            <h5 class="card-title">Q${index + 1}: ${q.question}</h5>

            <div class="form-check">
                <input class="form-check-input" type="radio" name="q${index}" id="q${index}option1" value="option1">
                <label class="form-check-label" for="q${index}option1">${q.option1}</label>
            </div>

            <div class="form-check">
                <input class="form-check-input" type="radio" name="q${index}" id="q${index}option2" value="option2">
                <label class="form-check-label" for="q${index}option2">${q.option2}</label>
            </div>

            <div class="form-check">
                <input class="form-check-input" type="radio" name="q${index}" id="q${index}option3" value="option3">
                <label class="form-check-label" for="q${index}option3">${q.option3}</label>
            </div>

            <div class="form-check">
                <input class="form-check-input" type="radio" name="q${index}" id="q${index}option4" value="option4">
                <label class="form-check-label" for="q${index}option4">${q.option4}</label>
            </div>

            </div>
        </div>`
    }); 

    // openFullscreen();

}

function submitAnswer() {
    
}


function openFullscreen() {
    let elem = document.documentElement; 

    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { 
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { 
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
}

document.addEventListener("fullscreenchange", function() {
    if (!document.fullscreenElement) {
        location.reload(); 
    }
});



document.getElementById("rulesButton").addEventListener("click", function() {
    Swal.fire({
        title: '<strong>Rules & Regulations</strong>',
        html: `
            <ul>
                 <li>The question will be written first, followed by four options.</li>
                <li><strong>Only four options are allowed</strong> for each question.</li>
                <li>The correct answer is marked with an <span class="text-success">*</span> sign.</li>
                <li>Please follow all instructions to avoid any issues.</li>
            </ul>`,
        icon: 'info',
        confirmButtonText: 'Got it!',
        customClass: {
            popup: 'bg-dark text-white', 
            title: 'fs-4 text-warning', 
            content: 'fs-5'
        }
    });
});
