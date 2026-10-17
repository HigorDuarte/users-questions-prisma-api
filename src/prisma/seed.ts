import { db } from "./db";

async function seed(){

    await Promise.all([
        db.orm.public.User.upsert({
            update: {},
            create: {name: "João Gabriel", email: "JoaoGab@gmail.com"}
        }),

        db.orm.public.User.upsert({
            update: {},
            create: {name: "Gabriel Jesus", email: "GabJesu@gmail.com"}
        })
    ])
    console.log(`Seed feito com sucesso! 🌱`)
}

seed().catch((e) => {
    console.log("Erro ao rodar o seed", e)
    process.exit(1)
})