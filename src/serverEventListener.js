import { serverEvents } from './index.js';

serverEvents.on('started', () => {
  console.log("Le serveur a démarré avec succès");
});

serverEvents.on('error', (err) => {
  console.error("Erreur lors du démarrage du serveur:", err);
  process.exit(1);
});
