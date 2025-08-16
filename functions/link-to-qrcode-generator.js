function create_qr() {
    var MyURL = document.getElementById("MyURL").value;
    if(MyURL != "")
    {
        var api = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + encodeURIComponent(MyURL);
        document.getElementById("show_qr").innerHTML = '<br /><img src="' + api + '" style="width:200px;">';
        $('#show_qr').show();
    }else{
        document.getElementById("show_qr").innerHTML = '<br /><img src="assets/images/logos/freelist_logo.png" style="width:200px;">';
        $('#show_qr').hide();
    }
}