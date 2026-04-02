const urls = [
  'https://ibb.co/b5kY5Byn',
  'https://ibb.co/4R2QGMwc',
  'https://ibb.co/4RjsVJWg',
  'https://ibb.co/FbRqgd50',
  'https://ibb.co/Q3vYwJrf',
  'https://ibb.co/ycXSb6pR',
  'https://ibb.co/wtbwytd',
  'https://ibb.co/gMYZYCxC',
  'https://ibb.co/PG0t46CT',
  'https://ibb.co/HDnds29s',
  'https://ibb.co/TDSYDVkf',
  'https://ibb.co/Z6SMbwCC',
  'https://ibb.co/DDcwfFHL',
  'https://ibb.co/3HNdskR',
  'https://ibb.co/PstffWH8',
  'https://ibb.co/RmYdrj1'
];

async function fetchLinks() {
  for (const url of urls) {
    try {
      const res = await fetch(url);
      const text = await res.text();
      const match = text.match(/https:\/\/i\.ibb\.co\/[^\"\'\s]+/);
      console.log(`${url} -> ${match ? match[0] : 'NOT FOUND'}`);
    } catch (e) {
      console.error(`${url} -> ERROR`);
    }
  }
}

fetchLinks();
