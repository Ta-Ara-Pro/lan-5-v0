import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

try {
  // Read manifest file
  const manifestPath = join(__dirname, '../dist/manifest.webmanifest');
  const rawData = readFileSync(manifestPath, 'utf8');
  
  // Parse and validate
  const manifest = JSON.parse(rawData);
  const requiredFields = ['name', 'short_name', 'start_url', 'display'];
  const missingFields = requiredFields.filter(field => !manifest[field]);

  if (missingFields.length > 0) {
    throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
  }

  console.log('✅ Manifest is valid:');
  console.log(JSON.stringify(manifest, null, 2));
} catch (error) {
  console.error('❌ Manifest validation failed:', error.message);
  process.exit(1);
}