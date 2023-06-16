$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();

        const tarefa = $('#tarefa').val();
        const novo_item = $(`<li style="display: none">${tarefa}</li>`);

        $(novo_item).click(function() {
            $(this).css('text-decoration', 'line-through');
        });

        $(novo_item).appendTo('ul');
        $(novo_item).fadeIn();
        $('#tarefa').val('');
    })
})