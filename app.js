$(document).ready(function () {


    //gives alert when button is clicked
    $('#btnSubmit').click(function () {
        // let alertValue = $('#textInput').val();
        // alert(alertValue);
        let text = $('#textInput').val();
        $('h2').append(text);

    });

    //calls action function when keyup on input box
    $('#textInput').on('keyup', action);

    //if input text is > 0, the submit button is no longer disabled
    function action() {
        if ($('#textInput').val().length > 0) {
            $('#btnSubmit').removeAttr('disabled');
        }
    }

    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    $('body').append(div);
    $('div').append(h2);


});