var dtbElement = document.getElementById('dtb');

function dtb() {
        dtbElement.textContent = new Date().toString();
    }
    
    setInterval(dtb, 1000);
