import React from "react";
import "react-image-gallery/styles/scss/image-gallery.scss";
import ImageGallery from "react-image-gallery";
import '../styles/ImageGallery.scss';
import { makeStyles } from '@material-ui/core';
import { theme } from "../mui-style";

import blueLagune from "../assets/images/blue_lagune.jpg";

const useStyles = makeStyles({
  wrapper: { 
    margin: theme.spacing(3, 'auto'),
  },
});

const fakeData: any = {
  lang: 2,
  id: 1,
  name: "Турция",
  capital: "Анкара",
  smallImageUrl: "turkey.jpg",
  imageUrl: "turkey_full.jpg",
  description:
    "Чем может удивить Турция? Если вам кажется, что там кроме пляжей и отелей с системой «все включено» нет ничего привлекательного, значит, вы не знаете настоящую Турцию - с великолепным Стамбулом, который когда-то был византийским Константинополем, древними христианским памятниками и удивительными чудесами природы, которые обязательно стоит увидеть. Турецкая Республика находится на стыке Запада и Востока. Имеет выход к четырем морям. Эта страна с потрясающей природой, архитектурой, историей. Для туристов и путешественников Турция интересна как место, где можно насладиться солнцем, пляжами, целебными источниками, покататься на лыжах, заняться альпинизмом.",
  sightseeings: [
    {
      imageUrl: "maidens_tower.jpg",
      name: "Девичья башня",
      description:
        "Расположена в азиатской части Стамбула на небольшом островке Босфорского пролива в районе Ускюдар. Во времена Османской империи башня в основном служила маяком, указывающим кораблям путь ночью и даже днём в туманную погоду.",
    },
    {
      imageUrl: "hagia_sophia.jpg",
      name: "Собор Святой Софии",
      description:
        "Бывший патриарший православный собор, находящийся в историческом центре современного Стамбула. Символ «золотого века» Византии. В 1453 году после захвата Константинополя османами собор был обращён в мечеть, а в 1935 году он приобрёл статус музея.",
    },
    {
      imageUrl: "efes.jpg",
      name: "Эфес",
      description:
        "Старый античный город, от которого до наших дней хорошо сохранилось много сооружений. Город знаменит в первую очередь храмом Артемиды, который является одним из семи чудес античного мира.",
    },
    {
      imageUrl: "blue_lagune.jpg",
      name: "Голубая лагуна",
      description:
        "Голубая лагуна — это очень красивое и известное место во всей стране.Голубая лагуна находится рядом с небольшим поселком Олюдениз в Турции на берегу двух морей Средиземного и Эгейского.",
    },
    {
      imageUrl: "cappadocia.jpg",
      name: "Каппадокия",
      description:
        "Полупустынный регион в центральной части Турции. Он известен своими волшебными дымоходами – высокими конусообразными скальными образованиями.",
    },
    {
      imageUrl: "pamukkale.jpg",
      name: "Памуккале",
      description:
        "Знаменит термальными источниками, расположенными на террасах из белого известняка. Здесь также можно увидеть руины древнего курортного города Иераполь времен Римской империи.",
    },
  ],
  videoUrl: "https://www.youtube.com/watch?v=6nGoj2TVe2I",
};

const images = fakeData.sightseeings.map((elem: any) => {
  return {
    original: blueLagune,
    thumbnail: blueLagune,
    originalAlt: elem.name,
    description: elem.description,
  };
});

const CountryPage: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <ImageGallery 
        items={images}
        thumbnailPosition={"right"}
        infinite={false}
        lazyLoad={true}
        showBullets={true}
        slideDuration={700}
        slideInterval={2000}
      />
    </div>
  );
};

export default CountryPage;
