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
        $("#mainMenu").css("display", "none");
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

        $("#hamburger").on("click", e =>{
            if($("#mainMenu").css("display") == "none"){
                $("#mainMenu").css("display", "block");
            }else if($("#mainMenu").css("display") == "block"){
                $("#mainMenu").css("display", "none");
            }
        });
    }
}