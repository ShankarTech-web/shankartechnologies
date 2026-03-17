let users = JSON.parse(localStorage.getItem('users'));
if (!users) {
    users = initialUsers;
    localStorage.setItem('users', JSON.stringify(users));
}

function signup() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        setMessage('message', 'Required fields missing');
        return;
    }

    if (users.find(u => u.email === email)) {
        setMessage('message', 'User already exists');
        return;
    }

    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));

    setMessage('message', 'Signup successful');
}

function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        window.location.href = 'dashboard.html';
    } else {
        setMessage('loginMessage', 'Invalid credentials');
    }
}

function logout() {
    window.location.href = 'login.html';
}

function setMessage(id, msg) {
    document.getElementById(id).innerText = msg;
}


