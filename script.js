$(document).ready(function() {
    // Capture clicks on links with class "nav-button"
    $('.nav-button').click(function(event) {
        event.preventDefault(); // Prevent default link behavior
        var url = $(this).attr('href'); // Get the URL of the clicked link
        
        // Use AJAX to load content from the URL
        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'html',
            success: function(response) {
                $('#content-container').html(response); // Replace content in div with loaded content
            },
            error: function(xhr, status, error) {
                console.error('Error loading content:', error);
            }
        });
    });
});
