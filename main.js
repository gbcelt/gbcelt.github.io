(function (document) {
    var decodedEmail = false;

    function decodeEmail() {
        if (decodedEmail) return;
        var addr = atob(this.dataset.addr);
        this.href = 'mailto:' + addr + '?subject=Steel Detailing Request';
        decodedEmail = true;
    }

    document.getElementById("email").onfocus = decodeEmail;
})(document);