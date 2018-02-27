/**
 * Created by viola on 2017/11/3.
 */
var num=0;
//play��falseʱ�ǲ���
var play=false;
//���ֻ���
var isgo=true;
$(function(){
        $(".video_btn").click(function(){
         if(play==false){
             $(".video").trigger("play");
             $(".video").css("display","inline-block");
             play=true;
         }
         else{
             $(".video").trigger("pause");
             /*$(".video").css("display","none");*/
             play=false ;
         }
        });
        $(".louceng:nth-child(1)").css("backgroundColor", "red");
        $(".diandian:nth-child(1)").css("backgroundColor", "#02BBEB");
        $(document).on("mousewheel",function(e){
            if(e.originalEvent.deltaY>0){
                if(isgo==true){
                    isgo=false;
                    num++;
                    if(num>6){
                        num=6;
                    }
                    $(".diandian").css("backgroundColor", "");
                    $(".diandian:eq(" + num + ")").css("backgroundColor", "#02BBEB");
                    $(".louceng").css("backgroundColor", "");
                    $(".louceng:eq(" + num + ")").css("backgroundColor", "red");
                    $(".ul_banner").animate({
                        "marginTop":(-parseFloat($(".li_banner").height())*num)+"px"
                    },500,function(){
                        isgo=true;
                        //�������֮�����ٶ�
                        showli();
                    })
                }
            }
            else{
                if(isgo==true){
                    isgo=false;
                    num--;
                    if(num<0){
                        num=0;
                    }

                    $(".diandian").css("backgroundColor", "");
                    $(".diandian:eq(" + num + ")").css("backgroundColor", "#02BBEB");

                    $(".louceng").css("backgroundColor", "");
                    $(".louceng:eq(" + num + ")").css("backgroundColor", "red");

                    $(".ul_banner").animate({
                        "marginTop":(-parseFloat($(".li_banner").height())*num)+"px"
                    },function(){
                        isgo=true;
                    })
                }
            }
        })
        lou();
    })
function lou(){
    $(".louceng").each(function(index){
        $(this).click(function(){
            if(index<7){
                $(".louceng").css("backgroundColor", "rgba(47, 79, 79, 0.51)");
                $(this).css("backgroundColor", "red");
                num=index;
                $(".ul_banner").animate({
                    "marginTop":(-parseFloat($(".li_banner").height())*num)+"px"
                },500,function(){
                    showli();
                });
            }
            else{
                if(index==7)
                {
                    $(".ul_banner").css({
                        "marginTop":"0px",
                    })
                    $(".louceng").css("backgroundColor", "");
                    $(".louceng:eq(0)").css("backgroundColor", "red");
                    $("this").css("backgroundColor", "rgba(47, 79, 79, 0.51)");
                }
            }
        })

    })
}
function showli(){
    if(num==1)
    {
        $(".yun1").addClass("yunpao1");
        $(".yun2").addClass("yunpao2");
        $(".yun3").addClass("yunpao3");
        $(".img4").fadeIn(1000)
    }
    if(num==2)
    {
        $(".zhifu1").addClass("zhifu1move");
        $(".zhifu2").addClass("zhifu2move");
        $(".img5").fadeIn(1000)
    }
    if(num==3)
    {
        $(".imgs").css("transform", "scale(1.1)");
        $(".img6").fadeIn(1000)
    }
    if(num==4)
    {
        $(".img7").fadeIn(1000)
        $(".div7").addClass("div_ceng7");
    }
    else if(num==5)
    {
        $(".img8").fadeIn(1000)
        $(".imgm").css("transform", "translatez(0px)");
    }
}
