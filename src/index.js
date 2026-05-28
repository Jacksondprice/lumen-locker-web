const express = require('express');
const classrooms = require('./routes/classrooms');

const app = express();
app.use(express.json());
app.use('/api/classrooms', classrooms);
app.get('/health', (_req, res) => res.json({ ok: true }));

const port = Number(process.env.PORT || 3000);
app.listen(port, () => console.log(`listening on ${port}`));
