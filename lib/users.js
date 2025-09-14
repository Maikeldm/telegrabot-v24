import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync, writeFileSync, readFileSync, rmSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DB_FILE = join(__dirname, '..', 'users.json');

// Crear automáticamente el archivo users.json si no existe
if (!existsSync(DB_FILE)) {
  writeFileSync(DB_FILE, '[]', 'utf8');
}

function loadUsers() {
  if (!existsSync(DB_FILE)) return [];
  try {
    return JSON.parse(readFileSync(DB_FILE, 'utf8'));
  } catch {
    return [];
  }
}

function saveUsers(users) {
  writeFileSync(DB_FILE, JSON.stringify(users, null, 2));
}

function getUser(telegram_id) {
  return new Promise((resolve) => {
    let users = loadUsers();
    let user = users.find(u => u.telegram_id == telegram_id);
    if (!user) {
      user = {
        telegram_id,
        whatsapp_number: "",
        is_admin: telegram_id === 7223378630 ? 1 : 0
      };
      users.push(user);
      saveUsers(users);
    }
    resolve(user);
  });
}

function updateUserWhatsapp(telegram_id, number) {
  return new Promise((resolve) => {
    let users = loadUsers();
    // Primero verificamos si el número ya está en uso
    let existing = users.find(u => u.whatsapp_number === number);
    if (existing) {
      // Si el número ya está en uso por otro usuario, lo limpiamos
      if (existing.telegram_id !== telegram_id) {
        existing.whatsapp_number = "";
      }
    }
    
    let user = users.find(u => u.telegram_id == telegram_id);
    if (user) {
      // Actualizamos el número del usuario actual
      user.whatsapp_number = number;
      user.last_connected = new Date().toISOString();
      saveUsers(users);
    }
    resolve(user);
  });
}

async function clearUserWhatsapp(telegram_id) {
  return new Promise((resolve) => {
    let users = loadUsers();
    let user = users.find(u => u.telegram_id == telegram_id);
    if (user) {
      user.whatsapp_number = "";
      saveUsers(users);
    }
    resolve();
  });
}

export async function isWhatsappConnected(telegram_id) {
  return new Promise((resolve) => {
    db.get('SELECT whatsapp_number FROM users WHERE telegram_id = ?', [telegram_id], (err, row) => {
      if (err || !row || !row.whatsapp_number) resolve(false);
      else {
        const pairingDir = path.join(__dirname, '..', 'lib', 'pairing', String(telegram_id), row.whatsapp_number);
        const credsPath = path.join(pairingDir, 'creds.json');
        resolve(fs.existsSync(credsPath));
      }
    });
  });
}

function isActive(user) {
  return true; // Ahora todos los usuarios están activos
}

// Declaración del objeto db
const db = {
  all: (query, params, cb) => {
    const localUsers = loadUsers(); // Usar variable local
    const filtered = localUsers.filter(u => u.whatsapp_number && u.whatsapp_number !== "");
    cb(null, filtered);
  }
};

// Asegurarse que solo haya una exportación al final del archivo
export {
  getUser,
  updateUserWhatsapp,
  clearUserWhatsapp,  // Solo una vez aquí
  isActive,
  db
};