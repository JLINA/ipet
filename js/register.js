$(function() {
	$(".fa-long-arrow-left").on("click", function() {
			window.location.href = "login.html"
		})
		//点击登录验证密码和用户名
	$(".registersubmit").on("click", function() {
		var $phone = /^1\d{10}$/.test($(".signphone").val());
		var $istrue = /^[a-zA-Z0-9.]{4,10}$/.test($(".signadmin").val());
		var $ispassword = /^[a-zA-Z0-9.]{4,12}$/.test($(".signpassword").val());
		if ($ispassword && $istrue && $phone) {
			$(".tieps").css({
				"display": "none"
			});
			//cookie部分
			var rename=$(".signadmin").val();
			var repass=$(".signpassword").val();
			if (rename == "" || repass == "") {
				$(".logintip").html("请重新输入！");
			} else {
				var newuser = {
					"name": rename,
					"password": repass
				};
				var sCookie = $.cookie('user');
				if (sCookie == undefined || sCookie == "") {
					var aCookie = [];
					aCookie.push(newuser);
				} else {
					var aCookie = JSON.parse(sCookie);
					var reno = false;
					$.each(aCookie, function() {
						if (this.name == rename) {
							reno = true;
						}
					});
					if (reno) {
						$(".logintip").html("此用户已经注册过了！");
					} else {
						aCookie.push(newuser);
						$(".logintip").html("您已经注册成功！");
						window.location.href="login.html";
					}
				}
			}
			//修改cookie
			$.cookie('user', JSON.stringify(aCookie), {
				expires: 7,
				path: "/"
			});
			console.log("qq," + $.cookie('user'));	
		}
		if ($phone == false) {
			$(".tiepphone").css({
				"display": "block"
			}).find(".logintip").html("请输入正确的手机号！");
		}
		if ($istrue == false) {
			$(".tiepadmin").css({
				"display": "block"
			}).find(".logintip").html("请输入正确的用户名！");
		}
		if ($ispassword == false) {
			$(".tieppassword").css({
				"display": "block"
			}).find(".logintip").html("请输入正确的密码！");
		}
	})
})