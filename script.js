// function hideWelcomeScreen() {
//     const welcomeScreen = document.getElementById('welcome-screen');

//     welcomeScreen.style.display = 'none';

// };

// scroll add sidebar

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");
  const sidebarLinks = document.querySelectorAll("#sidebar a");

  function highlightSidebarLink() {
    const currentSection = [...sections].find(
      (section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      }
    );

    sidebarLinks.forEach((link) => link.classList.remove("highlighted"));
    if (currentSection) {
      const correspondingLink = document.querySelector(`#sidebar a[href="#${currentSection.id}"]`);
      if (correspondingLink) {
        correspondingLink.classList.add("highlighted");
      }
    }
  }

  function throttle(func, delay) {
    let timeout;
    return function () {
      const context = this;
      const args = arguments;
      if (!timeout) {
        timeout = setTimeout(function () {
          timeout = null;
          func.apply(context, args);
        }, delay);
      }
    };
  }

  const throttledHighlight = throttle(highlightSidebarLink, 200);

  window.addEventListener("scroll", throttledHighlight);
  highlightSidebarLink(); // Initial call
});

// Scroll

document.addEventListener("DOMContentLoaded", function () {
  const duration = 800; // Adjust the duration as needed

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const targetOffset = targetElement.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: targetOffset,
          behavior: 'smooth'
        });
      }
    });
  });
});
