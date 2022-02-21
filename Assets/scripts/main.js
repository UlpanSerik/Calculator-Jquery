$(document).ready(function(){

    $('#calculator').on('submit', function(e) {
        e.preventDefault();

        let numOne, numTwo, summ;

        numOne = $('#NumOne').val();
        numTwo = $('#NumTwo').val();

        numOne = parseInt(numOne);
        numTwo = parseInt(numTwo);

        summ = numOne + numTwo;

        $('#Sum').text(summ);

    })

})