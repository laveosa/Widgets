
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
			text.push('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quam, culpa rerum beatae illum laudantium. At quisquam aperiam pariatur. Soluta.');
			text.push("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem ex eius veritatis ducimus saepe, commodi, quasi autem voluptas modi asperiores vero nisi id! Eius minus blanditiis nulla fugiat, sint veniam eveniet! Saepe reiciendis labore reprehenderit ut obcaecati alias placeat vitae!");
			text.push("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum suscipit, neque saepe. Ducimus totam, ipsam tempore, debitis unde amet. Eos quos eius minus nulla incidunt numquam aut ratione officiis accusamus officia vero at, quo ipsa nam sunt quidem praesentium culpa consectetur, veritatis eveniet voluptas illo! Consectetur soluta reprehenderit delectus est officiis libero itaque optio harum quas. Maiores id reiciendis unde!");
			text.push('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ea sed a distinctio necessitatibus quidem labore assumenda doloribus nisi impedit laborum modi commodi numquam, fuga veritatis aliquid animi ad eos atque hic ab alias. At praesentium fugiat distinctio iure excepturi magnam, ex omnis numquam, eius nihil suscipit velit dolorum non! Exercitationem magni repellat dolorem soluta nihil laborum earum illum omnis veniam id eos asperiores sapiente modi possimus, harum repudiandae vel, quam suscipit voluptatibus nemo vero error, doloribus alias! Reiciendis, et voluptates ipsam exercitationem soluta laborum mollitia nesciunt dolore neque rerum totam, ab corporis natus libero eius dolorum. Ipsam, maxime officiis rem animi natus, eos facere, eveniet, minima atque explicabo optio! Dignissimos vero ut ratione accusantium molestiae impedit consequatur maiores enim!');

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
				console.log(obj);
				obj.parentNode.removeChild(obj);
			}
			setAnim();
		}

	});
})();
















































