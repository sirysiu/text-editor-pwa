const butInstall = document.getElementById('buttonInstall');

// Instructor Provided - 2024-03-07
window.addEventListener('beforeinstallprompt', (event) => {
  window.deferredPrompt = event;
  butInstall.classList.toggle('hidden', false);
});

// Instructor Provided - 2024-03-07
butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) return;

  promptEvent.prompt();
  window.deferredPrompt = null;
  butInstall.classList.toggle('hidden', true);
});

// Instructor Provided - 2024-03-07
window.addEventListener('appinstalled', () => {
  window.deferredPrompt = null;
});
