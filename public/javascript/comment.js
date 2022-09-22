async function commentFormHandler(event) {
    event.preventDefault();
  
    const comment_text = document.querySelector('textarea[name="commentText"]').value.trim();
    const recipient_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const author_id = Math.floor(Math.random() * 10) + 1;
    
    console.log(recipient_id);

    if (comment_text) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({
          recipient_id,
          comment_text,
          author_id
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);