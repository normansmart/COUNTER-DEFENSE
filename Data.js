







//deck array that holds cards for ash ketchum character
const ashDeck = []

// constructs objects containing card information for advancer deck
class ashKetchumCard {

  constructor(name, power, image) {
    this.name = name;

    this.power = power;

    this.image = image;
  }

}


//function to push initialized advance cards to deck array
function pushToAshDeck(card) {

  ashDeck.push(card);

}



//ash's cards

let gyrados = new ashKetchumCard("Gyrados", 15, 'https://i.redd.it/rvoivz72p3m41.jpg');
let tyranitar = new ashKetchumCard("Tyranutar", 25, 'https://i.pinimg.com/originals/53/79/39/5379392fd5ceda33731b75a9134d7421.jpg');
let magikarp = new ashKetchumCard("Magikarp", 4, 'https://pbs.twimg.com/media/CokvmXcUEAAhuz-?format=jpg&name=900x900');
let sceptile = new ashKetchumCard("Sceptile", 7, "https://i.kym-cdn.com/photos/images/original/001/065/267/f1d.jpg");
let pikachu = new ashKetchumCard("Pikachu", 10, "https://i.pinimg.com/originals/13/35/9b/13359bb6a2e6fe376ad221d7d57e5191.jpg");
let squirtle = new ashKetchumCard("Squirtle", 5, "https://64.media.tumblr.com/4127017e501cd0ac8b924285aacc20c3/tumblr_p4im6y3QDN1rjenv2o1_1280.jpg");
let charizard = new ashKetchumCard("Charizard", 13, "https://konachan.com/image/64be099dfca7edb2f54d7d717e0f4e64/Konachan.com%20-%20152854%20charizard%20dragon%20fire%20grass%20lif_%28lif-ppp%29%20pikachu%20pokemon%20wings.jpg");
let bulbasaur = new ashKetchumCard("Bulbasaur", 9, "https://i.pinimg.com/originals/d8/e5/44/d8e54478d116d9c435ed6f0aed48c3e7.jpg");
let lapras = new ashKetchumCard("Lapras", 17, './images/lapras.jpeg');
let mew = new ashKetchumCard("Mew", 35, 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0f4e9ef5-fbc4-400e-8e98-00d3452c2236/d7piy4l-4eb824f1-99d0-4f1c-a84a-3907f55a4fb3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBmNGU5ZWY1LWZiYzQtNDAwZS04ZTk4LTAwZDM0NTJjMjIzNlwvZDdwaXk0bC00ZWI4MjRmMS05OWQwLTRmMWMtYTg0YS0zOTA3ZjU1YTRmYjMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.jsoSlzD51BWl7vHOf5pqWXz8Z8blpBLfMXDaIYlFhBo');
let pidgeot = new ashKetchumCard("Pidgeot", 6, 'https://i.pinimg.com/originals/12/90/4c/12904cf5f3b2103dd98128fe9cd8a223.jpg');
let machamp = new ashKetchumCard("Machamp", 11, 'https://pbs.twimg.com/media/Dns-IK9W0AAqQxj?format=jpg&name=medium');
let rayquaza = new ashKetchumCard("Rayquaza", 27, 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0eb0f155-e353-4cbc-882d-ea2e9025c5b5/ddduvpy-89780fc7-cc24-4b95-a2db-fec86b1ac2ef.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBlYjBmMTU1LWUzNTMtNGNiYy04ODJkLWVhMmU5MDI1YzViNVwvZGRkdXZweS04OTc4MGZjNy1jYzI0LTRiOTUtYTJkYi1mZWM4NmIxYWMyZWYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Wj_TncuOijhl7xI7OJhNeb_RLDGBNvNS1nVmIThmrYw');
let arceus = new ashKetchumCard("Arceus", 30, 'https://i.pinimg.com/originals/9f/26/ce/9f26ce59a9f7b5f7df79bcbf7bc9eedd.jpg');
let articuno= new ashKetchumCard("Articuno", 29, "https://assets.reedpopcdn.com/pokemon-go-articuno-header.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/pokemon-go-articuno-header.jpg");
let heatran= new ashKetchumCard("Heatran", 17, "https://assets.reedpopcdn.com/pokemon-go-heatran.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/pokemon-go-heatran.jpg");
let ninjask= new ashKetchumCard("Ninjask", 10, "https://static.wikia.nocookie.net/pokemon/images/5/53/Paul_Ninjask.png");
let cobalion= new ashKetchumCard("Cobalion", 20, "https://assets.reedpopcdn.com/pokemon-go-cobalion-header.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/pokemon-go-cobalion-header.jpg");


//pushes created card variables into advanceCard deck. 
pushToAshDeck(charizard);
pushToAshDeck(sceptile);
pushToAshDeck(rayquaza);
pushToAshDeck(arceus);
pushToAshDeck(pikachu);
pushToAshDeck(pikachu);
pushToAshDeck(squirtle);
pushToAshDeck(squirtle);
pushToAshDeck(pidgeot);
pushToAshDeck(pidgeot);
pushToAshDeck(lapras);
pushToAshDeck(lapras);
pushToAshDeck(machamp);
pushToAshDeck(machamp);
pushToAshDeck(mew);
pushToAshDeck(gyrados);
pushToAshDeck(magikarp);
pushToAshDeck(magikarp);
pushToAshDeck(magikarp);
pushToAshDeck(magikarp);
pushToAshDeck(tyranitar);
pushToAshDeck(heatran);
pushToAshDeck(heatran);
pushToAshDeck(ninjask);
pushToAshDeck(ninjask);
pushToAshDeck(cobalion);
pushToAshDeck(cobalion);
















// constructs objects containing card information for blocker deck
class garyOakCard {

  constructor(name, power, image) {
    this.name = name;

    this.power = power;

    this.image = image;
  }

}

//array that holds cards that block
const garyOakDeck = []

//blocker cards to be initialized
let psyduck = new garyOakCard("Psyduck", 2, "https://i.pinimg.com/originals/55/3f/7d/553f7db733d29aa6c51a059ebe2b1159.jpg");
let lugia = new garyOakCard("Lugia", 25, "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a888735f-b165-4760-afc2-ae4c20f3806d/daoe9wv-dfcb112b-171b-46d5-91b5-71e95dde7974.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E4ODg3MzVmLWIxNjUtNDc2MC1hZmMyLWFlNGMyMGYzODA2ZFwvZGFvZTl3di1kZmNiMTEyYi0xNzFiLTQ2ZDUtOTFiNS03MWU5NWRkZTc5NzQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1dBc4r5srgEPLcDvxnWNZxGOPO-xbeyQoj3_AZr93PM");
let eevee = new garyOakCard("Eevee", 20, "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/79a9928b-baad-49f8-86dc-a01fb1188ef3/da1t9fy-61070933-c498-4502-aea6-3748f7e0886a.jpg/v1/fill/w_600,h_920,q_75,strp/luxray_by_kraytt_05_da1t9fy-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc5YTk5MjhiLWJhYWQtNDlmOC04NmRjLWEwMWZiMTE4OGVmM1wvZGExdDlmeS02MTA3MDkzMy1jNDk4LTQ1MDItYWVhNi0zNzQ4ZjdlMDg4NmEuanBnIiwiaGVpZ2h0IjoiPD05MjAiLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzc5YTk5MjhiLWJhYWQtNDlmOC04NmRjLWEwMWZiMTE4OGVmM1wva3JheXR0LTA1LTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.HivW2xT2vsZhy8Rdw6MBY52AZg62kA1gAagsnsOSg6w");
let togepi = new garyOakCard("Togepi", 3, "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4655f422-f9b4-4681-8d5e-5c3c6df7d2db/d5qdrzi-f3a08ca3-f68a-4b6a-a6e5-3c4109cf8d93.png/v1/fill/w_600,h_596,q_80,strp/commission__togepi_by_salanchu_d5qdrzi-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTk2IiwicGF0aCI6IlwvZlwvNDY1NWY0MjItZjliNC00NjgxLThkNWUtNWMzYzZkZjdkMmRiXC9kNXFkcnppLWYzYTA4Y2EzLWY2OGEtNGI2YS1hNmU1LTNjNDEwOWNmOGQ5My5wbmciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.yyi1P6Q4b_PuGrQUTl8slNx_ccv8CzhJNw5g4Cxz0ds");
let mewii = new garyOakCard("Mew II", 31, "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0eb0f155-e353-4cbc-882d-ea2e9025c5b5/dd9mg3j-0cd5d1b9-b61c-4420-b7f6-3bc61c441bf7.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBlYjBmMTU1LWUzNTMtNGNiYy04ODJkLWVhMmU5MDI1YzViNVwvZGQ5bWczai0wY2Q1ZDFiOS1iNjFjLTQ0MjAtYjdmNi0zYmM2MWM0NDFiZjcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.L2kOgFkD8970Y20fbxG9itFQ_qb_Swwlon-9D3nH0Zg");
let dragonite = new garyOakCard("Dragonite", 16, "https://i.pinimg.com/originals/29/85/2e/29852edad7ed4c64003a2c1a9d529fbf.jpg");
let deoxys = new garyOakCard("Deoxys", 31, "https://assets.reedpopcdn.com/pokemon-go-deoxys.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/pokemon-go-deoxys.jpg");
let lucario = new garyOakCard("Lucario", 17, "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/31ccb3d5-2c06-4c5e-9ae0-12c53746ddf5/d98zbp4-9fe8da5d-9459-4863-a7e4-13c7f706f67d.jpg/v1/fill/w_900,h_1384,q_75,strp/pokemon___mega_lucario_by_sa_dui_d98zbp4-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzMxY2NiM2Q1LTJjMDYtNGM1ZS05YWUwLTEyYzUzNzQ2ZGRmNVwvZDk4emJwNC05ZmU4ZGE1ZC05NDU5LTQ4NjMtYTdlNC0xM2M3ZjcwNmY2N2QuanBnIiwiaGVpZ2h0IjoiPD0xMzg0Iiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC8zMWNjYjNkNS0yYzA2LTRjNWUtOWFlMC0xMmM1Mzc0NmRkZjVcL3NhLWR1aS00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.1mWL-j5_oB6QYQF9Y7qEG-rJGQKkLIHVZNvUNm9hkSQ");
let gastly = new garyOakCard("Gastly", 9, "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6e0ec669-841f-4bc4-8df8-9c68d6c3c70b/daqxkyz-9cfe5dc4-dd99-4dbb-9f1c-9e92eba9cce6.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZlMGVjNjY5LTg0MWYtNGJjNC04ZGY4LTljNjhkNmMzYzcwYlwvZGFxeGt5ei05Y2ZlNWRjNC1kZDk5LTRkYmItOWYxYy05ZTkyZWJhOWNjZTYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.eZww0zoqxulu5t-wGYotpaxCtB6Mw7tHpfPnkOleip8");
let butterfree = new garyOakCard("Butterfree", 37, "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/def4f0c3-b40c-4814-9c26-e211515ad5b5/d4slgnz-e16cd0ed-5348-4c7b-8086-cc972c8b8b5f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RlZjRmMGMzLWI0MGMtNDgxNC05YzI2LWUyMTE1MTVhZDViNVwvZDRzbGduei1lMTZjZDBlZC01MzQ4LTRjN2ItODA4Ni1jYzk3MmM4YjhiNWYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.N-RsOngrHhPnrrevWzZLeiAgkCGwXcBwjK3ToTbZ0qY");
let garchomp = new garyOakCard("Garchomp", 3, "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dc500027-4c78-4b66-8ee4-ee081fa5dac8/dbv5ya0-1051ba0b-e364-4fa5-941a-c0e117363798.png/v1/fill/w_1024,h_691,q_80,strp/garchomp__fanart__by_joakin100_dbv5ya0-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjkxIiwicGF0aCI6IlwvZlwvZGM1MDAwMjctNGM3OC00YjY2LThlZTQtZWUwODFmYTVkYWM4XC9kYnY1eWEwLTEwNTFiYTBiLWUzNjQtNGZhNS05NDFhLWMwZTExNzM2Mzc5OC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.9tOj-UNA4ZMT2iD2D59Nkgbpu2KM7M3FEZ72joNe62w");
let snorlax = new garyOakCard("Snorlax", 5, "https://external-preview.redd.it/X5Arsvs0hL9VLtFEo3WlN9xUdfVLzMNJiOOyk7Iedxs.jpg?auto=webp&s=75352c7a33de806c6756d04860abc0618413eaf6");
let giranita = new garyOakCard("Giranita", 28, "https://external-preview.redd.it/WMQEOPsDz8PeLOgOxkJnaAial9SK1Arv7r5ExDZK8ew.jpg?auto=webp&s=03348d3a0a8a2732670a3e9a380e0369003842c4");
let infernape = new garyOakCard("Infernape", 14, "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cb39254c-c5b4-4c7a-aae6-fe636746b077/d63wg2q-577b024e-502b-4940-b26a-b12df707b157.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NiMzkyNTRjLWM1YjQtNGM3YS1hYWU2LWZlNjM2NzQ2YjA3N1wvZDYzd2cycS01NzdiMDI0ZS01MDJiLTQ5NDAtYjI2YS1iMTJkZjcwN2IxNTcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.eKKxNuw4pks_mWstJcrQW2uyS-Fqha3KzSV0X9iWnpg");
let blaziken = new garyOakCard("Blaziken", 17, "https://i.pinimg.com/originals/89/3a/ef/893aef9436bf781e23078daa43613356.jpg");
let hooh = new garyOakCard('Ho-oh', 8, "https://assets.reedpopcdn.com/pokemon-go-ho-oh-header.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/pokemon-go-ho-oh-header.jpg")
let moltres = new garyOakCard("Moltres", 9, "https://assets.reedpopcdn.com/pokemon-go-moltres-header.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/pokemon-go-moltres-header.jpg");
let chimchar = new garyOakCard("Chimchar", 4, "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/071806fd-09c0-4e1e-9e0d-a73b6b474697/ddfsljq-151f273a-f357-4bce-b297-ddd43aca9adc.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA3MTgwNmZkLTA5YzAtNGUxZS05ZTBkLWE3M2I2YjQ3NDY5N1wvZGRmc2xqcS0xNTFmMjczYS1mMzU3LTRiY2UtYjI5Ny1kZGQ0M2FjYTlhZGMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.b_gnXIRq2whzLSvA8VSZlgpXsq-yKfMbEVQEaRnJPy8");
let terrakion = new garyOakCard("Terrakion", 12, "https://assets.reedpopcdn.com/pokemon-go-terrakion-header.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/pokemon-go-terrakion-header.jpg");
let gliscor = new garyOakCard("Gliscor", 15, "https://i.pinimg.com/originals/28/39/62/283962f9197cdcc3aaeb994f3ce11c80.jpg");


//function that pushes initialized blocker cards to the deck array
function pushToGaryDeck(card) {

  garyOakDeck.push(card);

}


//pushes created blocker card
pushToGaryDeck(eevee);
pushToGaryDeck(lugia);
pushToGaryDeck(psyduck);
pushToGaryDeck(togepi);
pushToGaryDeck(dragonite);
pushToGaryDeck(deoxys);
pushToGaryDeck(lucario);
pushToGaryDeck(gastly);
pushToGaryDeck(mewii);
pushToGaryDeck(butterfree);
pushToGaryDeck(togepi);
pushToGaryDeck(togepi);
pushToGaryDeck(garchomp);
pushToGaryDeck(snorlax);
pushToGaryDeck(snorlax);
pushToGaryDeck(infernape);
pushToGaryDeck(blaziken);
pushToGaryDeck(hooh);
pushToGaryDeck(moltres);
pushToGaryDeck(chimchar);
pushToGaryDeck(chimchar);
pushToGaryDeck(chimchar);
pushToGaryDeck(butterfree);
pushToGaryDeck(terrakion);
pushToGaryDeck(terrakion);
pushToGaryDeck(gliscor);
pushToGaryDeck(gliscor);
pushToGaryDeck(psyduck);















// function to render each card array
function renderAshCardsToDeck(cardDeck) {



  // for each card obj in deck array
  cardDeck.forEach(cardInfoObj => {



    //creates div the card info will be rendered on a created div

    const ashCard = document.createElement("div");
    ashCard.className = "gameCard";


    //create tags for the card obj key values
    const ashCardName = document.createElement('h3');
    const ashCardPower = document.createElement('h1');
    const ashCardImage = cardInfoObj.image
    //tags text content set to card obj key values
    ashCardName.textContent = cardInfoObj.name;
    ashCardPower.textContent = cardInfoObj.power;

    ashCard.style.backgroundImage = "url(" + ashCardImage + ")"
    

    //append card obj info onto the card div: 
    ashCard.append(ashCardPower , ashCardName);






    // appends each created card onto the player hud
    document.querySelector('.deck-container-ash').append(ashCard);




    //on click, changes the poperties of the card div and sets card selector to true
    ashCard.addEventListener('click', (e) => {

      ashCard.style.border = "solid 3px blue"

      ashCard.id = "ash"

    })



  });




}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}



function renderGaryCardsToDeck(cardDeck) {




  // for each card obj in deck array
  cardDeck.forEach(cardInfoObj => {



    //creates div the card info will be rendered on a created div

    const garyCard = document.createElement("div");
    garyCard.className = "gameCard";

    //create tags for the card obj key values
    const garyCardName = document.createElement('h3');
    const garyCardPower = document.createElement('h1');
    const garyCardImage = cardInfoObj.image
    //tags text content set to card obj key values
    garyCardName.textContent = cardInfoObj.name;
    garyCardPower.textContent = cardInfoObj.power;


    garyCard.style.backgroundImage = "url(" + garyCardImage + ")"
    //append card obj info onto the card div: 
    garyCard.append(garyCardPower , garyCardName);





    // appends each created card onto the player hud
    document.querySelector('.deck-container-gary').append(garyCard);
  

    //on click, changes the poperties of the card div and sets card selector to true
    garyCard.addEventListener('click', (e) => {

      garyCard.style.backgroundColor = "Green"

      garyCard.id = "gary"

   

    })





  });




}


