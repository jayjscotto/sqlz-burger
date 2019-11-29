$(document).ready(function () {

    $(document).on('click', '#burger-submit', function(e) {
        //prevent refresh
        e.preventDefault();

        //assign data to variable
        let burger =  {
            burger: $('#burger-input').val()
        }
        
        if (burger) {
            //post request to server to add burger
            $.ajax('/api/new-burger', {
                method: 'POST',
                data: burger
            }).then(function() {
                //reload the page
                location.reload();
            });
        }
    });

    $(document).on('click', '.changeState', function(e) {
        let id = $(this).data('id');

        let eatState = {
            eaten: $(this).data('eaten')
        } 

        if (!eatState.eaten) {

            $.ajax('/api/' + id, {
                method: 'PUT',
                data: eatState
            }).then(function() {

                location.reload();
            });

        } else if (eatState.eaten) {

            $.ajax('/api/' + id, {
                method: 'DELETE',
                data: eatState
            }).then(function() {
                location.reload();
            });
            
        }
    });

});