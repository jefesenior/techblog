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
document.addEventListener('DOMContentLoaded', function() {
    var contactForm = document.getElementById('contactForm');
    var responseDiv = document.getElementById('response');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form data
        var formData = new FormData(contactForm);

        // Send form data to server using AJAX
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'process_form.php'); // Change 'process_form.php' to your server-side script
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onload = function() {
            if (xhr.status === 200) {
                responseDiv.innerHTML = xhr.responseText;
                contactForm.reset(); // Reset the form
            } else {
                responseDiv.innerHTML = 'Error: ' + xhr.status;
            }
        };
        xhr.send(new URLSearchParams(formData)); // Send form data
    });
});
