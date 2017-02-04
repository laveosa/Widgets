
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

		///////////////////////////////////////////////////////////////////////////////////////////////////////////
		////     check_events_and_validation   check_events_and_validation   check_events_and_validation      /////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    var elem = $(".rowMain");
    
    for (var i = 0; i <= elem.length; i++) 
    	$("#row_"+i+" .contentText").on("change", function(){
    		validationCheck(this);});
    
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

    $(".textTable").on("change", function(){
    	if($(this).val().length == 0) 
    		$(this).css({backgroundColor: "white"});
    	else{
    		var par = "#" + $(this).parents("tr").attr("id");
    		var dateFrom = $(par+" input[type=date]").eq(0).val();
    		var dateTo = $(par+" input[type=date]").eq(1).val();

    		if(dateFrom != undefined && dateTo != undefined){
    			var obj = {
    				key: dateFrom+"/"+dateTo,
    				value: $(this).val() 
    			};
    			if(par.slice(-1) < 4)
    				infoTest.setEducation(par, obj);
    			else
    				infoTest.setExperience(par, obj);
    		}
			}
		});

		$("#about_cont_2 .textSkills").on("change", function(){
			if($(this).val().length == 0) 
    		$(this).css({backgroundColor: "white"});
    	else
    		infoTest.setSkills($(this).val());
    });

    function validationCheck(obj){
    	if($(obj).val().length == 0)
    		$(obj).css({backgroundColor: 'white'});
    	else{
    		var D_type =  $(obj).attr("data-type");
    		switch (D_type) {
    			case "name":
    			if(infoTest.setName($(obj).val()))
    				$(obj).css({backgroundColor: 'lightgreen'});
    			else
    				$(obj).css({backgroundColor: 'tomato'});
    			break;
    			case "family":
    			if(infoTest.setFamily($(obj).val()))
    				$(obj).css({backgroundColor: 'lightgreen'});
    			else
    				$(obj).css({backgroundColor: 'tomato'});
    			break;
    			case "position":
    			if(infoTest.setPosition($(obj).val()))
    				$(obj).css({backgroundColor: 'lightgreen'});
    			else
    				$(obj).css({backgroundColor: 'tomato'});
    			break;	
    			case "phone":
    			if(infoTest.setPhone($(obj).val()))
    				$(obj).css({backgroundColor: 'lightgreen'});
    			else
    				$(obj).css({backgroundColor: 'tomato'});
    			break;
    			case "city":
    			infoTest.setCity($(obj).val());	
    			break;
    			case "email":
    			if(infoTest.setEmail($(obj).val()))
    				$(obj).css({backgroundColor: 'lightgreen'});
    			else
    				$(obj).css({backgroundColor: 'tomato'});
    			break;
    			case "skayp":
    			if(infoTest.setSkayp($(obj).val()))
    				$(obj).css({backgroundColor: 'lightgreen'});
    			else
    				$(obj).css({backgroundColor: 'tomato'});
    			break;
    			case "git":
    			if(infoTest.setGit($(obj).val()))
    				$(obj).css({backgroundColor: 'lightgreen'});
    			else
    				$(obj).css({backgroundColor: 'tomato'});
    			break;
    			case "web":
    			if(infoTest.setWeb($(obj).val()))
    				$(obj).css({backgroundColor: 'lightgreen'});
    			else
    				$(obj).css({backgroundColor: 'tomato'});
    			break;
    		}
    	}
    }

  });
})();

function hrManager(){
	var patternName = /^[a-zA-Z]{2,20}$/;
	var patternFamily = /^[a-zA-Z\-]{2,40}$/;
	var patternPosition = /^[a-zA-Z\-().#]{2,40}$/;
	var patternPhone = /^[0-9\-+()]{6,20}$/;
	var patternEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var patternUrl = /^(ftp|http|https):\/\/[^ "]+\.[a-z]{1,4}$/;
	

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
	this.getWeb = function(){return _data;}

	this.setSkills = function(data){_skills = data;}
	this.getSkills = function(){return _skills;}

	this.setEducation = function(key, data){_education[key] = data;}
	this.getEducation = function(){return _education;}

	this.setExperience = function(key, data){_experience[key] = data;}
	this.getExperience = function(){return _experience;}	

	/////>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//////


}































