
	$(document).ready(function(){
            $(".head-anime").hide();
            $(function () {
                $(window).scroll(function () {
                    if ($(this).scrollTop() > 100) {
        
                        // $(".head-anime").addClass("head_active");
                        console.log("123213");

                    } else {
        
                        // $('.head-anime').removeClass(".head_active");
                        console.log("4545");
        
                    }
                });
            });
        });
        