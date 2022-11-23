var opened;
var ozadje;
var flag;

function openWin (id) {
    opened = document.getElementById(id);
    opened.style.display = "block";
    ozadje = document.getElementById("ozadje");
    ozadje.style.display = "block";
    flag = true;
};

function closeWin() {
    if (flag) {
        ozadje.style.display = "none";
        flag = false;
    }
    opened.style.display = "none";
};