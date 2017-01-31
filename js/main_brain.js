
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
			text.push('88888888888888888888888888888888888888888888888888888888888888888888888888888 88888888888888888888888888888888888888888888888888888888888888888888888888888 88888888888888888888888888888888888888888888888888888888888888888888888888888 88888888888888888888888888888888888888888888888888888888888888888888888888888 88888888888888888888888888888888888888888888888888888888888888888888888888888 88888888888888888888888888888888888888888888888888888888888888888888888888888 88888888888888888888888888888888888888888888888888888888888888888888888888888 88888888888888888888888888888888888888888888888888888888888888888888888888888 88888888888888888888888888888888888888888888888888888888888888888888888888888 88888888888888888888888888888888888888888888888888888888888888888888888888888 88888888888888888888888888888888888888888888888888888888888888888888888888888 88888888888888888888888888888888888888888888888888888888888888888888888888888 88888888888888888888888888888888888888888888888888888888888888888888888888888 88888888888888888888888888888888888888888888888888888888888888888888888888888');

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











































