
(function(){
    window.addEventListener("load", function(){
        setAnim();
        $('.tabLinks a').on("click", function(){
            restorAnim();  
            var elem = $(this).attr('name');
            $(elem).show().siblings().hide();
            $(this).parent('li').addClass('active').siblings().removeClass('active');
        });

        $('.tabLinks a:nth-child(1)').click();

        function setAnim(){
            var text = new Array();
            text.push('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quam, culpa rerum beatae illum laudantium. At quisquam aperiam pariatur. Soluta. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quam, culpa rerum beatae illum laudantium. At quisquam aperiam pariatur. Soluta. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quam, culpa rerum beatae illum laudantium. At quisquam aperiam pariatur. Soluta. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quam, culpa rerum beatae illum laudantium. At quisquam aperiam pariatur. Soluta. ');
            text.push("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem ex eius veritatis ducimus saepe, commodi, quasi autem voluptas modi asperiores vero nisi id! Eius minus blanditiis nulla fugiat, sint veniam eveniet! Saepe reiciendis labore reprehenderit ut obcaecati alias placeat vitae!");
            text.push("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum suscipit, neque saepe. Ducimus totam, ipsam tempore, debitis unde amet. Eos quos eius minus nulla incidunt numquam aut ratione officiis accusamus officia vero at, quo ipsa nam sunt quidem praesentium culpa consectetur, veritatis eveniet voluptas illo! Consectetur soluta reprehenderit delectus est officiis libero itaque optio harum quas. Maiores id reiciendis unde!");
            text.push('8888888888 888888888888888 888888888888888 8888888888888888888888 888888888888888 888888888888888888 8888888888888888888888 8888888888888888888 888888888888888888 88888888888888888 88888888888888888888 8888888888888888 888888888888888888888888 888888888888888888 888888888888888888 8888888888888888888 888888888888888888888 88888888888888 8888888888888888 88888888888888888888888888888888888888888888888 8888888888 8888888888888 88888888888 8888888888888 88888888888888 888888 8888888 88888888888 88888888888 888888888888 888888888 8888888888 88888888888888888 8888888 88888888 888888888888 8888888888 8888888888 88888888888 88888888888 888888888888 888888888888 888888888888 888888888888 888888888888 88888888 88888888888888 8888888 88888888888888888888888888888888888888888888888888888888888888888888888888888 88888888888 8888888888888888 8888888888888 888888888888888 88888888888 88888888888 88888888888 88888888888 88888888888 888888888 88888888888888 8888888888888 88888888 888888888888 888888888888 888888888 8888888888888 88888888888 888888888 88888888888 88888888888888 8888888888 88888888888888 88888888888 888888888 888888888888 8888888');

            for (var i = 0; i < text.length; i++) {
                var textConteiner = document.createElement('span');
                for (var j = 0; j < text[i].length; j++) {
                    var elem = document.createElement('span');
                    elem.innerHTML = text[i][j];
                    elem.style.transition = "all 800ms ease-in";
                    elem.style.position = "relative";
                    elem.style.top = 0;
                    elem.onmouseover = function(){
                        this.style.top = 300 + 'px';
                    }
                    textConteiner.appendChild(elem);        
                }
                document.getElementById("tab" + (i+1)).appendChild(textConteiner);
            }
        }

        function restorAnim(){
            var elems = document.querySelectorAll(".tab");
            for (var i = 1; i <= elems.length; i++) {
                var path = "#tab"+i+" span";
                var obj = document.querySelector(path);
                obj.parentNode.removeChild(obj);
            }
            setAnim();
        }

    });
})();

(function(){
    window.addEventListener("load", function(){
        $(".bookMark").on("click", function(){
            $(".bookMark").css({
                top: "30px"
            });
            $(this).css({
                top: "6px"
            });

            $(".page").css({height: 0, display: "none"});
            var page = document.getElementById(this.getAttribute("data-tail"));
            
            $(page).css({
                height: "100%",
                display: "block"
            });

        });

        $(".textPage").on("input", function(){
            var key = this.parentNode.id;
            var message = this.value;
            localStorage.setItem(key, message);

        });

        $(".bookMark").eq(0).click();
        getText();

        function getText(){
            var elems = $(".page");
            for (var i = 0; i < elems.length; i++) {
                $(elems[i]).children().val(localStorage.getItem(elems[i].id));
            }
        }
    });
})();

(function(){
    window.addEventListener("load", function(){
        $('.darkMark').on("click", function(){
            $('.darkContent').css({width: "8px"});
            $('.darkContent div').css({display: "none"});
            var page = "#dark_content_";
            page += this.id.substr(-1);
            $(page).css({width: "100%"});
            $(page + " div").css({display: "block"});
        });

        $('.darkMark').eq(0).click();

    });
})();

(function(){
    window.addEventListener("load", function(){
        var infoTest = new hrManager();

        $(".boxMark").on("click", function(){
            $(".boxMarkActive").removeClass('boxMarkActive');
            $(this).addClass('boxMarkActive');
            $(".boxContentActive").removeClass('boxContentActive');
            var path = "#" + $(this).attr('data-tail');
            $(path).addClass('boxContentActive');
        });

        $(".boxMark").eq(0).click();

        $("#gender_block .btnSet").on("click", function(){
            $("#gender_block .btnSet").removeClass("btnSetActive");
            $(this).addClass("btnSetActive");
        });

        $(".rbGender[value=male]").eq(0).click();

        $("#married_block .btnSet").on("click", function(){
            $("#married_block .btnSet").removeClass("btnSetActive");
            $(this).addClass("btnSetActive");
        });

        $(".rbMStatus[value=single]").eq(0).click();

        $("#row_6 .contentText").autocomplete({
            source: cityNameList,
            delay: 300,
            max: 6,
            minLength: 1
        });

        $(".contentText").tooltip({
            position: { my: "left+15 center", at: "right center"},
            show: {effect: "blind", duration: 300, delay: 600},
            hide: {effect: "explode", duration: 300}
        });

        $(".fileUpload").hover(
            function(){ 
                if(infoTest.getGender() == "male")
                    $(".imgFile").attr("src", "image/male_photo_hover.jpg");
                else
                    $(".imgFile").attr("src", "image/fimale_photo_hover.jpg");

            },
            function(){
                if(infoTest.getGender() == "male")
                    $(".imgFile").attr("src", "image/male_photo.jpg");
                else
                    $(".imgFile").attr("src", "image/fimale_photo.jpg");

            });

        $(".fileUpload input[type=file]").on("change", function(){

            ///////////////////////////////////////////////////////////////////////////////////////
            //////
            //////     in progress   :)   in progress  :)   in progress  :)   in progress  
            //////
            ///////////////////////////////////////////////////////////////////////////////////////

        });

        ////++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++/////
        ////     fio_validation    fio_validation    fio_validation    fio_validation    fio_validation       /////
        ////++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++/////

        var elem = $(".rowMain");

        for (var i = 0; i <= elem.length; i++) 
            $("#row_"+i+" .contentText").on("change", function(){
                validationCheck(this);
            });

        $(".rbGender[value=male]").on("click", function(){   
            infoTest.setGender("male");
            $(".imgFile").attr('src', 'image/male_photo.jpg');
        });

        $(".rbGender[value=fimale]").on("click", function(){   
            infoTest.setGender("fimale");
            $(".imgFile").attr('src', 'image/fimale_photo.jpg');
        });

        $(".rbMStatus[value=single]").on("click", function(){
            infoTest.setMaritalStatus("single");
        });

        $(".rbMStatus[value=married]").on("click", function(){
            infoTest.setMaritalStatus("merried");
        });

        ////++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++/////
        ////   date_vs_content_check   date_vs_content_check   date_vs_content_check   date_vs_content_check  /////
        ////++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++/////

        dateSetDefault();

        $(".textTable").on("change", function(){
            var par = "#" + $(this).parents("tr").attr("id");
    
            if($(this).val().length == 0) {
                $(this).css({backgroundColor: "white"});
                var obj = {
                    key: "",
                    value: ""
                };
                infoTest.setEducation(par, obj);
                infoTest.setExperience(par, obj);
            }
            else{
              setDate(this);
            }
        });

        var DEl = $("tr[id^=tr_]");
        for (var iz = 1; iz <= DEl.length; iz++) {
            (function(){
                var i = iz;
                $("#tr_"+i+" input[type=date]:first-child()").on("change", function(){
                    if($(this).val() != "" && $("#tr_"+i+" input[type=date]:last-child()").val() != "" && $("#tr_"+i+" input[type=text]").val() != ""){
                        var dot = $("#tr_"+i+" input[type=text]");
                        setDate(dot);
                    }
                });
                $("#tr_"+i+" input[type=date]:last-child()").on("change", function(){
                    if($(this).val() != "" && $("#tr_"+i+" input[type=date]:first-child()").val() != "" && $("#tr_"+i+" input[type=text]").val() != ""){
                        var dot = $("#tr_"+i+" input[type=text]");
                        setDate(dot);
                    }
                });
            })();
        }

        function dateSetDefault(){
            $("#about_table_1 .textTable").each(function(){
                var par = "#" + $(this).parents("tr").attr("id");
                $(this).css({backgroundColor: "white"});
                var obj = {
                    key: undefined,
                    value: undefined
                };
                infoTest.setEducation(par, obj);
            });
    
            $("#about_table_2 .textTable").each(function(){
                var par = "#" + $(this).parents("tr").attr("id");
                $(this).css({backgroundColor: "white"});
                var obj = {
                    key: undefined,
                    value: undefined
                };
                infoTest.setExperience(par, obj);
            });
        }

        function setDate(elem){
            var par = "#" + $(elem).parents("tr").attr("id");
            var dateFrom = $(par+" input[type=date]").eq(0).val();
            var dateTo = $(par+" input[type=date]").eq(1).val();
            var obj = {
                key: "",
                value: ""
            };
    
            if(dateFrom != "" && dateTo != ""){
                obj.key = dateFrom+"/"+dateTo;
                obj.value = $(elem).val();

                if(par.slice(-1) < 4)
                    infoTest.setEducation(par, obj);
                else
                    infoTest.setExperience(par, obj);
    
                $(elem).css({backgroundColor: "lightgreen"});
            }
            else{
                $(elem).css({backgroundColor: "tomato"});
            }
        }

        ////++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++/////
        ////   textarea_event_set   textarea_event_set   textarea_event_set   textarea_event_set   textarea_event_set   /////
        ////++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++/////

        $("#about_cont_2 .textSkills").on("change", function(){
            if($(this).val().length == 0) 
                $(this).css({backgroundColor: "white"});
            else
                infoTest.setSkills($(this).val());
        });
    
        $("#goal .infoStyle").on("change", function(){
            infoTest.setGoal($(this).val()); 
        });

        $("#highlights .infoStyle").on("change", function(){
            infoTest.setHighlights($(this).val()); 
        });

        $("#additional_information .infoStyle").on("change", function(){
            infoTest.setAdditionalInformation($(this).val()); 
        });

        $("#hobby .infoStyle").on("change", function(){
            infoTest.setHobby($(this).val()); 
        });

        ////++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++///
        ////  languages_set  languages_set  languages_set  languages_set  languages_set  languages_set  languages_set   ///
        ////++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++///

        languageSetDefault();

        $("#english select").on("change", function(){
            var obj = {
                key: "English",
                value: $(this).val() 
            };
            infoTest.setLanguage(0, obj);
        });
        $("#english select").change();

        $("#other_1 select[name=other_1]").on("change", function(){
            var obj={};
            if($(this).val() == "none"){
                obj.key = "none";
                obj.value = "none";
            }
            else{
                obj.key = $(this).val();
                obj.value = $("#other_1 select[name=language-level]").val();
            }
            infoTest.setLanguage(1, obj);
        });
        $("#other_1 select[name=language-level]").on("change", function(){
            if($("#other_1 select[name=other_1]").val() != "none"){
                var obj = {
                    key: $("#other_1 select[name=other_1]").val(),
                    value: $(this).val()
                };
                infoTest.setLanguage(1, obj);   
            }
        });

        $("#other_2 select[name=other_2]").on("change", function(){
            var obj={};
            if($(this).val() == "none"){
                obj.key = "none";
                obj.value = "none";
            }
            else{
                obj.key = $(this).val();
                obj.value = $("#other_2 select[name=language-level]").val();
            }
            infoTest.setLanguage(2, obj);
        });
        $("#other_2 select[name=language-level]").on("change", function(){
            if($("#other_2 select[name=other_2]").val() != "none"){
                var obj = {
                    key: $("#other_2 select[name=other_2]").val(),
                    value: $(this).val()
                };
                infoTest.setLanguage(2, obj);   
            }
        });

        function languageSetDefault(){
            for (var i = 0; i < 3; i++) {
                var obj = {
                    key: undefined,
                    value: undefined
                };
                infoTest.setLanguage(i, obj);
            }
        }

        ////++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++///
        ////  show_object_console  show_object_console  show_object_console  show_object_console  show_object_console   ///
        ////++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++///

        // console.clear();
        console.log("press 'Alt'+z to show resume object!");

        $(".btnShow").on("click", function(){
            console.clear();
            console.log("press 'Alt'+z to show resume object!");
            console.log(infoTest.showYourSelf());
            if(infoTest.youReady())
                console.log('object ready!');
            else
                console.log('NOT ready!');
    
            // infoTest.show();
        });                      

        ////+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++///
        ////  check_FIO_validation  check_FIO_validation  check_FIO_validation  check_FIO_validation  check_FIO_validation   ///
        ////+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++///

        function validationCheck(obj){
            var D_type =  $(obj).attr("data-type");
            switch (D_type) {
                case "name":
                if($(obj).val().length == 0){   
                    $(obj).css({backgroundColor: 'white'});
                    infoTest.setName("");
                }
                else if(infoTest.setName($(obj).val()))
                    $(obj).css({backgroundColor: 'lightgreen'});
                else
                    $(obj).css({backgroundColor: 'tomato'});
                break;
                case "family":   
                if($(obj).val().length == 0){   
                    $(obj).css({backgroundColor: 'white'});
                    infoTest.setFamily("");
                }
                else if(infoTest.setFamily($(obj).val()))
                    $(obj).css({backgroundColor: 'lightgreen'});
                else
                    $(obj).css({backgroundColor: 'tomato'});
                break;
                case "position":
                if($(obj).val().length == 0){   
                    $(obj).css({backgroundColor: 'white'});
                    infoTest.setPosition("");
                }
                else if(infoTest.setPosition($(obj).val()))
                    $(obj).css({backgroundColor: 'lightgreen'});
                else
                    $(obj).css({backgroundColor: 'tomato'});
                break;  
                case "phone":
                if($(obj).val().length == 0){   
                    $(obj).css({backgroundColor: 'white'});
                    infoTest.setPhone("");
                }
                else if(infoTest.setPhone($(obj).val()))
                    $(obj).css({backgroundColor: 'lightgreen'});
                else
                    $(obj).css({backgroundColor: 'tomato'});
                break;
                case "city":
                if($(obj).val().length == 0){   
                    $(obj).css({backgroundColor: 'white'});
                    infoTest.setCity("");
                }
                else 
                    infoTest.setCity($(obj).val()); 
                break;
                case "email":
                if($(obj).val().length == 0){   
                    $(obj).css({backgroundColor: 'white'});
                    infoTest.setEmail("");
                }
                else if(infoTest.setEmail($(obj).val()))
                    $(obj).css({backgroundColor: 'lightgreen'});
                else
                    $(obj).css({backgroundColor: 'tomato'});
                break;
                case "skayp":
                if($(obj).val().length == 0){   
                    $(obj).css({backgroundColor: 'white'});
                    infoTest.setSkayp("");
                }
                else if(infoTest.setSkayp($(obj).val()))
                    $(obj).css({backgroundColor: 'lightgreen'});
                else
                    $(obj).css({backgroundColor: 'tomato'});
                break;
                case "git":
                if($(obj).val().length == 0){   
                    $(obj).css({backgroundColor: 'white'});
                    infoTest.setGit("");
                }
                else if(infoTest.setGit($(obj).val()))
                    $(obj).css({backgroundColor: 'lightgreen'});
                else
                    $(obj).css({backgroundColor: 'tomato'});
                break;
                case "web":
                if($(obj).val().length == 0){   
                    $(obj).css({backgroundColor: 'white'});
                    infoTest.setWeb("");
                }
                else if(infoTest.setWeb($(obj).val()))
                    $(obj).css({backgroundColor: 'lightgreen'});
                else
                    $(obj).css({backgroundColor: 'tomato'});
                break;
            }
        }

        ////+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++///
        ////  resume_button_set  resume_button_set  resume_button_set  resume_button_set  resume_button_set  resume_button_set   ///
        ////+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++///

        $(".btnResume[value=show]").on("click", function(){
           var elem = document.querySelectorAll(".resumeTxt[data-code]");
           var i = 0;

           for(e in infoTest){
                if(e.substr(0, 3) == "get"){
                    if(infoTest[e]() != undefined){
                        var text = elem[i].innerHTML.split(": ");
                        elem[i].innerHTML = text[0] + " : ";
                        elem[i].innerHTML += infoTest[e]();    
                    }
                    else if(infoTest[e]() == undefined){
                        var text = elem[i].innerHTML.split(": ");
                        elem[i].innerHTML = text[0] + " : ";
                        elem[i].innerHTML += "none";
                    }
                    i++;
                }
           }

           elem = document.querySelector(".resumeTxt[data-code=education]");
           elem.innerHTML = "";
           var arr = infoTest.getEducation();

           for (var i = 1; i <= 3; i++) {
               if(arr["#tr_"+i].key != undefined)
                elem.innerHTML += arr["#tr_"+i].key + " | " + arr["#tr_"+i].value + "<br/>";     
           }

           // if(arr["#tr_1"].key != undefined)
           //      elem.innerHTML = arr["#tr_1"].key + " | " + arr["#tr_1"].value + "<br/>";     


           elem = document.querySelector(".resumeTxt[data-code=language]");
           elem.innerHTML = "";
           var arr = infoTest.getLanguage();

           for (var i = 0; i < arr.length; i++) {
               if(arr[i].key != undefined || arr[i].key != "")
                elem.innerHTML += arr[i].key + "-" + arr[i].value + "  |  ";
           }

        });

        $(".btnResume[value=confirm]").on("click", function(){
            
        });

        $(".btnResume[value=save]").on("click", function(){
            
        });

        $(".btnResume[value=load]").on("click", function(){
            
        });

        $(".btnResume[value=delete]").on("click", function(){
            
        });

        $(".btnResume[value=delete-all]").on("click", function(){
            
        });

    /////>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>////////                
    });
})();


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function cc(obj){
    console.clear();
    console.log(obj);
}

function hrManager(){
    var patternName = /^[a-zA-Z]{2,20}$/;
    var patternFamily = /^[a-zA-Z\-]{2,40}$/;
    var patternPosition = /^[a-zA-Z\_\s-().#]{2,40}$/;
    var patternPhone = /^[0-9\-+()]{6,20}$/;
    var patternEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var patternUrl = /^((https?|ftp)\:\/\/)?([a-z0-9]{1})((\.[a-z0-9-])|([a-z0-9-]))*\.([a-z]{2,4})/;

    var _name;
    var _family;
    var _position;
    var _gender = "male";
    var _maritalStatus = "single";
    var _city;
    var _phone;
    var _email;
    var _skayp; 
    var _git;
    var _web;
    var _skills;
    var _education = new Array();
    var _experience = new Array();
    var _language = new Array();
    var _goal;
    var _highlights;
    var _additional_information;
    var _hobby;


    /////>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//////

    this.setName = function(data){
        _name = undefined;
        if(patternName.test(data)) _name = data;
        return patternName.test(data);
    };
    this.getName = function(){return _name}

    this.setFamily = function(data){
        _family = undefined;
        if(patternFamily.test(data)) _family = data;
        return patternFamily.test(data);
    };
    this.getFamily = function(){return _family}

    this.setPosition = function(data){
        _position = undefined;
        if(patternPosition.test(data)) _position = data;
        return patternPosition.test(data);
    };
    this.getPosition = function(){return _position}

    this.setGender = function(data){_gender = data;}
    this.getGender = function(){return _gender;}

    this.setMaritalStatus = function(data){_maritalStatus = data;}
    this.getMaritalStatus = function(){return _maritalStatus;}

    this.setCity = function(data){_city = data;}
    this.getCity = function(){return _city;}

    this.setPhone = function(data){
        _phone = undefined;
        if(patternPhone.test(data)) _phone = data;
        return patternPhone.test(data);
    }
    this.getPhone = function(){return _phone;}

    this.setEmail = function(data){
        _email = undefined;
        if(patternEmail.test(data)) _email = data;
        return patternEmail.test(data);
    }
    this.getEmail = function(){return _email;}

    this.setSkayp = function(data){_skayp = data; return true;}
    this.getSkayp = function(){return _skayp;}

    this.setGit = function(data){
        _git = undefined;
        if(patternUrl.test(data)) _git = data;
        return patternUrl.test(data);
    }
    this.getGit = function(){return _git;}

    this.setWeb = function(data){
        _web = undefined;
        if(patternUrl.test(data)) _web = data;
        return patternUrl.test(data);
    }
    this.getWeb = function(){return _web;}

    this.setSkills = function(data){_skills = data;}
    this.getSkills = function(){return _skills;}

    this.setEducation = function(key, data){_education[key] = data;}
    this.getEducation = function(){return _education;}

    this.setExperience = function(key, data){_experience[key] = data;}
    this.getExperience = function(){return _experience;}    

    this.setLanguage = function(key, data){_language[key] = data;}
    this.getLanguage = function(){return _language;}

    this.setGoal = function(data){_goal = data;}
    this.getGoal = function(){return _goal;}

    this.setHighlights = function(data){_highlights = data;}
    this.getHighlights = function(){return _highlights;}

    this.setAdditionalInformation = function(data){_additional_information = data;}
    this.getAdditionalInformation = function(){return _additional_information;}

    this.setHobby = function(data){_hobby = data;}
    this.getHobby = function(){return _hobby;}

    /////>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//////

    /// first option
    this.showYourSelf = function(){
        var message = "name         | " + this.getName() + "\r\n";
        message += "family       | " + this.getFamily() + "\r\n";
        message += "position     | " + this.getPosition() + "\r\n";
        message += "gender       | " + this.getGender() + "\r\n";
        message += "marital      | " + this.getMaritalStatus() + "\r\n";
        message += "city         | " + this.getCity() + "\r\n";
        message += "phone        | " + this.getPhone() + "\r\n";
        message += "email        | " + this.getEmail() + "\r\n";
        message += "skayp        | " + this.getSkayp() + "\r\n";
        message += "git          | " + this.getGit() + "\r\n";
        message += "web          | " + this.getWeb() + "\r\n"; 

        var obj = this.getEducation();
        for (var i = 1; i <= 3; i++){ 
          message += " education   | " + obj["#tr_"+i].key + " " + obj["#tr_"+i].value + "\r\n";
        }
    
        obj = this.getExperience();
        for (var i = 4; i <= 6; i++){
            message += "  experience | " + obj["#tr_"+i].key + " " + obj["#tr_"+i].value + "\r\n";
        }
        obj = this.getLanguage();
        for (var i = 0; i < 3; i++) {
            message += "   language  | " + obj[i].key + " " + obj[i].value + "\r\n";
        }

        message += "skills       | " + this.getSkills() + "\r\n";
        message += "goal         | " + this.getGoal() + "\r\n";
        message += "highlights   | " + this.getHighlights() + "\r\n";
        message += "additional   | " + this.getAdditionalInformation() + "\r\n";
        message += "hobby        | " + this.getHobby() + "\r\n";   

        return message;
    }

    /// second option
    this.show = function(){
        for(elem in this){
            if(elem.substr(0, 3) == "get"){
                console.log(this[elem]());
            }
        }
    }

    this.youReady = function(){
        var objStatus = Array();
        
        for(elem in this){
            if(elem.substr(0) == "getName")
                objStatus.push(this[elem]());
            else if(elem.substr(0) == "getFamily")
                objStatus.push(this[elem]());
            else if(elem.substr(0) == "getPosition")
                objStatus.push(this[elem]());
            else if(elem.substr(0) == "getCity")
                objStatus.push(this[elem]());
            else if(elem.substr(0) == "getPhone")
                objStatus.push(this[elem]());
            else if(elem.substr(0) == "getEmail")
                objStatus.push(this[elem]());
            else if(elem.substr(0) == "getSkills")
                objStatus.push(this[elem]());
            else if(elem.substr(0) == "getGoal")
                objStatus.push(this[elem]());
            else if(elem.substr(0) == "getHighlights")
                objStatus.push(this[elem]());
        }

        for (var i = 0; i < objStatus.length; i++){
            if(objStatus[i] == undefined || objStatus[i] == "")
                return false;
        }    

        return true;
    }
};










































































































































































