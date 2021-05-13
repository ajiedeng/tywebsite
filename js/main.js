// JavaScript Document
$(function(){
    // tab 
    $('.tab>div:first-child>img').attr("src", "./images/tywgOn.png");
    $('.tab>div').click(function(){
		$('.sliderChange').css("display","none");
		$('.sliderChange').eq($(this).index()).css("display","block");
		$('.tab>div>p').css("color","#B5B5B5 ");
		$('.tab>div>p').eq($(this).index()).css("color","#1D73FF");
		$('.tab>div').removeClass("active");
        $('.tab>div').eq($(this).index()).addClass("active");
        console.log($(this).index(),'index')
        if($(this).index()===0){
            $('.tab>div:first-child>img').attr("src", "./images/tywgOn.png");
            $('.tab>div:last-child>img').attr("src", "./images/internetOff.png");
        }else{
            $('.tab>div:first-child>img').attr("src", "./images/tywgOff.png");
            $('.tab>div:last-child>img').attr("src", "./images/internetOn.png");
        }
    });

    // footer hover
    $(".icons>div").hover(function(){
        $('.icons>div>a').eq($(this).index()).css("display","block");
    },function(){
        $(".icons>div>a").css("display","none");
    });

    // product list
    $(".product-list .ulls1").hover(function(){

        $(".ulls1 .list-item:nth-child(1)").hover(function(){
            $('.ulls1 #liitem1').css("display","block");
            $('.ulls1 #liitem2').css("display","none");
            $('.ulls1 #liitem3').css("display","none");
            $('.ulls1 #liitem4').css("display","none");
            console.log('index1');
        },function(){
            
        });  
        
        $(".ulls1 .list-item:nth-child(2)").hover(function(){
            $('.ulls1 #liitem1').css("display","none");
            $('.ulls1 #liitem4').css("display","none");
            $('.ulls1 #liitem3').css("display","none");
            $('.ulls1 #liitem2').css("display","block");
            console.log('index2');
        },function(){
           
        });
        $(".ulls1 .list-item:nth-child(3)").hover(function(){
            $('.ulls1 #liitem1').css("display","none");
            $('.ulls1 #liitem2').css("display","none");
            $('.ulls1 #liitem3').css("display","block");
            $('.ulls1 #liitem4').css("display","none");
            console.log('index2');
        },function(){
           
        });
        $(".ulls1 .list-item:nth-child(4)").hover(function(){
            $('.ulls1 #liitem1').css("display","none");
            $('.ulls1 #liitem2').css("display","none");
            $('.ulls1 #liitem3').css("display","none");
            $('.ulls1 #liitem4').css("display","block");
            console.log('index2');
        },function(){
           
        });
    },function(){
        console.log('".product-list>.list-item:first-child",---none');
        $('.product-list .item-detail').css("display","none");
    });

   // tab
   $("#tablist li").each(function(index) {
    $(this).click(function() {
        $(".contentin").removeClass("contentin");
        $(".tabin").removeClass("tabin");
        $(".content-box div").eq(index).addClass("contentin");
        $(this).addClass("tabin")
    });
})

})