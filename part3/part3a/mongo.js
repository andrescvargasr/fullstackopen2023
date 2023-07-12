const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log(
    "Please provide the password as an argument: node mongo.js <password>"
  );
  process.exit(1);
}

const password = process.argv[2];
const content = process.argv[3];
const important = process.argv[4];

mongoose.set("strictQuery", false);

const url = `mongodb+srv://fullstack:${password}@cluster0.72at7vc.mongodb.net/noteApp?retryWrites=true&w=majority`;

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(url);
}

// mongoose.connect(url);

const phoneSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
});

const Note = mongoose.model("Note", phoneSchema);

if (process.argv.length < 4) {
  Note.find({}).then((result) => {
    console.log("phonebook:");
    result.forEach((note) => {
      console.log(note.name, note.number);
    });
    mongoose.connection.close();
  });
} else {
  const note = new Note({
    content: content,
    important: important || false,
  });

  note.save().then((result) => {
    console.log(`added ${content} important ${important} to note`);
    mongoose.connection.close();
  });

  if (process.argv.length < 3) {
    console.log(
      "Please provide the password as an argument: node mongo.js <password>"
    );
    process.exit(1);
  }
}
