//alert("working");

const pins=[
    {imgSource : "https://www.desiblitz.com/wp-content/uploads/2020/10/25-Most-Iconic-Scenes-of-Bollywood-to-Revisit-Mughal-E-Azam.jpg", movie: "xyz" },
    {imgSource : "https://www.desiblitz.com/wp-content/uploads/2020/10/25-Most-Iconic-Scenes-of-Bollywood-to-Revisit-Veer-Zaara.jpg", movie: "fgh"},
    {imgSource : "https://tvovermind.com/wp-content/uploads/2017/06/bollywood-movies.jpg", movie: "sdf"},
    {imgSource : "https://s4.scoopwhoop.com/anj/iconic_scenes/98918729.jpg", movie: "gjt"},
    {imgSource : "https://filmfare.wwmindia.com/content/2021/feb/bollywoodromanticpairs51613303110.jpg", movie: "ddd"},
    {imgSource : "https://im.indiatimes.in/content/2020/Nov/26a_5f5cad8464ae6_5fa4250a6001f.jpg", movie: "jjj"},
    {imgSource : "https://s4.scoopwhoop.com/wp-content/uploads/2014/04/bhuvan.jpg", movie: "abc"},
    {imgSource : "https://www.desiblitz.com/wp-content/uploads/2020/10/25-Most-Iconic-Scenes-of-Bollywood-to-Revisit-Mughal-E-Azam.jpg", movie: "xyz" },
    {imgSource : "https://www.desiblitz.com/wp-content/uploads/2020/10/25-Most-Iconic-Scenes-of-Bollywood-to-Revisit-Veer-Zaara.jpg", movie: "fgh"},
    {imgSource : "https://media.timeout.com/images/102136149/image.jpg", movie : "dgv"},
    {imgSource : "https://nettv4u.com/fileman/Uploads/-Top-10-Tally-Scenes-of-Bollywood-Movies/queen.jpg", movie : "ggg"},
    {imgSource : "https://s3.scoopwhoop.com/anj2/5e00a11f50758d5670974789/01f3a22b-5295-4123-a430-7308d010a68c.jpg", movie : "gvk"},
    {imgSource : "https://img.mensxp.com/media/content/2019/Oct/stunning-spots-from-iconic-bollywood-movie-scenes-1400x653-1572081967.jpg", movie : "fgj"},
    {imgSource : "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2019/07/12/Pictures/_d71ea644-a494-11e9-85f3-0f8400bbe260.jpg", movie : "ggs"},
    {imgSource : "https://booxoul.com/wp-content/uploads/2021/12/17-Most-Powerful-Scenes-From-Bollywood-Movies-That-Give-Us-Goosebumps-Even-Today-Taare-Zameen-Par-1024x576.png", movie : "jfj"},
    {imgSource : "https://nettv4u.com/fileman/Uploads/Top-10-Most-Emotional-Scenes-In-Bollywood-Movies/ramleela.jpg", movie : "dfh"},
    {imgSource : "https://wallpaperaccess.com/full/1494452.jpg", movie : "mdm"},
    {imgSource : "https://c4.wallpaperflare.com/wallpaper/280/494/466/movies-bollywood-movies-wallpaper-preview.jpg", movie : "dds"},
    {imgSource : "https://s4.scoopwhoop.com/anj/iconic_scenes/443460520.jpg", movie : "ssf"},
    {imgSource : "https://images.herzindagi.info/image/2022/Feb/bollywood-movie-romantic-proposals.jpg", movie : "hhs"},
    {imgSource : "https://theindianwire.com/wp-content/uploads/2017/12/fztAjQJZHcoNBKJw5qrclyzltG9.jpg", movie : "shf"},
    {imgSource : "https://tvovermind.com/wp-content/uploads/2017/06/bollywood-movies.jpg", movie: "sdf"},
    {imgSource : "https://s4.scoopwhoop.com/anj/iconic_scenes/98918729.jpg", movie: "gjt"},
    {imgSource : "https://filmfare.wwmindia.com/content/2021/feb/bollywoodromanticpairs51613303110.jpg", movie: "ddd"},
    {imgSource : "https://im.indiatimes.in/content/2020/Nov/26a_5f5cad8464ae6_5fa4250a6001f.jpg", movie: "jjj"},
    {imgSource : "https://filmfare.wwmindia.com/content/2021/feb/bollywoodromanticpairs51613303110.jpg", movie: "ddd"},
    {imgSource : "https://im.indiatimes.in/content/2020/Nov/26a_5f5cad8464ae6_5fa4250a6001f.jpg", movie: "jjj"},
    {imgSource : "https://s4.scoopwhoop.com/wp-content/uploads/2014/04/bhuvan.jpg", movie: "abc"},
    {imgSource : "https://www.desiblitz.com/wp-content/uploads/2020/10/25-Most-Iconic-Scenes-of-Bollywood-to-Revisit-Mughal-E-Azam.jpg", movie: "xyz" },
    {imgSource : "https://www.desiblitz.com/wp-content/uploads/2020/10/25-Most-Iconic-Scenes-of-Bollywood-to-Revisit-Veer-Zaara.jpg", movie: "fgh"},
    {imgSource : "https://tvovermind.com/wp-content/uploads/2017/06/bollywood-movies.jpg", movie: "sdf"},
    {imgSource : "https://s4.scoopwhoop.com/anj/iconic_scenes/98918729.jpg", movie: "gjt"},
    {imgSource : "https://filmfare.wwmindia.com/content/2021/feb/bollywoodromanticpairs51613303110.jpg", movie: "ddd"},
    {imgSource : "https://im.indiatimes.in/content/2020/Nov/26a_5f5cad8464ae6_5fa4250a6001f.jpg", movie: "jjj"},
    {imgSource : "https://c4.wallpaperflare.com/wallpaper/280/494/466/movies-bollywood-movies-wallpaper-preview.jpg", movie : "dds"},
    {imgSource : "https://s4.scoopwhoop.com/anj/iconic_scenes/443460520.jpg", movie : "ssf"},
    {imgSource : "https://images.herzindagi.info/image/2022/Feb/bollywood-movie-romantic-proposals.jpg", movie : "hhs"},
    {imgSource : "https://theindianwire.com/wp-content/uploads/2017/12/fztAjQJZHcoNBKJw5qrclyzltG9.jpg", movie : "shf"},
    {imgSource : "https://tvovermind.com/wp-content/uploads/2017/06/bollywood-movies.jpg", movie: "sdf"},
    {imgSource : "https://s4.scoopwhoop.com/anj/iconic_scenes/98918729.jpg", movie: "gjt"},
    {imgSource : "https://filmfare.wwmindia.com/content/2021/feb/bollywoodromanticpairs51613303110.jpg", movie: "ddd"},
    {imgSource : "https://www.desiblitz.com/wp-content/uploads/2020/10/25-Most-Iconic-Scenes-of-Bollywood-to-Revisit-Mughal-E-Azam.jpg", movie: "xyz" },
    {imgSource : "https://images.herzindagi.info/image/2022/Feb/bollywood-movie-romantic-proposals.jpg", movie : "hhs"},
    {imgSource : "https://im.indiatimes.in/content/2020/Nov/26a_5f5cad8464ae6_5fa4250a6001f.jpg", movie: "jjj"},
    {imgSource : "https://s4.scoopwhoop.com/wp-content/uploads/2014/04/bhuvan.jpg", movie: "abc"},
    {imgSource : "https://www.desiblitz.com/wp-content/uploads/2020/10/25-Most-Iconic-Scenes-of-Bollywood-to-Revisit-Mughal-E-Azam.jpg", movie: "xyz" },
    {imgSource : "https://www.desiblitz.com/wp-content/uploads/2020/10/25-Most-Iconic-Scenes-of-Bollywood-to-Revisit-Veer-Zaara.jpg", movie: "fgh"},
    {imgSource : "https://media.timeout.com/images/102136149/image.jpg", movie : "dgv"},
    {imgSource : "https://nettv4u.com/fileman/Uploads/-Top-10-Tally-Scenes-of-Bollywood-Movies/queen.jpg", movie : "ggg"},
    {imgSource : "https://s3.scoopwhoop.com/anj2/5e00a11f50758d5670974789/01f3a22b-5295-4123-a430-7308d010a68c.jpg", movie : "gvk"},
    {imgSource : "https://img.mensxp.com/media/content/2019/Oct/stunning-spots-from-iconic-bollywood-movie-scenes-1400x653-1572081967.jpg", movie : "fgj"},
    {imgSource : "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2019/07/12/Pictures/_d71ea644-a494-11e9-85f3-0f8400bbe260.jpg", movie : "ggs"},
    {imgSource : "https://booxoul.com/wp-content/uploads/2021/12/17-Most-Powerful-Scenes-From-Bollywood-Movies-That-Give-Us-Goosebumps-Even-Today-Taare-Zameen-Par-1024x576.png", movie : "jfj"},
    {imgSource : "https://nettv4u.com/fileman/Uploads/Top-10-Most-Emotional-Scenes-In-Bollywood-Movies/ramleela.jpg", movie : "dfh"},
    {imgSource : "https://www.desiblitz.com/wp-content/uploads/2020/10/25-Most-Iconic-Scenes-of-Bollywood-to-Revisit-Dil-Chahta-Hai.jpg", movie : "dgs"},
    {imgSource : "https://nettv4u.com/fileman/Uploads/Top-10-Most-Emotional-Scenes-In-Bollywood-Movies/ae_dil_hai_mushki_.jpg", movie : "dse"},
    {imgSource : "https://s4.scoopwhoop.com/anj/iconic_scenes/611779720.jpg", movie : "sae"},
    {imgSource : "https://s3.scoopwhoop.com/anj2/5f23cca018ac815d1ebfc6df/dd01aac7-e744-40fa-9e4e-c6e6527267b7.jpg", movie : "dsf"},
    {imgSource : "https://booxoul.com/wp-content/uploads/2021/12/17-Most-Powerful-Scenes-From-Bollywood-Movies-That-Give-Us-Goosebumps-Even-Today-Padmavat-1024x576.jpeg", movie : "fhr"},
    {imgSource : "https://media.timeout.com/images/102074691/image.jpg", movie : "ewe"},
    {imgSource : "https://assets.telegraphindia.com/telegraph/2021/Sep/1631746828_untitled-1-1.jpg", movie : "reg"},
    {imgSource : "https://i.pinimg.com/originals/f8/69/79/f86979a6391bda858c44241fcfd684ca.jpg", movie : "swa"},
    {imgSource : "https://i.pinimg.com/originals/6b/b2/a7/6bb2a775920c19d88c59038aaaec9acc.jpg", movie : "ffs"},
    {imgSource : "https://filmykeeday.com/wp-content/uploads/2017/12/Bhool-Bhulaiyaa-horror-comedy-film-akshay-kumar-696x400.jpg", movie : "kug"},
    {imgSource : "https://img.mensxp.com/media/content/2019/Oct/stunning-spots-from-iconic-bollywood-movie-scenes-1400x653-1572081967.jpg", movie : "fgj"},
    {imgSource : "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2019/07/12/Pictures/_d71ea644-a494-11e9-85f3-0f8400bbe260.jpg", movie : "ggs"},
    {imgSource : "https://booxoul.com/wp-content/uploads/2021/12/17-Most-Powerful-Scenes-From-Bollywood-Movies-That-Give-Us-Goosebumps-Even-Today-Taare-Zameen-Par-1024x576.png", movie : "jfj"},
    {imgSource : "https://nettv4u.com/fileman/Uploads/Top-10-Most-Emotional-Scenes-In-Bollywood-Movies/ramleela.jpg", movie : "dfh"},
    {imgSource : "https://wallpaperaccess.com/full/1494452.jpg", movie : "mdm"},
    {imgSource : "https://c4.wallpaperflare.com/wallpaper/280/494/466/movies-bollywood-movies-wallpaper-preview.jpg", movie : "dds"},
    {imgSource : "https://s4.scoopwhoop.com/anj/iconic_scenes/443460520.jpg", movie : "ssf"},
    {imgSource : "https://images.herzindagi.info/image/2022/Feb/bollywood-movie-romantic-proposals.jpg", movie : "hhs"},
    {imgSource : "https://theindianwire.com/wp-content/uploads/2017/12/fztAjQJZHcoNBKJw5qrclyzltG9.jpg", movie : "shf"},
    {imgSource : "https://tvovermind.com/wp-content/uploads/2017/06/bollywood-movies.jpg", movie: "sdf"},
    {imgSource : "https://s4.scoopwhoop.com/anj/iconic_scenes/98918729.jpg", movie: "gjt"},
    {imgSource : "https://filmfare.wwmindia.com/content/2021/feb/bollywoodromanticpairs51613303110.jpg", movie: "ddd"},
    {imgSource : "https://im.indiatimes.in/content/2020/Nov/26a_5f5cad8464ae6_5fa4250a6001f.jpg", movie: "jjj"},
    {imgSource : "https://filmfare.wwmindia.com/content/2021/feb/bollywoodromanticpairs51613303110.jpg", movie: "ddd"},
    {imgSource : "https://im.indiatimes.in/content/2020/Nov/26a_5f5cad8464ae6_5fa4250a6001f.jpg", movie: "jjj"},
    {imgSource : "https://s4.scoopwhoop.com/wp-content/uploads/2014/04/bhuvan.jpg", movie: "abc"},
    {imgSource : "https://www.desiblitz.com/wp-content/uploads/2020/10/25-Most-Iconic-Scenes-of-Bollywood-to-Revisit-Mughal-E-Azam.jpg", movie: "xyz" },
    {imgSource : "https://www.desiblitz.com/wp-content/uploads/2020/10/25-Most-Iconic-Scenes-of-Bollywood-to-Revisit-Veer-Zaara.jpg", movie: "fgh"},
    {imgSource : "https://tvovermind.com/wp-content/uploads/2017/06/bollywood-movies.jpg", movie: "sdf"},
    {imgSource : "https://s4.scoopwhoop.com/anj/iconic_scenes/98918729.jpg", movie: "gjt"},
    {imgSource : "https://filmfare.wwmindia.com/content/2021/feb/bollywoodromanticpairs51613303110.jpg", movie: "ddd"},
    {imgSource : "https://www.desiblitz.com/wp-content/uploads/2020/10/25-Most-Iconic-Scenes-of-Bollywood-to-Revisit-Mughal-E-Azam.jpg", movie: "xyz" },
    {imgSource : "https://www.desiblitz.com/wp-content/uploads/2020/10/25-Most-Iconic-Scenes-of-Bollywood-to-Revisit-Veer-Zaara.jpg", movie: "fgh"},
    {imgSource : "https://tvovermind.com/wp-content/uploads/2017/06/bollywood-movies.jpg", movie: "sdf"},
    {imgSource : "https://s4.scoopwhoop.com/anj/iconic_scenes/98918729.jpg", movie: "gjt"},
    {imgSource : "https://filmfare.wwmindia.com/content/2021/feb/bollywoodromanticpairs51613303110.jpg", movie: "ddd"},
    {imgSource : "https://im.indiatimes.in/content/2020/Nov/26a_5f5cad8464ae6_5fa4250a6001f.jpg", movie: "jjj"},
    {imgSource : "https://s4.scoopwhoop.com/wp-content/uploads/2014/04/bhuvan.jpg", movie: "abc"},
    {imgSource : "https://www.desiblitz.com/wp-content/uploads/2020/10/25-Most-Iconic-Scenes-of-Bollywood-to-Revisit-Mughal-E-Azam.jpg", movie: "xyz" },
    {imgSource : "https://www.desiblitz.com/wp-content/uploads/2020/10/25-Most-Iconic-Scenes-of-Bollywood-to-Revisit-Veer-Zaara.jpg", movie: "fgh"},
    {imgSource : "https://media.timeout.com/images/102136149/image.jpg", movie : "dgv"},
    {imgSource : "https://nettv4u.com/fileman/Uploads/-Top-10-Tally-Scenes-of-Bollywood-Movies/queen.jpg", movie : "ggg"},
    {imgSource : "https://s3.scoopwhoop.com/anj2/5e00a11f50758d5670974789/01f3a22b-5295-4123-a430-7308d010a68c.jpg", movie : "gvk"},
    {imgSource : "https://img.mensxp.com/media/content/2019/Oct/stunning-spots-from-iconic-bollywood-movie-scenes-1400x653-1572081967.jpg", movie : "fgj"},
    {imgSource : "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2019/07/12/Pictures/_d71ea644-a494-11e9-85f3-0f8400bbe260.jpg", movie : "ggs"},
    {imgSource : "https://s3.scoopwhoop.com/anj/sw/875d77c1-3d51-481d-912a-363e8636528e.jpg", movie : "sdf"},
    {imgSource : "https://images.saymedia-content.com/.image/t_share/MTc1MTExMTQ5NjY1MjY0NzM1/top-20-best-bollywood-hindi-movies.jpg", movie : "sdf"},
    {imgSource : "https://s3.scoopwhoop.com/anj/sw/7896f3bb-671e-4bc6-b0ac-efd2e8bbd6bf.jpg", movie : "sdf"},
    {imgSource : "https://fashionindustrybroadcast.com/wp-content/uploads/2018/02/dailymotion.jpg", movie : "sdf"},
    {imgSource : "https://www.thecinemaholic.com/wp-content/uploads/2017/10/AM17.jpg", movie : "sdf"},
    {imgSource : "https://img.starbiz.com/resize/750x-/2019/06/30/top-100-bollywood-movies-of-all-time-0b76.jpg", movie : "sdf"},
    {imgSource : "https://img.mensxp.com/media/content/2019/Oct/stunning-spots-from-iconic-bollywood-movie-scenes-1400x653-1572081967.jpg", movie : "fgj"},

];

//{imgSource : "", movie : ""},
var count = 0;
var parentElement = document.querySelector(".pin-container");
pins.forEach((image) => {

    document.createElement("div");

    var newImg = document.createElement("img");
    newImg.src=image["imgSource"];
    newImg.alt=image["movie"];

    switch (count) {
        case 0:
            newImg.setAttribute("class","card card-small");
            //alert("0 yes");
            break;
        case 1:
            newImg.setAttribute("class","card card-medium");
            //alert("1 yes");
            break;
        case 2:
            newImg.setAttribute("class","card card-large");
            //alert("2 yes");
            break;
    }

    //newImg.setAttribute("style","width:100% ; height:100% ; object-fit: fill");
    // switch (count) {
    //     case 0:
    //         newImg.setAttribute("style","width:100% ; height:100% ; object-fit: fill; grid-row-end: span 2 ;");
    //         //alert("0 yes");
    //         break;
    //     case 1:
    //         newImg.setAttribute("style","width:100% ; height:100% ; object-fit: fill; grid-row-end: span 4 ;");
    //         //alert("1 yes");
    //         break;
    //     case 2:
    //         newImg.setAttribute("style","width:100% ; height:100% ; object-fit: fill; grid-row-end: span 6 ;");
    //         //alert("2 yes");
    //         break;
    // }

    parentElement.appendChild(newImg);
    //parentElement.appendChild(finalDiv);

    if(count==2){
        count =0;
    }else{
        count++;
    }
    console.log(count);
});

