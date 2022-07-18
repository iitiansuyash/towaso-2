const express = require('express');
const path = require('path');
const fileupload = require('express-fileupload');

let initial_path = path.join(__dirname, "public");

const app = express();
app.use(express.static(initial_path));
app.use(fileupload());

app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "index.html"));
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(initial_path, "about.html"));
})

app.get('/services', (req, res) => {
    res.sendFile(path.join(initial_path, "services.html"));
})

app.get('/gallery', (req, res) => {
    res.sendFile(path.join(initial_path, "gallery.html"));
})

app.get('/contact', (req, res) => {
    res.sendFile(path.join(initial_path, "contact.html"));
})

app.get('/team', (req, res) => {
    res.sendFile(path.join(initial_path, "team.html"));
})

app.get('/project', (req, res) => {
    res.sendFile(path.join(initial_path, "project.html"));
})

app.get('/shop', (req, res) => {
    res.sendFile(path.join(initial_path, "shop.html"));
})

app.get('/client01', (req, res) => {
    res.sendFile(path.join(initial_path, "client01.html"));
})

app.get('/client02', (req, res) => {
    res.sendFile(path.join(initial_path, "client02.html"));
})

app.get('/client03', (req, res) => {
    res.sendFile(path.join(initial_path, "client03.html"));
})

app.get('/client04', (req, res) => {
    res.sendFile(path.join(initial_path, "client04.html"));
})

app.get('/client05', (req, res) => {
    res.sendFile(path.join(initial_path, "client05.html"));
})

app.get('/client06', (req, res) => {
    res.sendFile(path.join(initial_path, "client06.html"));
})

app.get('/client07', (req, res) => {
    res.sendFile(path.join(initial_path, "client07.html"));
})

app.get('/client08', (req, res) => {
    res.sendFile(path.join(initial_path, "client08.html"));
})

app.get('/client09', (req, res) => {
    res.sendFile(path.join(initial_path, "client09.html"));
})

app.get('/blogs', (req, res) => {
    res.sendFile(path.join(initial_path, "blogs.html"));
})

app.get('/editor', (req, res) => {
    res.sendFile(path.join(initial_path, "editor.html"));
})

// upload link
app.post('/upload', (req, res) => {
    let file = req.files.image;
    let date = new Date();
    // image name
    let imagename = date.getDate() + date.getTime() + file.name;
    // image upload path
    let path = 'public/uploads/' + imagename;

    // create upload
    file.mv(path, (err, result) => {
        if(err){
            throw err;
        } else{
            // our image upload path
            res.json(`uploads/${imagename}`)
        }
    })
})

app.get("/admin", (req, res) => {
    res.sendFile(path.join(initial_path, "dashboard.html"));
})

app.get("/:blog", (req, res) => {
    res.sendFile(path.join(initial_path, "blog.html"));
})

app.use((req, res) => {
    res.json("404");
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port 3000');
})