import express = require('express');
import wrap = require('../../common/errors/async-error-wrapper');
// import countryService = require('./country.service');
// import validateId = require('../../common/validation/objectID.validation');
import types = require('./country.types');
import model = require('./country.model');
import countryService = require('./country.service');
import config = require('../../common/config');

// import countryRepo = require('./country.repository');

const router = express.Router();

const China: types.ICountrySchema = {
    countryId: 5,
    imageId: 'travelApp/china_zfbnes',
    smallImageId: 'travelApp/china_zfbnes',
    videoUrl: 'https://youtu.be/nGkaYARL48s',
    coordinates: '39.90663716589455, 116.41625179481245',
    sights: [
      {
        sightId: 1,
        imageId: 'travelApp/1__the_great_wall_of_china_io7npx',
        smallImageId: 'travelApp/1__the_great_wall_of_china_io7npx',
        localizations: [
          {
            name: 'Great Wall of China (North China)',
            description:
            "The Great Wall of China is a grandiose monument of antiquity and is considered the longest structure in the world built for defense purposes. It passes through North China for almost 9 thousand kilometers. According to other sources, if we take into account all the turns and bends of the wall, its length will be about 21 thousand kilometers. The height of the building is about 7 meters. And the width is 6 meters. From the inside, the wall is protected by a special barrier 0.9 meters high.",
          },
          {
            name: "Великая Китайская стена (Северный Китай)",
            description:
              "Великая Китайская стена является грандиозным памятником древности и считается самым длинным сооружением в мире, возведённым в целях обороны. Она проходит по Северному Китаю на протяжении почти 9 тыс. километров. По другим данным, если учитывать все повороты и изгибы стены, её длина составит около 21 тыс. километров. Высота сооружения составляет около 7 метров. А ширина — 6 метров. С внутренней стороны стена защищена специальным барьером в высоту 0,9 метра.",
            },
          {
            name: "Вялікая Кітайская сцяна (Паўночны Кітай)",
            description:
              "Вялікая Кітайская сцяна з'яўляецца грандыёзным помнікам старажытнасці і лічыцца самым доўгім збудаваннем у свеце, збудаванай у мэтах абароны. Яна праходзіць па Паўночным Кітаю на працягу амаль 9 тыс. Кіламетраў. Па іншых дадзеных, калі ўлічваць усе павароты і выгібы сцяны, яе даўжыня складзе каля 21 тыс. Кіламетраў. Вышыня будынка складае каля 7 метраў. А шырыня - 6 метраў. З унутранага боку сьцяна абаронена спецыяльным бар'ерам у вышыню 0,9 метра.",
            },
        ],
      },
      {
        sightId: 2,
        imageId: 'travelApp/2_nanwan_monkey_island_erj00o',
        smallImageId: 'travelApp/2_nanwan_monkey_island_erj00o',
        localizations: [
          {
            name: "Monkey Island Reserve (Sanya)",
            description:
              "Monkey Island Nature Reserve covers an area of ​​about a thousand hectares and is home to 2000 monkeys. This is the only sanctuary in which monkeys live in their natural environment, but at the same time freely and fearlessly cooperate with visitors. It is not allowed to feed the monkeys yourself here - you can only buy food and give it to the reserve servant, so that he feeds them from his own hands in front of your eyes.",
            },
          {
            name: "Заповедник “Обезьяний остров” (г. Санья)",
            description:
              "Заповедник «Обезьяний остров» располагается на площади около тысячи гектаров и является пристанищем 2000 обезьян. Это единственный заповедник, в котором обезьяны живут в своей естественной среде, но при этом свободно и безбоязненно содействуют с посетителями. Кормить обезьян самим здесь не разрешается — можно лишь купить еду и отдать её служителю заповедника, чтобы тот покормил их из своих рук на ваших глазах.",
            },
          {
            name: "Запаведнік 'Малпін востраў' (г. Санья)",
            description:
              "Запаведнік «Малпін востраў» размяшчаецца на плошчы каля тысячы гектараў і з'яўляецца прытулкам 2000 малпаў. Гэта адзіны запаведнік, у якім малпы жывуць у сваёй натуральнай асяроддзі, але пры гэтым вольна і бязбоязна садзейнічаюць з наведвальнікамі. Карміць малпаў самім тут не дазваляецца - можна толькі купіць ежу і аддаць яе слузе запаведніка, каб той пакарміў іх са сваіх рук на вашых вачах.",
            },
        ],
      },
      {
        sightId: 3,
        imageId: 'travelApp/3_tianya_haijiao_park_ztd0hy',
        smallImageId: 'travelApp/3_tianya_haijiao_park_ztd0hy',
        localizations: [
          {
            name: "End of the World Natural Park (Hainan Island)",
            description:
              "This remarkable beauty place is located right on the seashore, at an altitude of 200 meters, and occupies only 2.5 square kilometers in area. The local landscapes are characterized by a special beauty - high cliffs of intricate shapes frame the blue sea, stormy waves break on the steep banks, everywhere green trees.",
            },
          {
            name: "Природный парк “Край света” (о. Хайнань)",
            description:
              "Это замечательное по красоте место находится прямо на берегу моря, на высоте 200 метров, а по площади занимает всего 2,5 квадратных километра. Местным ландшафтам свойственна особая красота — высокие скалы замысловатых форм обрамляют синее море, бурные волны разбиваются о крутые берега, всюду зелень деревьев.",
            },
          {
            name: "Прыродны парк 'Край святла' (а. Хайнань)",
            description:
              "Гэта выдатнае па прыгажосці месца знаходзіцца прама на беразе мора, на вышыні 200 метраў, а па плошчы займае ўсяго 2,5 квадратных кіламетры. Мясцовым ландшафтам ўласцівая адмысловая прыгажосць - высокія скалы мудрагелістых формаў апраўляюць сіняе мора, бурныя хвалі разбіваюцца аб стромкія берагі, усюды зеляніна дрэў.",
            },
        ],
      },
      {
        sightId: 4,
        imageId: 'travelApp/4_mount_lotus_toj89n',
        smallImageId: 'travelApp/4_mount_lotus_toj89n',
        localizations: [
          {
            name: "Lianhuashan Lotus Mountains (20 km from Guangzhou)",
            description:
              "Once upon a time in ancient times, these hills were called the Stone Lion's Head, and the main hill among them is the Lotus, or Lian Hua. It was named so because a huge stone at the top resembled a lotus flower in its outlines. Most likely, this shape of the stone was achieved in ancient times, when the Chinese were mining the rock here, extracting building material. Therefore, the same lotus could be formed as a result of the fusion of natural processes and anthropogenic activities.",
            },
          {
            name: "Лотосовые горы Ляньхуашань (20 км от Гуанчжоу)",
            description:
              "Когда-то в древности эти холмы назывались Каменной головой льва, а главный холм среди них — Лотос, или Лиан Хуа. Назван он был так потому, что огромный камень на вершине своими очертаниями напоминал цветок лотоса. Скорее всего, такая форма камня была достигнута в древние времена, когда китайцы вели здесь разработку породы, добывая строительный материал. Поэтому тот самый «лотос» мог образоваться в результате слияния природных процессов и антропогенной деятельности.",
            },
          {
            name: "Лотасавыя горы Ляньхуашань (20 км ад Гуанчжоў)",
            description:
              "Калісьці ў старажытнасці гэтыя пагоркі называліся Каменнай галавой льва, а галоўны пагорак сярод іх - Лотас, або ліян Хуа. Названы ён быў так таму, што вялізны камень на вяршыні сваімі абрысамі нагадваў кветка лотаса. Хутчэй за ўсё, такая форма каменя была дасягнута ў старажытныя часы, калі кітайцы вялі тут распрацоўку пароды, здабываючы будаўнічы матэрыял. Таму той самы «лотас» мог ўтварыцца ў выніку зліцця прыродных працэсаў і антрапагеннай дзейнасці.",
          },
        ],
      },
      {
        sightId: 5,
        imageId: 'travelApp/5_lijiang_old_town_mfqxpf',
        smallImageId: 'travelApp/5_lijiang_old_town_mfqxpf',
        localizations: [
          {
            name: "Lijiang Old Town (Yunnan Province)",
            description:
              "The city preserves an authentic building with entourage tile roofs, although it is worth remembering that most of these buildings are skillfully erected copies of demolished old structures. The whole town is a single composition with the waters of the Yuquanhe River, which, splitting into 3 branches, seems to permeate all the streets, and graceful bridges thrown over numerous streams flaunt everywhere. Dozens of narrow cobbled streets are intricately intertwined with each other, and houses in the national style are originally inscribed in the surrounding mountain landscape.",
            },
          {
            name: "Старый город Лицзян (провинция Юньнань)",
            description:
              "Город хранит аутентичную застройку с антуражными крышами из черепицы, хотя стоит помнить, что большая часть этих построек — умело возведённые копии снесённых старых сооружений. Весь городок составляет единую композицию с водами реки Юйцюаньхэ, которая, распадаясь на 3 рукава, будто пронизывает все улицы, и всюду красуются изящные мостики, перекинутые через многочисленные ручьи. Десятки узких мощёных улочек причудливо переплетаются друг с другом, а домики в национальном стиле оригинально вписаны в окружающий горный ландшафт.",
            },
          {
            name: "Стары горад Ліцзян (правінцыя Юньнань)",
            description:
              "Горад захоўвае аўтэнтычную забудову з антуражными стрэхамі з чарапіцы, хоць варта памятаць, што большая частка гэтых пабудоў - ўмела збудаваныя копіі знесеных старых збудаванняў. Увесь гарадок складае адзіную кампазіцыю з водамі ракі Юйцюаньхэ, якая, распадаючыся на 3 рукавы, быццам пранізвае ўсе вуліцы, і ўсюды красуюцца хупавыя мосцікі, перакінуць праз шматлікія ручаіны. Дзесяткі вузкіх мощёных вулачак мудрагеліста пераплятаюцца адзін з адным, а домікі ў нацыянальным стылі арыгінальна ўпісаны ў навакольны горны ландшафт.",
            },
        ],
      },
      {
        sightId: 6,
        imageId: 'travelApp/6_taishan_mountain_tzofy0',
        smallImageId: 'travelApp/6_taishan_mountain_tzofy0',
        localizations: [
          {
            name: "Mount Taishan (Shandong Province)",
            description:
              "According to myths, the five mountains of China were created from the body of the Creator, and Taishan was the main one, since it was formed from the head of a supreme deity. Today there are two ways to climb the mountain: the first is on foot, the second is by bus or funicular. The second way is usually for visiting tourists, and the first way is for local, mostly elderly people. Making a 7-kilometer ascent through 6 thousand stone steps, they firmly believe that their pilgrimage will help them gain the favor of the gods.",
            },
          {
            name: "Гора Тайшань (провинция Шаньдун)",
            description:
              "Если верить мифам, пять гор Китая были созданы из тела Создателя, а Тайшань была главной из них, поскольку образовалась из головы высшего божества. Сегодня есть два способа, чтобы взобраться на гору: первый — пешком, второй — на автобусе или фуникулёре. Вторым способом обычно добираются приезжие туристы, а первым — местные, преимущественно пожилые люди. Совершая 7-километровое восхождение через 6 тысяч ступеней из камня, они свято верят, что их паломничество позволит добиться благосклонности богов.",
            },
          {
            name: "Гара Тайшань (правінцыя Шаньдун)",
            description:
              "Калі верыць міфам, пяць гор Кітая былі створаны з цела Стваральніка, а Тайшань была галоўнай з іх, паколькі ўтварылася з галавы вышэйшага бажаства. Сёння ёсць два спосабу, каб ўзлезці на гару: першы - пешшу, другі - на аўтобусе ці фунікулёры. Другім спосабам звычайна дабіраюцца прыезджыя турысты, а першым - мясцовыя, пераважна пажылыя людзі. Здзяйсняючы 7-кіламетровай ўзыходжанне праз 6 тысяч прыступак з каменя, яны свята вераць, што іх паломніцтва дазволіць дамагчыся прыхільнасці багоў.",
            },
        ],
      },
    ],
    localizations: [
      {
        name: 'China',
        description: 'China is a very multifaceted country, and resorts in China can offer visitors a wide variety of leisure activities. You will find ski resorts in Harbin, the island of Hainan will offer you an excellent and rather economical beach holiday, and you can get acquainted with Tibetan culture and Buddhism in Lhasa. 99 cities of great cultural and historical significance, 750 unique cultural monuments under state protection, as well as 119 landscape sites are open to tourists in China.',
        capital: 'Beijing',
      },
      {
        name: "Китай",
        description:
        "Китай - очень многогранная страна.Курорты Китая могут предложить посетителям самый разнообразный досуг. Горнолыжные курорты вы найдете в Харбине, великолепный и довольно экономный пляжный отдых вам предложит остров Хайнань, а знакомство с тибетской культурой и буддизмом вы сможете совершить в Лхасе. Для туристов в Китае открыты 99 городов огромного культурно—исторического значения, 750 уникальных культурных памятников, находящихся под охраной государства, а также 119 пейзажных мест.",
        capital: "Пекин",
      },
      {
        name: "Кітай",
        description:
        "Кітай - вельмі шматгранная страна.Курорты Кітая могуць прапанаваць наведвальнікам самы разнастайны вольны час. Гарналыжныя курорты вы знойдзеце ў Харбіне, цудоўны і даволі эканомны пляжны адпачынак вам прапануе востраў Хайнань, а знаёмства з тыбецкай культурай і будызмам вы зможаце здзейсніць у Лхасе. Для турыстаў у Кітаі адкрыты 99 гарадоў вялізнага культурна-гістарычнага значэння, 750 унікальных культурных помнікаў, якія знаходзяцца пад аховай дзяржавы, а таксама 119 пейзажных месцаў.",
        capital: "Пекін",
      },
    ],
  }


// const countryExample: types.ICountrySchema = {
//     countryId: 1,
//     imageUrl: 'imageUrl',
//     smallImageUrl: 'smallImageUrl',
//     videoUrl: 'videoUrl',
//     coordinates: 'coordinates',
//     sights: [{
//         sightId: 3,
//         imageUrl: 'imageUrl',
//         // rating: {
//         //     points: 1,
//         //     votes: 1,
//         //     votedUsers: [{
//         //         userId: 1,
//         //         name: 'Name',
//         //         imageUrl:'imageUrl',
//         //         points: 1,
//         //     }],
//         // },
//         localizations: [
//             {
//                 name: 'name',
//                 description: 'description',
//             },
//             {
//                 name: 'имя',
//                 description: 'описание',
//             },
//             {
//                 name: 'імя',
//                 description: 'апісанне',
//             },
//         ],
//     }],
//     localizations: [
//         {
//             name: 'name',
//             description: 'description',
//             capital: 'capital',
//         },
//         {
//             name: 'имя',
//             description: 'описание',
//             capital: 'столица',
//         },
//         {
//             name: 'імя',
//             description: 'апісанне',
//             capital: 'сталіца',
//         },
//     ],
// }

router.get('/', wrap(async (req, res): Promise<void> => {
    const lang: string = req.query.lang || config.DEFAULT_LANG;
    // await model.CountryModel.create(China);
    const data = await countryService.getAll(types.Language[lang]);
    res.json(data);
}));

router.get('/:id', wrap(async (req, res): Promise<void> => {
    const lang: string = req.query.lang || config.DEFAULT_LANG;
    const { id } = req.params;
    const data = await countryService.getOne(id, types.Language[lang]);
    res.json(data);
}));

export = router;