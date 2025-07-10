const jwt = require('jsonwebtoken');

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzZW51cmlramYxNkBnbWFpbC5jb20iLCJyb2xlIjoiVVNFUiIsImlhdCI6MTc1MTQ4MTk0OCwiZXhwIjoxNzUxNTY4MzQ4fQ.KB7CXe4t2-lGbkk9siP3-Y4fEv_po8CdQyAQT7Fkd1s';
const secret = 'u8N6Lq1FQsA97ZCr7s5e0w9Jp+RmVNxT2X1bHJ3yKZg=';

try {
  const payload = jwt.verify(token, secret);
  console.log('Verified payload:', payload);
} catch (err) {
  console.error('Verification failed:', err.message);
}
