const mongoose=require("mongoose");
main()
.then((res)=>{
    console.log("connection success");
})
.catch((err)=>{
    console.log(err);
})
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
};

const Chat=require("./models/chat");

const chats = [
    {
        from: "Aarav",
        to: "Vihaan",
        msg: "Hey, how's it going?",
        createdAt: new Date("2025-02-01")
    },
    {
        from: "Priya",
        to: "Ananya",
        msg: "Let's meet tomorrow!",
        createdAt: new Date("2025-02-02")
    },
    {
        from: "Sahil",
        to: "Om",
        msg: "Did you finish the project?",
        createdAt: new Date("2025-02-03")
    },
    {
        from: "Rohan",
        to: "Kabir",
        msg: "Game night at my place!",
        createdAt: new Date("2025-02-04")
    },
    {
        from: "Meera",
        to: "Aditi",
        msg: "Call me when free.",
        createdAt: new Date("2025-02-05")
    },
    {
        from: "Sanya",
        to: "Vikram",
        msg: "Check your email.",
        createdAt: new Date("2025-02-06")
    },
    {
        from: "Harsh",
        to: "Neha",
        msg: "Happy Birthday!! 🎉",
        createdAt: new Date("2025-02-07")
    },
    {
        from: "Aman",
        to: "Riya",
        msg: "Movie night this weekend?",
        createdAt: new Date("2025-02-08")
    },
    {
        from: "Krishna",
        to: "Aryan",
        msg: "Send me the notes please.",
        createdAt: new Date("2025-02-09")
    },
    {
        from: "Sneha",
        to: "Ishaan",
        msg: "Good morning ☀️",
        createdAt: new Date("2025-02-10")
    },
    {
        from: "Varun",
        to: "Pooja",
        msg: "Help me with assignment?",
        createdAt: new Date("2025-02-11")
    },
    {
        from: "Tanvi",
        to: "Yash",
        msg: "I'll be late.",
        createdAt: new Date("2025-02-12")
    },
    {
        from: "Raj",
        to: "Mihir",
        msg: "Let's go for a run tomorrow.",
        createdAt: new Date("2025-02-13")
    },
    {
        from: "Kavya",
        to: "Divya",
        msg: "Can we reschedule our meet?",
        createdAt: new Date("2025-02-14")
    },
    {
        from: "Ankit",
        to: "Sameer",
        msg: "Meet me at the café at 5.",
        createdAt: new Date("2025-02-15")
    }
];




Chat.insertMany(chats);
