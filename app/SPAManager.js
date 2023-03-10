export default class SPAManager{


    _model;


    homeContent(){
        $("#mainContainer").html(this._model.homeContent);
        // window.location.hash = "home";
    }


    browseContent(){
            $("#mainContainer").html(this._model.browseContent);
            // window.location.hash = "about";
    }

    defaultContent(){
        $("#mainContainer").html(this._model.defaultContent);
        // window.location.hash = "home";
    }



    updateView(){
        $('title').html(`${window.location.hash.split('#')[1]} Page`);
        window.scrollTo(0, 0);
    }


    constructor(_model){
        this._model = _model;
        $(document).ready(e => {
            this.updateView();
            if($("#mainContainer").innerHTML == null){
                $("#mainContainer").html(this.defaultContent());
            }
        });

        $(window).on("hashchange", e => {
            console.log("Hello from routeTo()" + window.location.hash);
            switch(window.location.hash){
                case "#HOME":
                    this.homeContent();
                    break;
                case "#BROWSE":
                    this.browseContent();
                    break;
                default:
                    break;
            }
            this.updateView();
        });
    }
}













/**
 * 
 *         $("#mainContainer").html(`
        <style>.navBtn{color: white; cursor: pointer;}</style>
            <div id="banner">
                <div class="overlay"></div>
                <div id="bannerAbout">
                    <h1>travel-fly</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Fugiat aliquid minus nemo sed est.</p>
                </div>
                <img src="images/hero.png" /></div>
            <div id="contentImages">
                <div>
                    <img src="images/content1.png" />
                </div>
                <div>
                    <img src="images/content2.png" />
                </div>
                <div>
                    <img src="images/content3.png" />
                </div>
            </div>
            <form>
                <h1>Booking Form</h1>
                <div class="formRow">
                    <input name="name" type="text" placeholder="name..." />
                    <input name="email" type="text" placeholder="email..." />
                </div>
                <div class="formRow">
                    <input name="country" type="text" placeholder="country..." />
                    <input name="hotel" type="text" placeholder="hotel..." />
                </div>
                <div class="formRow dateInput">
                    <label  for="checkin">Check-in</label>
                    <input name="checkin" type="date" />
                </div>
                <div class="formRow dateInput">
                    <label for="checkout">Check-out</label>
                    <input name="checkout" type="date" />
                </div>
                <div class="formRow numberInputs">
                    <div>
                        <label for="adults">Adult</label>
                        <input class="numberInput" name="adults" type="number" />
                    </div>
                    <div>
                        <label for="children">Children</label>
                        <input class="numberInput" name="children" type="number" />
                    </div>
                    <div>
                        <label for="rooms">Rooms</label>
                        <input class="numberInput" name="rooms" type="number" />
                    </div>
                </div>
                <div class="formRow">
                    <textarea name="message" placeholder="message..."></textarea>
                </div>
                <button class="submitBtn" type="submit">SUBMIT</button>
            </form>
        `);


                $(document).ready(e => {
            console.log($("#mainContainer").innerHTML);
            if($("#mainContainer").innerHTML == null){
                $("#mainContainer").html(`
                <style>.navBtn{color: white; cursor: pointer;}</style>
                <div id="banner">
                <div class="overlay"></div>
                <div id="bannerAbout">
                    <h1>travel-fly</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Fugiat aliquid minus nemo sed est.</p>
                </div>
                <img src="images/hero.png" /></div>
            <div id="contentImages">
                <div>
                    <img src="images/content1.png" />
                </div>
                <div>
                    <img src="images/content2.png" />
                </div>
                <div>
                    <img src="images/content3.png" />
                </div>
            </div>
            <form>
                <h1>Booking Form</h1>
                <div class="formRow">
                    <input name="name" type="text" placeholder="name..." />
                    <input name="email" type="text" placeholder="email..." />
                </div>
                <div class="formRow">
                    <input name="country" type="text" placeholder="country..." />
                    <input name="hotel" type="text" placeholder="hotel..." />
                </div>
                <div class="formRow dateInput">
                    <label  for="checkin">Check-in</label>
                    <input name="checkin" type="date" />
                </div>
                <div class="formRow dateInput">
                    <label for="checkout">Check-out</label>
                    <input name="checkout" type="date" />
                </div>
                <div class="formRow numberInputs">
                    <div>
                        <label for="adults">Adult</label>
                        <input class="numberInput" name="adults" type="number" />
                    </div>
                    <div>
                        <label for="children">Children</label>
                        <input class="numberInput" name="children" type="number" />
                    </div>
                    <div>
                        <label for="rooms">Rooms</label>
                        <input class="numberInput" name="rooms" type="number" />
                    </div>
                </div>
                <div class="formRow">
                    <textarea name="message" placeholder="message..."></textarea>
                </div>
                <button class="submitBtn" type="submit">SUBMIT</button>
            </form>
                `);
            }
        });
        
        $(".navBtn").click((e){
            var page = e.originalEvent.srcElement.innerHTML;
            $('title').html(`${page} Page`);
            switch(page){
                case "HOME":
                    break;
                case "ABOUT":
                    $("#mainContainer").html(`
                    <style>.navBtn{color: black; cursor: pointer;}</style>
                    <div id="aboutMainSection">
                        <div id="aboutSection1">
                            <h1>ABOUT:<div id="aboutH1Underline"></div></h1>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
                        </div>
                        <div id="aboutSection2">
                            <h1>CLIENT QUOTES:<div id="aboutH2Underline"></div></h1>
                            <div class="quote">
                                <div class="quoteContent">
                                    <div>
                                        <img src="images/quote1.png" />
                                    </div>
                                    <div>
                                        <p>
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                        </p>
                                        <div class="user">
                                            <p>Miranda Brown</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="quote">
                                <div class="quoteContent">
                                <div>
                                    <img src="images/quote2.png" />
                                </div>
                                <div>
                                    <p>
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                    </p>
                                    <div class="user">
                                        <p>Johnathan wes</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    `);
                    break;
                case "TOURS":
                    $("#mainContainer").html(`
                    <style>.navBtn{color: black; cursor: pointer;}</style>
                    <div id="tourMainSection">
                        <div id="tourTopImage">
                            <div class="overlayContent">
                                <h1>TOURS:</h1>
                            </div>
                            <img src="images/tourBanner.png" />
                        </div>
                        <div class="localeRow">
                            <div>
                                <div class="overlayContent">
                                    <h1>Israel</h1>
                                    <p>from $1000</p>
                                    <a href="tours/israel.html" class="learnMoreBtn">Learn More</a>
                                </div>
                                <img src="images/content1.png" />
                            </div>
                            <div>
                                <div class="overlayContent">
                                    <h1>U.S.A</h1>
                                    <p>from $1500</p>
                                    <a href="tours/usa.html" class="learnMoreBtn">Learn More</a>
                                </div>
                                <img src="images/content2.png" />
                            </div>
                            <div>
                                <div class="overlayContent">
                                    <h1>Australia</h1>
                                    <p>from $1800</p>
                                    <a href="tours/australia.html" class="learnMoreBtn">Learn More</a>
                                </div>
                                <img src="images/content3.png" />
                            </div>
                        </div>
                        <div class="localeRow">
                            <div>
                                <div class="overlayContent">
                                    <h1>New Zealand</h1>
                                    <p>from $1200</p>
                                    <a href="tours/newZealand.html" class="learnMoreBtn">Learn More</a>
                                </div>
                                <img src="images/content4.png" />
                            </div>
                            <div>
                                <div class="overlayContent">
                                    <h1>France</h1>
                                    <p>from $2500</p>
                                    <a href="tours/france.html" class="learnMoreBtn">Learn More</a>
                                </div>
                                <img src="images/content5.png" />
                            </div>
                            <div>
                                <div class="overlayContent">
                                    <h1>Egypt</h1>
                                    <p>from $900</p>
                                    <a href="tours/egypt.html" class="learnMoreBtn">Learn More</a>
                                </div>
                                <img src="images/content6.png" />
                            </div>
                        </div>
                        <div class="localeRow">
                            <div>
                                <div class="overlayContent">
                                    <h1>Japan</h1>
                                    <p>from $1300</p>
                                    <a href="tours/japan.html" class="learnMoreBtn">Learn More</a>
                                </div>
                                <img src="images/content7.png" />
                            </div>
                            <div>
                                <div class="overlayContent">
                                    <h1>Canada</h1>
                                    <p>from $2000</p>
                                    <a href="tours/canada.html" class="learnMoreBtn">Learn More</a>
                                </div>
                                <img src="images/content8.png" />
                            </div>
                            <div>
                                <div class="overlayContent">
                                    <h1>U.A.E</h1>
                                    <p>from $3000</p>
                                    <a href="tours/uae.html" class="learnMoreBtn">Learn More</a>
                                </div>
                                <img src="images/content9.png" />
                            </div>
                        </div>
                    </div>
                    `);
                    break;
                case "SPECIAL OFFERS":
                    $("#mainContainer").html(`
                    <style>.navBtn{color: black; cursor: pointer;}</style>
                    <div id="aboutMainSection">
                        <div id="aboutSection2">
                            <h1>SPECIAL OFFERS(S):<div id="specialOffersTitleUnderline"></div></h1>
                            <div class="quote" style="margin:1vw 0;">
                                <div class="quoteContent" style="margin:1vw 0;">
                                    <div style="margin:1vw 0;">
                                        <img src="images/specialsOffersContent1.png" />
                                    </div>
                                    <div style="display: flex;flex-direction: column;">
                                        <h1>BARCELONA, SPAIN<div id="specialOffersTitleUnderline"></div></h1> 
                                        <p>
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                        </p>
                                        <a href="tours/egypt.html" class="learnMoreBtn" style="width:fit-content;margin:0;position: absolute;bottom: 0;">Learn More</a>
                                    </div>
                                </div>
                            </div>
                            <div class="quote" style="margin:1vw 0;">
                                <div class="quoteContent" style="margin:1vw 0;">
                                <div style="margin:1vw 0;">
                                    <img src="images/specialsOffersContent2.png" />
                                </div>
                                <div style="display: flex;flex-direction: column;position: relative;">
                                    <h1>BANGKOK, THAILAND<div id="specialOffersTitleUnderline"></div></h1> 
                                    <p>
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                    </p>
                                    <a href="tours/egypt.html" class="learnMoreBtn" style="width:fit-content;margin:0;position: absolute;bottom: 0;">Learn More</a>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    `);
                    break;
                case "BLOG":
                    $("#mainContainer").html(`
                    <style>.navBtn{color: black; cursor: pointer;}</style>
                    <div id="blogMainSection">
                        <div class="blogSection">
                            <h1>
                                BLOG:
                                <div id="blogTitleUnderline"></div>
                            </h1>
                            <div class="blog" style="margin:1vw 0;">
                                <div class="blogContent" style="margin:1vw 0;">
                                    <div class="dateSection">
                                        <img src="images/dates.jpg" />
                                    </div>
                                    <div style="display: flex;flex-direction: column;">
                                        <div style="margin-bottom: 1vw;">
                                            <img src="images/blogContent2.png" />
                                        </div>
                                        <div>
                                            <h1>Sed et persipiatis unde omnis iste natus</h1> 
                                            <p class="blogText">
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="blogContent" style="margin:1vw 0;">
                                    <div class="dateSection">
                                        <img src="images/dates2.jpg" />
                                    </div>
                                    <div style="display: flex;flex-direction: column;">
                                        <div style="margin-bottom: 1vw;">
                                            <img src="images/blogContent2.png" />
                                        </div>
                                        <div>
                                            <h1>Sed et persipiatis unde omnis iste natus</h1> 
                                            <p class="blogText">
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    `);
                    break;
                case "CONTACT":
                    $("#mainContainer").html(`
                    <style>.navBtn{color: black; cursor: pointer;}</style>
                    <div id="contactMainSection">
                    <div class="contactSection">
                        <h1>CONTACT US:<div id="contactTitleUnderline"></div></h1>
                        <div class="contact" style="margin:1vw 0;">
                            <div class="contactContent" style="margin:1vw 0;">
                                <div>
                                    <img src="images/contactUs.png"/>
                                </div>
                                <div style="display: flex;flex-direction: column;">
                                    <p>
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                    </p>
                                </div>
                            </div>
                            <div class="contactContent" style="margin:1vw 0;">
                                <form>
                                    <input name="tourName" type="text" placeholder="Tour name..." />
                                    <input name="email" type="text" placeholder="Email Address..." />
                                    <input name="company" type="text" placeholder="Company..." />
                                    <textarea name="message"placeholder="Message..."></textarea>
                                    <button class="submitBtn contactBtn" type="submit">SEND MESSAGE</button>
                                    <!-- <h1>Booking Form</h1>
                                    <div class="formRow">
                                        <input name="name" type="text" placeholder="name..." />
                                        <input name="email" type="text" placeholder="email..." />
                                    </div>
                                    <div class="formRow">
                                        <input name="country" type="text" placeholder="country..." />
                                        <input name="hotel" type="text" placeholder="hotel..." />
                                    </div>
                                    <div class="formRow dateInput">
                                        <label  for="checkin">Check-in</label>
                                        <input name="checkin" type="date" />
                                    </div>
                                    <div class="formRow dateInput">
                                        <label for="checkout">Check-out</label>
                                        <input name="checkout" type="date" />
                                    </div>
                                    <div class="formRow numberInputs">
                                        <div>
                                            <label for="adults">Adult</label>
                                            <input class="numberInput" name="adults" type="number" />
                                        </div>
                                        <div>
                                            <label for="children">Children</label>
                                            <input class="numberInput" name="children" type="number" />
                                        </div>
                                        <div>
                                            <label for="rooms">Rooms</label>
                                            <input class="numberInput" name="rooms" type="number" />
                                        </div>
                                    </div>
                                    <div class="formRow">
                                        <textarea name="message" placeholder="message..."></textarea>
                                    </div>
                                    <button class="submitBtn" type="submit">SUBMIT</button> -->
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div >
        
                </div>
                    `);
                    break;
                default:
                    $("#mainContainer").html(`
                    <style>.navBtn{color: white; cursor: pointer;}</style>
                    <div id="banner">
                    <div class="overlay"></div>
                    <div id="bannerAbout">
                        <h1>travel-fly</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Fugiat aliquid minus nemo sed est.</p>
                    </div>
                    <img src="images/hero.png" /></div>
                <div id="contentImages">
                    <div>
                        <img src="images/content1.png" />
                    </div>
                    <div>
                        <img src="images/content2.png" />
                    </div>
                    <div>
                        <img src="images/content3.png" />
                    </div>
                </div>
                <form>
                    <h1>Booking Form</h1>
                    <div class="formRow">
                        <input name="name" type="text" placeholder="name..." />
                        <input name="email" type="text" placeholder="email..." />
                    </div>
                    <div class="formRow">
                        <input name="country" type="text" placeholder="country..." />
                        <input name="hotel" type="text" placeholder="hotel..." />
                    </div>
                    <div class="formRow dateInput">
                        <label  for="checkin">Check-in</label>
                        <input name="checkin" type="date" />
                    </div>
                    <div class="formRow dateInput">
                        <label for="checkout">Check-out</label>
                        <input name="checkout" type="date" />
                    </div>
                    <div class="formRow numberInputs">
                        <div>
                            <label for="adults">Adult</label>
                            <input class="numberInput" name="adults" type="number" />
                        </div>
                        <div>
                            <label for="children">Children</label>
                            <input class="numberInput" name="children" type="number" />
                        </div>
                        <div>
                            <label for="rooms">Rooms</label>
                            <input class="numberInput" name="rooms" type="number" />
                        </div>
                    </div>
                    <div class="formRow">
                        <textarea name="message" placeholder="message..."></textarea>
                    </div>
                    <button class="submitBtn" type="submit">SUBMIT</button>
                </form>
                    `);
                    break;
            }
        });


        // toursContent(){
    //     $("#mainContainer").html(this.__model.toursContent);
        // window.location.hash = "tours";
        // $(".learnMoreBtn").click(e => {
        //     this.__model.pageName = e.originalEvent.srcElement.name;
        //     this.updateView();
        //     switch(this.__model.pageName){
        //         case "AUSTRALIA":
        //             this.AUSContent();
        //             break;
        //         case "CANADA":
        //             this.CANContent();
        //             break;
        //         case "EGYPT":
        //             this.EGTContent();
        //             break;
        //         case "FRANCE":
        //             this.FREContent();
        //             break;
        //         case "ISRAEL":
        //             this.ISLContent();
        //             break;
        //         case "JAPAN":
        //             this.JPNContent();
        //             break;
        //         case "NEW ZEALAND":
        //             this.NZContent();
        //             break;
        //         case "USA":
        //             this.USAContent();
        //             break;
        //         case "UAE":
        //             this.UAEContent();
        //             break;
        //         default:
        //             this.toursContent();
        //             break;
        //     }
        // });
    // }

    /**
     * Tours sub content controller functions.
     

    // AUSContent(){
    //     $("#mainContainer").html(this.__model.tours_Aus);
    // }

    // CANContent(){
    //     $("#mainContainer").html(this.__model.tours_Can);
    // }

    // EGTContent(){
    //     $("#mainContainer").html(this.__model.tours_Egt);
    // }

    // FREContent(){
    //     $("#mainContainer").html(this.__model.tours_Fre);
    // }

    // ISLContent(){
    //     $("#mainContainer").html(this.__model.tours_Isl);
    // }

    // JPNContent(){
    //     $("#mainContainer").html(this.__model.tours_Jpn);
    // }

    // NZContent(){
    //     $("#mainContainer").html(this.__model.tours_NZ);
    // }

    // UAEContent(){
    //     $("#mainContainer").html(this.__model.tours_UAE);
    // }

    // USAContent(){
    //     $("#mainContainer").html(this.__model.tours_USA);
    // }

    // specialOffersContent(){
    //         $("#mainContainer").html(this.__model.specialOffersContent);
    //         // window.location.hash = "specialOffers";
    // }

    // blogContent(){
    //         $("#mainContainer").html(this.__model.blogContent);
    //         // window.location.hash = "blog";
    // }

    // contactContent(){
    //     $("#mainContainer").html(this.__model.contactContent);
    //     // window.location.hash = "contact";
    // }

        // routeTo(_model, page){
    //     console.log("Hello from routeTo()" + window.location.hash + page);
    //     switch(page){
    //         case "#HOME":
    //             $("#mainContainer").html(_model.homeContent);
    //             break;
    //         case "#BROWSE":
    //             $("#mainContainer").html(_model.browseContent);
    //             break;
    //         // case "#ABOUT":
    //         //     this.aboutContent();
    //         //     break;
    //         // case "#TOURS":
    //         //     this.toursContent();
    //         //     break;
    //         // case "#SPECIALOFFERS":
    //         //     this.specialOffersContent();
    //         //     break;
    //         // case "#BLOG":
    //         //     this.blogContent();
    //         //     break;
    //         // case "#CONTACT":
    //         //     this.contactContent();
    //         //     break;
    //         // case "#LearnMore":
    //         //     this.pickTourPage(e);
    //         //     break;
    //         // default:
    //         //     this.defaultContent();
    //         //     break;
    //         default:
    //             break;
    //     }
    // }
 */