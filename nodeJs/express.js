import express from 'express'; 
const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Dynamic route example (optional)
app.get('/:para', (req, res) => {
    res.send(`Hello ${req.params.para}`);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
