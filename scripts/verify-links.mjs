/**
 * Build-Time Link Verification Script for Gampa Advaith's Portfolio
 * Run with: npm run verify-links
 */

import https from 'node:https';
import http from 'node:http';

const targetUrls = [
  { id: 'suredeal', name: 'SureDeal Live Demo', url: 'https://suredeal.store' },
  { id: 'truthlens-raw', name: 'TruthLens AI (Supplied URL)', url: 'https://ai-content-verifier-dzya.onrender.com/?utm_source=chatgpt.com' },
  { id: 'truthlens-clean', name: 'TruthLens AI (Clean Canonical URL)', url: 'https://ai-content-verifier-dzya.onrender.com' },
  { id: 'autopilot-demo', name: 'Auto-Pilot AI Video Studio (AWS EB)', url: 'https://autopilot-ai-video-advaith.ap-south-2.elasticbeanstalk.com' },
  { id: 'autopilot-repo', name: 'Auto-Pilot AI Video Studio Repo', url: 'https://github.com/gampaadvaith2006/AUTO-PILOT-AI-VIDEO-STUDIO' },
  { id: 'github-profile', name: 'Gampa Advaith GitHub Profile', url: 'https://github.com/gampaadvaith2006' }
];

async function checkUrl(item) {
  return new Promise((resolve) => {
    const startTime = Date.now();
    try {
      const client = item.url.startsWith('https') ? https : http;
      const req = client.get(
        item.url,
        {
          headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) GampaPortfolioChecker/1.0' },
          timeout: 10000
        },
        (res) => {
          let body = '';
          res.on('data', (chunk) => {
            if (body.length < 50000) body += chunk;
          });
          res.on('end', () => {
            const duration = Date.now() - startTime;
            const titleMatch = body.match(/<title>(.*?)<\/title>/i);
            const title = titleMatch ? titleMatch[1].trim() : 'N/A';
            resolve({
              ...item,
              statusCode: res.statusCode,
              success: res.statusCode >= 200 && res.statusCode < 400,
              durationMs: duration,
              title,
              byteLength: body.length,
              redirect: res.headers.location || null
            });
          });
        }
      );

      req.on('error', (err) => {
        resolve({
          ...item,
          statusCode: null,
          success: false,
          durationMs: Date.now() - startTime,
          error: err.message
        });
      });

      req.on('timeout', () => {
        req.destroy();
        resolve({
          ...item,
          statusCode: null,
          success: false,
          durationMs: Date.now() - startTime,
          error: 'Connection timed out (10s)'
        });
      });
    } catch (e) {
      resolve({
        ...item,
        statusCode: null,
        success: false,
        durationMs: Date.now() - startTime,
        error: e.message
      });
    }
  });
}

console.log('='.repeat(70));
console.log('  GAMPA ADVAITH PORTFOLIO — LINK VERIFICATION REPORT');
console.log('='.repeat(70));
console.log(`Timestamp: ${new Date().toISOString()}\n`);

const results = [];
for (const target of targetUrls) {
  process.stdout.write(`Checking: ${target.name} ... `);
  const result = await checkUrl(target);
  results.push(result);
  if (result.success) {
    console.log(`[PASS] HTTP ${result.statusCode} (${result.durationMs}ms)`);
    if (result.title !== 'N/A') console.log(`   Page Title: "${result.title}"`);
  } else {
    console.log(`[ALERT] ${result.error || `HTTP ${result.statusCode}`}`);
  }
}

console.log('\n' + '='.repeat(70));
console.log('SUMMARY & CARD STATUS RECOMMENDATIONS');
console.log('='.repeat(70));
for (const r of results) {
  const badge = r.success ? 'LIVE' : 'DEMO UNAVAILABLE / SLEEPING';
  console.log(`* ${r.name.padEnd(45)} -> ${badge}`);
}
console.log('='.repeat(70));
