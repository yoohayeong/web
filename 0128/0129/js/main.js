$(function(){

    /*slideshow*/
    //each() : 선택한 태그의 개수 만큼 반복하여 실행하는 메서드
   $(".slideshow").each(function(){
       var $slides=$(this).find("img"),  // .slideshow 안에 있는모든 이미지를 선택
              slideCount=$slides.length,  // 슬라이드 개수
              currentIndex=0; // 현재 슬라이드를 나타내는 인덱스로 사용

        //첫번째 슬라이드에 페이드 인으로 표시
            $slides.eq(currentIndex).fadeIn();

        //6초 마다 slideshow 진행
        setInterval(showNextSlide, 6000);
        
        //다음 슬라이드를 표시하는 함수
        function showNextSlide(){
            var nextIndex=(currentIndex+1)%slideCount;
            //다음 표시 할 슬라이드의 인덱스 값 구하는 문장
            //(만약 마지막 슬라이드라면 처음으로 돌아가기 0~3)

            $slides.eq(currentIndex).fadeOut();
            //현재 슬라이드 페이드아웃 숨기
            $slides.eq(nextIndex).fadeIn();
            //다음 스라이드는 페이드인 표시
            currentIndex=nextIndex;
        }
   });  
   
   /* 고정헤더 처리*/
   $(".page-header").each(function(){
        var $window=$(window),
               $header=$(this),
               headerOffsetTop=$header.offset().top;

               $window.on("scroll",function(){
                   /* 윈도우의 스크롤 양을 확인하고
                       헤더의 기본 위치를 지나서 있으면 클래스 이름을 부여하고 그렇지 않으면 삭제
                   */
                    if($window.scrollTop()>headerOffsetTop){
                        $header.addClass("sticky");
                    }else{
                        $header.removeClass("sticky");
                    }
               });
   });
   /* Tab Menu */
   $("#work").each(function(){
       var $tabList=$(this).find(".tabs-nav"),  //탭의 메뉴
              $tabAnchors=$tabList.find("a"), //탭 링크
              $tabPannels=$(this).find(".tabs-panel"); //패널(목록)

         //탭(메뉴)이 클릭이 되었을 때 처리
             $tabList.on("click","a",function(event){
                 event.preventDefault();  //링크 클릭에 대한 기본 동작(이벤트) 취소
                 var $this=$(this);
                 $tabPannels.hide();
                 $($this.attr("href")).show();
             });
        $tabAnchors.eq(0).trigger("click"); //이벤트 강제 발생
   });
   /* top button*/
   $(".back-to-top").click(function(){
       $("html").animate({scrollTop: 0},500);
   });
});