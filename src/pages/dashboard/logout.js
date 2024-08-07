document.getElementById('dynamic-iframe').onload = function() {
    var iframe = document.getElementById('dynamic-iframe');
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
};

document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('logoutModal');
    var closeBtn = document.querySelector('.close');
    var confirmLogoutBtn = document.getElementById('confirmLogout');
    var cancelLogoutBtn = document.getElementById('cancelLogout');

    window.logoutConfirmation = function(event) {
        event.preventDefault();
        modal.style.display = "block";
    }

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    cancelLogoutBtn.onclick = function() {
        modal.style.display = "none";
    }

    confirmLogoutBtn.onclick = function() {
        window.location.href = '../../index.html';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
