
# 📄 Quiz Application – JavaScript Code Documentation

[Click me to see App Demo](https://smit-quizz.netlify.app/)

## 📌 Description
This JavaScript code implements a simple quiz application. Users can input questions and multiple-choice options into a textarea. Each question must have exactly four options, and the correct answer must begin with a colon `::` symbol. The questions are then displayed dynamically, and the quiz launches in fullscreen mode.

---

## 🧩 Main Elements

### HTML Elements Accessed
- **textarea** – Input area for user to type questions.
- **quizPage** – Container where quiz cards are displayed.
- **inputSection** – Section containing the textarea input (removed after starting the quiz).
- **answerSubmit** – Button to submit quiz answers (made visible on quiz start).

---

## 📥 Input Format
Each question should be written in the following format:

```
What is the capital of France?
Paris
::London
Berlin
Madrid
```

- The first line is the question.
- The next four lines are options.
- The correct option must begin with a colon `:`, e.g., `::London`.

---

## 📦 Functions

### ✅ getData()
Main function triggered when the user submits input.

- Validates input.
- Splits input into lines.
- Cleans and parses lines into question-objects.
- Stores correct answers (without `::`) in `saveCorrectAnswer`.
- Verifies that exactly four options are provided per question.
- Displays quiz questions as cards with radio buttons.
- Launches fullscreen mode.

---

### 💾 submitAnswer()
This function handles the answer submission logic by comparing the user's selected answers with the correct answers stored in the `saveCorrectAnswer` array. It calculates the total number of correct answers and displays the result in a SweetAlert popup with the user's score and total correct answers. After showing the results, the page reloads to reset the quiz.

#### Key Points:
- Loops through all questions to check if the user selected the correct option.
- Displays a result with total questions, correct answers, and score percentage.
- The page reloads after displaying the result.


### 🖥️ openFullscreen()
Triggers the browser’s fullscreen API for immersive quiz experience. 

---

### 🔄 Fullscreen Change Listener
Automatically reloads the page if the user exits fullscreen to prevent cheating or distraction.

```js
document.addEventListener("fullscreenchange", function() {
    if (!document.fullscreenElement) {
        location.reload(); 
    }
});
```

---

### ℹ️ rulesButton Event Listener
Displays a SweetAlert modal with quiz instructions when the user clicks the **"Rules & Regulations"** button.

---

## 📌 Important Rules

- Each question must be followed by four options only.
- The correct answer must start with `:`.
- The app will warn and prevent execution if a question has fewer than 4 options.
- Leaving fullscreen refreshes the page.

---

## 📂 Variables

| Variable           | Purpose                                          |
|--------------------|--------------------------------------------------|
| `textarea`         | Reference to input text area                     |
| `quizPage`         | Reference to quiz container                      |
| `saveCorrectAnswer`| Stores correct answers (cleaned)                 |
| `lines`, `result`, `temp`, `finalResult` | Used for parsing input into usable question data |

---

## 🛠 To-Do / Enhancements

- Implement logic in `submitAnswer()` to evaluate user responses.
- Add scoring and result display.
- Style the quiz layout for better UX.
- Support image-based questions or multimedia in the future.
