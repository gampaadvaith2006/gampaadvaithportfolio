/**
 * Simple script to generate a valid PDF resume placeholder
 */
import fs from 'node:fs';
import path from 'node:path';

const pdfContent = `%PDF-1.4
1 0 obj
<<
  /Type /Catalog
  /Pages 2 0 R
>>
endobj
2 0 obj
<<
  /Type /Pages
  /Kids [3 0 R]
  /Count 1
>>
endobj
3 0 obj
<<
  /Type /Page
  /Parent 2 0 R
  /MediaBox [0 0 595 842]
  /Contents 4 0 R
  /Resources <<
    /Font <<
      /F1 5 0 R
      /F2 6 0 R
    >>
  >>
>>
endobj
4 0 obj
<<
  /Length 1240
>>
stream
BT
/F1 22 Tf
50 780 Td
(GAMPA ADVAITH) Tj
/F2 12 Tf
0 -25 Td
(Aspiring Full-Stack Developer & AI/ML Engineer) Tj
0 -20 Td
(Email: gampaadvaith2006@gmail.com  |  GitHub: github.com/gampaadvaith2006) Tj
0 -15 Td
(Location: Hyderabad, Telangana, India) Tj
0 -30 Td
/F1 14 Tf
(EDUCATION) Tj
/F2 11 Tf
0 -18 Td
(B.Tech in Computer Science and Engineering - AI & Machine Learning) Tj
0 -15 Td
(St Peter's Engineering College) Tj
0 -30 Td
/F1 14 Tf
(TECHNICAL SKILLS) Tj
/F2 10 Tf
0 -18 Td
(Programming: Python, C, JavaScript, Node.js & Express, HTML, CSS) Tj
0 -15 Td
(AI & Automation: Artificial Intelligence, Machine Learning, OpenRouter, UiPath) Tj
0 -15 Td
(Tools & Architecture: Git & GitHub, REST APIs, Database Fundamentals, Cloud PaaS) Tj
0 -30 Td
/F1 14 Tf
(FEATURED PROJECTS) Tj
/F2 10 Tf
0 -18 Td
(1. SureDeal - AI Shopping Companion (Live Demo: https://suredeal.store)) Tj
0 -13 Td
(   Price comparison, discount validation, and historical deal analysis.) Tj
0 -18 Td
(2. TruthLens AI - Content Verification (Live Demo: onrender.com)) Tj
0 -13 Td
(   Automated claim examination and balanced evidence retrieval platform.) Tj
0 -18 Td
(3. Auto-Pilot AI Video Studio (GitHub: github.com/gampaadvaith2006/AUTO-PILOT-AI-VIDEO-STUDIO)) Tj
0 -13 Td
(   Multimodal automated script-to-video synthesis pipeline.) Tj
0 -18 Td
(4. Short Factory - In Active Development) Tj
0 -13 Td
(   High-throughput 9:16 short-form video generation engine.) Tj
0 -40 Td
/F2 9 Tf
([Note: Replace this file at public/assets/Gampa_Advaith_Resume.pdf with your custom PDF]) Tj
ET
endstream
endobj
5 0 obj
<<
  /Type /Font
  /Subtype /Type1
  /BaseFont /Helvetica-Bold
>>
endobj
6 0 obj
<<
  /Type /Font
  /Subtype /Type1
  /BaseFont /Helvetica
>>
endobj
xref
0 7
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000266 00000 n 
0000001558 00000 n 
0000001629 00000 n 
trailer
<<
  /Size 7
  /Root 1 0 R
>>
startxref
1695
%%EOF`;

const destPath = path.resolve('public/assets/Gampa_Advaith_Resume.pdf');
fs.writeFileSync(destPath, pdfContent);
console.log('Resume PDF created successfully at:', destPath);
