const db = require('../database');

//db.get("PRAGMA foreign_keys",(err,row) => console.log(row));
//db.get("PRAGMA foreign_keys = ?",['ON'],(err,row)      pour activer les cle etrangere sinon bug...

db.run("CREATE TABLE utilisateur (id INTEGER PRIMARY KEY,email TEXT UNIQUE,first_name TEXT,last_name TEXT,password TEXT,isActif INTEGER)", (res,err) => {
    if(err)
        throw Error("bug create Table user");
    console.log("creation table user OK");
    db.run("CREATE TABLE list (id INTEGER PRIMARY KEY, name TEXT, user_id INTEGER NOT NULL,FOREIGN KEY(user_id) REFERENCES utilisateur(id))", (res,err) => {
        if(err)
            throw Error("bug create Table list");
        console.log("creation table list ok");
        db.run("CREATE TABLE task (id INTEGER PRIMARY KEY,label TEXT,user_id INTEGER NOT NULL,FOREIGN KEY(user_id) REFERENCES utilisateur(id))",(res,err) => {
            if(err)
                throw Error("bug create Table task");
            console.log("create table task OK");
        });
    });
});