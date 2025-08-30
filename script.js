document.addEventListener('DOMContentLoaded', function() {
  var shareBtn = document.querySelector('.n_right a[href*="share.png"]');
  if (shareBtn) {
    shareBtn.addEventListener('click', function(e) {
      e.preventDefault();
      if (navigator.share) {
        navigator.share({
          title: "Shubh's Portfolio",
          text: "Check out my portfolio!",
          url: window.location.href
        });
      } else {
        navigator.clipboard.writeText(window.location.href);
        alert('Portfolio link copied to clipboard!');
      }
    });
  }
});
