document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Implement login logic here
            window.location.href = 'profile.html';
        });
    }

    const profileForm = document.getElementById('profileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Implement profile update logic here
            window.location.href = 'questions.html';
        });
    }

    const questionsForm = document.getElementById('questionsForm');
    if (questionsForm) {
        questionsForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Implement question selection logic here
            window.location.href = 'answers.html';
        });
    }

    const answersForm = document.getElementById('answersForm');
    if (answersForm) {
        answersForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Implement answer submission logic here
            window.location.href = 'submit.html';
        });
    }
});
