$(document).ready(function () {

    //creates a div and ul
    let div = document.createElement('div');
    let ul = document.createElement('ul');
    $('body').append(div);
    $('div').append(ul);

    //creates li when button is clicked
    $('#btnSubmit').click(function () {
        let text = $('#textInput').val();
        let li = document.createElement('li');
        $(li).append(text);
        $('ul').append(li);
        //changes color of li text
        $(li).click(function () {
            let colors = ["blue", "green", "yellow", "orange", "red", "purple"];
            let randomColor = () => colors[Math.ceil(Math.random() * colors.length - 1)];
            this.style.color = randomColor();
        });
        //deletes li when dblclicked
        $(li).dblclick(function () {
            $(this).remove();
        });
        return false;
    });

    //if input text is > 0, the submit button is no longer disabled
    //calls action function when keyup on input box
    $('#textInput').on('keyup', action);
    function action() {
        if ($('#textInput').val().length > 0) {
            $('#btnSubmit').removeAttr('disabled');
        }
    };





    //not needed
    //hovering
    // $('h2').hover(function() {
    //     $(this).css({"background-color": "blue", "border-radius": "5px"});
    // }, function() {
    //     $(this).css({"background-color": "", "border-radius": ""});
    // });

});