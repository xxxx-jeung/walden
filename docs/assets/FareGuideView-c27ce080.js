import{d as a,_ as c,e as v,m as S,u as _,r as E,o as b,g as n}from"./index-eef5faca.js";import{_ as B,a as C,b as t}from"./--45c4584a.js";const y=a({mounted(){setTimeout(()=>{gsap.registerPlugin(ScrollTrigger),this.SectionGroup__init(),console.log("로드")},1e3)},methods:{SectionGroup__init(){$(".horizontal").each(function(s,i){var D=$(i),A=D.find(" > div");gsap.to(A,{xPercent:-100*(A.length-1),ease:"none",scrollTrigger:{trigger:D,start:"top top",end:"+="+(A.length-1)+"00%",pin:!0,scrub:!0,markers:!1}})})}}}),m="/assets/banner-c59247d2.png",g="/assets/pc_banner-3a66eb72.png",p="/assets/banner1-1d032fa0.png",o="/assets/banner2-4a378d0c.png",h="/assets/banner3-e26249ef.png",x="/assets/banner4-6b2724ab.png",u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAMCAYAAAC9QufkAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACvSURBVHgBldDdDcIgFAVgLuo7I3QEV3ADV/DJdIRqTDBGTVzA6EsdwQ0aN2EQ9QjFNv0BWkhIIJfvAJdYxJDnazIlyt/ASmapohg4IyrAWKKn+gCLSSw0e32jIPAXr4rHy30+BpZYP3u3WT95Xfyi6Ab44DZLH2bNTQNsEaIZMARLbDqn/6Ds1gYcTrflEPz/3X1L65AD1jgU4IMt7AoIwR5uBjBgH4LeIWUuxpz7AQPCdFcH+RpEAAAAAElFTkSuQmCC",d="data:image/png;base64,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",r="data:image/png;base64,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",w=m,X=v('<div class="menu3 banner"><picture><source srcset="'+w+'" media="(max-width: 730px)"><img src="'+g+'" alt="" class="w100 pc_banner"></picture><div class="banner_img_box"><img src="'+p+'" alt="" class="banner_img1"><img src="'+o+'" alt="" class="banner_img2"><img src="'+h+'" alt="" class="banner_img3"></div><img src="'+x+'" alt="" class="banner_img4"></div><section class="container menu3"><div class="box1"><div class="text_box"><div class="tit"> 인싸이트플러스 구독하고 <br> 센터 운영 업그레이드 하기 </div><div class="text"> 구독만 해도 <b>매달 최대 50,000원 상당</b>의<br> 인싸이트 심리검사 제공 혜택을 받을 수 있어요.<br><br><p>※ 멤버십은 언제든지 변경 또는 해지가 가능합니다.</p></div></div></div></section><div class="menu3"><div class="box2"><div class="text_box"><div class="tit">구독 플랜</div></div><div class="horizontal price"><div class="standard_price"><h2>기본형</h2><div><div class="sub_tit"><span>상담사 등록은 무제한!</span></div><div class="price"> 센터 당 29,900원 <p>(VAT 별도)</p></div></div><div class="left-box"><h4>플랜 기능</h4><ul><li><i><img src="'+u+'" alt=""></i>인싸이트플러스 내담자 관리 시스템 </li><li><i><img src="'+u+'" alt=""></i>자동, 직접 문자 발송 서비스 </li><li><i><img src="'+u+'" alt=""></i>인싸이트 계정 연동 </li></ul></div><div><h4>구독 혜택</h4><ul><li><i><i><img src="'+u+'" alt=""></i></i><p><b class="cpr">매월 5건</b> 심리검사 무료 이용<br> 25,000원 상당의 인싸이트 심리검사 </p></li></ul></div><div><h4>추천 유형<img src="'+d+'" alt=""></h4><p> 언제, 어디서나, 실시간으로 상담 센터 관리에만<br> 집중하실 수 있습니다.<br><br> ▷ 센터 중심의 내담자 관리 프로그램<br> ▷ 상담사, 내담자 무제한 등록 관리 가능 </p></div></div><div class="premium_price"><h2>네이버 연동형</h2><div><div class="sub_tit"><span>상담사 등록은 무제한!</span></div><div class="price"> 센터 당 39,900원 <p>(VAT 별도)</p></div></div><div class="right-box"><h4>플랜 기능</h4><ul><li><i><img src="'+u+'" alt=""></i>인싸이트플러스 내담자 관리 시스템 </li><li><i><img src="'+u+'" alt=""></i>자동, 직접 문자 발송 서비스 </li><li><i><img src="'+u+'" alt=""></i>인싸이트 계정 연동 </li><li><i><img src="'+u+'" alt=""></i>네이버 데이터 연동(플레이스, 예약, 페이) </li><li><i><img src="'+u+'" alt=""></i>인플 AI 서비스(메시징, 네이버 지식iN 에디터) </li></ul></div><div><h4>구독 혜택</h4><ul><li><i><img src="'+u+'" alt=""></i><p><b class="cpr">월 10건</b>심리검사 무료 이용<br> 50,000원 상당의 인싸이트 심리검사 </p></li></ul></div><div><h4>추천 유형<img src="'+r+'" alt=""></h4><p> 네이버와 연동된 예약, 내담자 데이터로<br> 더 많은, 새로운 내담자를 만날 수 있습니다.<br><br> ▷ 인플 기본형 플랜 기능 100% 이용<br> ▷ 네이버 예약 연동을 통한 편리한 예약 관리<br> ▷ 네이버 지식iN 연동으로 무료 키워드 광고 효과 </p></div></div></div><div class="pc_box2 price"><div class="standard_price"><h2>기본형</h2><div><div class="sub_tit"><span>상담사 등록은 무제한!</span></div><div class="price"> 센터 당 29,900원 <p>(VAT 별도)</p></div></div><div class="left-box"><h4>플랜 기능</h4><ul><li><i><img src="'+u+'" alt=""></i>인싸이트플러스 내담자 관리 시스템 </li><li><i><img src="'+u+'" alt=""></i>자동, 직접 문자 발송 서비스 </li><li><i><img src="'+u+'" alt=""></i>인싸이트 계정 연동 </li></ul></div><div><h4>구독 혜택</h4><ul><li><i><i><img src="'+u+'" alt=""></i></i><p><b class="cpr">매월 5건</b> 심리검사 무료 이용<br> 25,000원 상당의 인싸이트 심리검사 </p></li></ul></div><div><h4>추천 유형<img src="'+d+'" alt=""></h4><p> 언제, 어디서나, 실시간으로 상담 센터 관리에만<br> 집중하실 수 있습니다.<br><br> ▷ 센터 중심의 내담자 관리 프로그램<br> ▷ 상담사, 내담자 무제한 등록 관리 가능 </p></div></div><div class="premium_price"><h2>네이버 연동형</h2><div><div class="sub_tit"><span>상담사 등록은 무제한!</span></div><div class="price"> 센터 당 39,900원 <p>(VAT 별도)</p></div></div><div class="right-box"><h4>플랜 기능</h4><ul><li><i><img src="'+u+'" alt=""></i>인싸이트플러스 내담자 관리 시스템 </li><li><i><img src="'+u+'" alt=""></i>자동, 직접 문자 발송 서비스 </li><li><i><img src="'+u+'" alt=""></i>인싸이트 계정 연동 </li><li><i><img src="'+u+'" alt=""></i>네이버 데이터 연동(플레이스, 예약, 페이) </li><li><i><img src="'+u+'" alt=""></i>인플 AI 서비스(메시징, 네이버 지식iN 에디터) </li></ul></div><div><h4>구독 혜택</h4><ul><li><i><img src="'+u+'" alt=""></i><p><b class="cpr">월 10건</b>심리검사 무료 이용<br> 50,000원 상당의 인싸이트 심리검사 </p></li></ul></div><div><h4>추천 유형<img src="'+r+'" alt=""></h4><p> 네이버와 연동된 예약, 내담자 데이터로<br> 더 많은, 새로운 내담자를 만날 수 있습니다.<br><br> ▷ 인플 기본형 플랜 기능 100% 이용<br> ▷ 네이버 예약 연동을 통한 편리한 예약 관리<br> ▷ 네이버 지식iN 연동으로 무료 키워드 광고 효과 </p></div></div></div><div class="naver-data-link-service"><h2>네이버 데이터 연동 서비스</h2><div class="contetns"><ul><li><span>네이버 예약 정보</span><p>예약 일정, 시간 정보 연동 / 예약 관리</p></li><li><span>신규 내담자 연동</span><p>예약자 이름, 연락처로 인플 내담자 자동 등록</p></li><li><span>연동 서비스 비용</span><p>최초 데이터 연동 시 9,900원(내담자 당 1회)</p></li></ul><div class="notcie"><p class="top">인플 런칭 이벤트 할인 적용 2024년 12월까지</p><p class="bottom"><span>19,900원</span> <strong>▶</strong> 9,900원 <strong>(50% 할인)</strong></p></div></div></div><a href="https://plus.inpsyt.me/login" target="_blank" class="bt"> 1개월 무료 시작하기 </a><div class="text_box"><div class="text"><p> * 부가서비스 <br>문자와 심리검사는 사용료 만큼 청구됩니다. SMS 20원, LMS 60원, 심리검사 별 가격 상이 (VAT 별도) </p></div></div></div></div><section class="container menu3"><div class="box3"><div class="text_box"><div class="tit">플랜별 상세 기능 비교</div><div class="table_box"><h4>인플 심리상담센터 운영 시스템</h4><table><tr><th></th><th>기본형</th><th>네이버 연동형</th></tr><tr><td> 내담자/상담사 <br> 등록 </td><td class="c222">무제한</td><td class="cpr">무제한</td></tr><tr><td>상담사 관리</td><td><img src="'+B+'" alt=""></td><td><img src="'+C+'" alt=""></td></tr><tr><td>다수 센터 관리</td><td><img src="'+B+'" alt=""></td><td><img src="'+C+'" alt=""></td></tr><tr><td>상담일지 관리</td><td><img src="'+B+'" alt=""></td><td><img src="'+C+'" alt=""></td></tr><tr><td>심리검사 발송</td><td><img src="'+B+'" alt=""></td><td><img src="'+C+'" alt=""></td></tr><tr><td>모바일 APP</td><td><img src="'+B+'" alt=""></td><td><img src="'+C+'" alt=""></td></tr><tr><td>네이버 예약 데이터 연동(신규 내담자 자동 등록)</td><td><img src="'+t+'" alt=""></td><td class="cpr"> 초기 5건<br> 무료 </td></tr></table></div><div class="table_box"><h4>네이버 데이터 연동 서비스(무료 광고 효과)</h4><table><tr><th></th><th>기본형</th><th>네이버 연동형</th></tr><tr><td> 인플-네이버 <br> 캘린더 자동 연동 </td><td><img src="'+t+'" alt=""></td><td><img src="'+C+'" alt=""></td></tr><tr><td> 인플-네이버 예약 <br> 내담자 자동등록 </td><td><img src="'+t+'" alt=""></td><td><img src="'+C+'" alt=""></td></tr><tr><td> 인플-네이버 예약 <br> 알림 </td><td><img src="'+t+'" alt=""></td><td><img src="'+C+'" alt=""></td></tr><tr><td> 인플-네이버 <br> 지식iN 연동 </td><td><img src="'+t+'" alt=""></td><td><img src="'+C+'" alt=""></td></tr><tr><td> 인플-네이버 FAQ <br> 연동형 에디터 </td><td><img src="'+t+'" alt=""></td><td><img src="'+C+'" alt=""></td></tr><tr><td>네이버 스마트 플레이스 정보 연동</td><td><img src="'+t+'" alt=""></td><td><img src="'+C+'" alt=""></td></tr><tr><td>네이버 PAY 연동</td><td><img src="'+t+'" alt=""></td><td><img src="'+C+'" alt=""></td></tr></table></div><div class="table_box"><h4>인플AI 서비스</h4><table><tr><th></th><th>기본형</th><th>네이버 연동형</th></tr><tr><td> 문자 템플릿 <br> 커스터마이징 </td><td><img src="'+B+'" alt=""></td><td><img src="'+C+'" alt=""></td></tr><tr><td> 문자 자동 발송<br> 설정 </td><td><img src="'+B+'" alt=""></td><td><img src="'+C+'" alt=""></td></tr><tr><td> 문자 발송 번호<br> 설정 </td><td><img src="'+B+'" alt=""></td><td><img src="'+C+'" alt=""></td></tr><tr><td> AI 메세징<br> (개발중) </td><td><img src="'+t+'" alt=""></td><td><img src="'+C+'" alt=""></td></tr><tr><td> 지식iN FAQ AI <br> 에디터 (개발중) </td><td><img src="'+t+'" alt=""></td><td><img src="'+C+'" alt=""></td></tr></table></div><div class="table_box"><h4>인싸이트 연동</h4><table><tr><th></th><th>기본형</th><th>네이버 연동형</th></tr><tr><td> 인싸이트<br> 심리검사 혜택 </td><td class="c222">월 5건</td><td class="cpr">월 10건</td></tr><tr><td> 인싸이트 내담자<br> 연동 </td><td><img src="'+B+'" alt=""></td><td><img src="'+C+'" alt=""></td></tr><tr><td> 인싸이트 심리<br> 검사 결과 연동 </td><td><img src="'+B+'" alt=""></td><td><img src="'+C+'" alt=""></td></tr></table></div></div></div></section><section class="menu3"><div class="box4" style="padding:50px 20px;"><div class="text_box container"><h3>유의사항</h3><ul><li> 무료 체험 기간 전 유료 플랜(기본형 / 네이버 연동형) 서비스 전환 시 무료 체험 혜택을 동일하게 이용하실 수 있습니다. (무료 체험 기간 종료 시 선택한 플랜으로 자동 유료 전환) </li><li> 인싸이트플러스 서비스 가입 시 10G의 저장 공간이 제공됩니다.(10G 초과 시 비용 부과) </li><li> 2024년 03월까지 플랜별 무료 심리검사 혜택은 인싸이트플러스의 모든 검사 이용 가능<br>(2023년 04월 부터 STS 기질검사, GOLDEN 성격유형검사, PAI 성격 평가 질문지로 변경) </li><li> 네이버 연동 서비스 비용은 <br> 1) 네이버 예약 연동 시 우리 센터에 등록되지 않은 새로운 내담자 정보 등록 시 <br> 2) 최종 상담 날짜가 1년 초과된 내담자가 네이버 예약으로 예약 신청 시 </li><li>네이버 데이터 연동 서비스 비용 할인은 2024년 12월까지 적용됩니다.</li></ul></div></div></section><div class="section box10"><div class="text_box"><div class="tit"> 인싸이트플러스로 <br> 시작해보세요. </div><a href="https://plus.inpsyt.me/login" target="_blank" class="bt"> 1개월 무료 시작하기 </a></div></div>',6);function N(s,i,D,A,e,F){return X}const Q=c(y,[["render",N]]),P=a({mounted(){setTimeout(()=>{gsap.registerPlugin(ScrollTrigger),this.SectionGroup__init(),console.log("로드")},1e3)},methods:{SectionGroup__init(){$(".horizontal").each(function(s,i){var D=$(i),A=D.find(" > div");gsap.to(A,{xPercent:-100*(A.length-1),ease:"none",scrollTrigger:{trigger:D,start:"top top",end:"+="+(A.length-1)+"00%",pin:!0,scrub:!0,markers:!1}})})}}}),l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA+SURBVHgB5VGxCQAwCDN9oVf0tR7U13pFb6iTIOIkCIKZxBCSEJCDefeX+60Dyw8KoLgIunSqUyye9+y4EwMCUApr/NoV2AAAAABJRU5ErkJggg==",f=m,I=v('<div class="menu3 banner"><picture><source srcset="'+f+'" media="(max-width: 730px)"><img src="'+g+'" alt="" class="w100 pc_banner"></picture><div class="banner_img_box"><img src="'+p+'" alt="" class="banner_img1"><img src="'+o+'" alt="" class="banner_img2"><img src="'+h+'" alt="" class="banner_img3"></div><img src="'+x+'" alt="" class="banner_img4"></div><section class="container menu3"><div class="box1"><div class="text_box"><div class="tit"> 인싸이트플러스 구독하고 <br> 센터 운영 업그레이드 하기 </div><div class="text"> 구독만 해도 <b>매달 최대 50,000원 상당</b>의<br> 인싸이트 심리검사 제공 혜택을 받을 수 있어요.<br><br><p>※ 멤버십은 언제든지 변경 또는 해지가 가능합니다.</p></div></div></div></section><div class="menu3"><div class="box2"><div class="text_box"><div class="tit">구독 플랜</div></div><div class="horizontal price"><div class="premium_price"><h2>프리미엄</h2><div><div class="sub_tit"><span>상담사 등록은 무제한!</span></div><div class="price">센터 당 39,900원</div><p>(VAT 별도)</p></div><div><ul><li><img src="'+l+'" alt="">부가서비스 이용료</li><li><img src="'+l+'" alt="">네이버를 통해 유입된 신규 내담자 할인 <br><del>19,900원</del> <b>&gt;</b> 9,900원 <b>(50% 할인)</b></li></ul></div><div><h4>플랜 기능</h4><ul><li><img src="'+u+'" alt="">인싸이트플러스 내담자 관리 시스템 </li><li><img src="'+u+'" alt="">문자 발송 서비스</li><li><img src="'+u+'" alt="">AI 서비스 (메세징, 네이버지식in FAQ 에디터) </li><li><img src="'+u+'" alt="">네이버 연동(플레이스, 예약, 페이) </li><li><img src="'+u+'" alt="">인싸이트 연동</li></ul></div><div><h4>구독 혜택</h4><ul><li><img src="'+u+'" alt="">50,000원 상당의 인싸이트 심리검사 <b class="cpr">월 10건</b></li></ul></div><div><h4>추천 유형<img src="'+r+'" alt=""></h4><p> 스탠다드 플랜 기능 100% 포함 네이버 예약과 <br> 강력한 연동을 통한 더욱 간편한 상담센터 관리 <br> 기능은 물론, 대한민국 1등 검색엔진 네이버를 <br> 통해서, 더 많은 내담자를 만날 수 있습니다. </p></div></div><div class="standard_price"><h2>스탠다드</h2><div><div class="sub_tit"><span>상담사 등록은 무제한!</span></div><div class="price">센터 당 29,900원</div><p>(VAT 별도)</p></div><div><ul><li><img src="'+l+'" alt="">부가서비스 이용료 <br>      <em class="cpr" style="font-weight:400;">네이버 내담자 등록 기능 없음</em></li></ul></div><div><h4>플랜 기능</h4><ul><li><img src="'+u+'" alt="">인싸이트플러스 내담자 관리 시스템 </li><li><img src="'+u+'" alt="">문자 발송 서비스</li><li><img src="'+u+'" alt="">인싸이트 연동</li></ul></div><div><h4>구독 혜택</h4><ul><li><img src="'+u+'" alt="">25,000원 상당의 인싸이트 심리검사 <b class="cpr">월 5건</b></li></ul></div><div><h4>추천 유형<img src="'+d+'" alt=""></h4><p> 인싸이트플러스 내담자관리 <br> 프로그램의 정수!<br> 무제한으로 상담사와 내담자를 등록하며,<br> 언제, 어디서나, 실시간으로,<br> 상담센터 관리에만 집중하실 수 있습니다. </p></div></div></div><div class="pc_box2 price"><div class="standard_price"><h2>기본형</h2><div><div class="sub_tit"><span>상담사 등록은 무제한!</span></div><div class="price"> 센터 당 29,900원 <p>(VAT 별도)</p></div></div><div class="left-box"><h4>플랜 기능</h4><ul><li><i><img src="'+u+'" alt=""></i>인싸이트플러스 내담자 관리 시스템 </li><li><i><img src="'+u+'" alt=""></i>자동, 직접 문자 발송 서비스 </li><li><i><img src="'+u+'" alt=""></i>인싸이트 계정 연동 </li></ul></div><div><h4>구독 혜택</h4><ul><li><i><i><img src="'+u+'" alt=""></i></i><p><b class="cpr">매월 5건</b> 심리검사 무료 이용<br> 25,000원 상당의 인싸이트 심리검사 </p></li></ul></div><div><h4>추천 유형<img src="'+d+'" alt=""></h4><p> 언제, 어디서나, 실시간으로 상담 센터 관리에만<br> 집중하실 수 있습니다.<br><br> ▷ 센터 중심의 내담자 관리 프로그램<br> ▷ 상담사, 내담자 무제한 등록 관리 가능 </p></div></div><div class="premium_price"><h2>네이버 연동형</h2><div><div class="sub_tit"><span>상담사 등록은 무제한!</span></div><div class="price"> 센터 당 39,900원 <p>(VAT 별도)</p></div></div><div class="right-box"><h4>플랜 기능</h4><ul><li><i><img src="'+u+'" alt=""></i>인싸이트플러스 내담자 관리 시스템 </li><li><i><img src="'+u+'" alt=""></i>자동, 직접 문자 발송 서비스 </li><li><i><img src="'+u+'" alt=""></i>인싸이트 계정 연동 </li><li><i><img src="'+u+'" alt=""></i>네이버 데이터 연동(플레이스, 예약, 페이) </li><li><i><img src="'+u+'" alt=""></i>인플 AI 서비스(메시징, 네이버 지식iN 에디터) </li></ul></div><div><h4>구독 혜택</h4><ul><li><i><img src="'+u+'" alt=""></i><p><b class="cpr">월 10건</b>심리검사 무료 이용<br> 50,000원 상당의 인싸이트 심리검사 </p></li></ul></div><div><h4>추천 유형<img src="'+r+'" alt=""></h4><p> 네이버와 연동된 예약, 내담자 데이터로<br> 더 많은, 새로운 내담자를 만날 수 있습니다.<br><br> ▷ 인플 기본형 플랜 기능 100% 이용<br> ▷ 네이버 예약 연동을 통한 편리한 예약 관리<br> ▷ 네이버 지식iN 연동으로 무료 키워드 광고 효과 </p></div></div></div><a href="https://plus.inpsyt.me/login" target="_blank" class="bt"> 1개월 무료 시작하기 </a><div class="text_box"><div class="text"><p> * 부가서비스 <br>문자와 심리검사는 사용료 만큼 청구됩니다. SMS 20원, LMS 60원, 심리검사 별 가격 상이 (VAT 별도) </p></div></div></div></div><section class="container menu3"><div class="box3"><div class="text_box"><div class="tit">플랜별 상세 기능 비교</div><div class="table_box"><h4>인플 심리상담센터 운영 시스템</h4><table><tr><th></th><th>스탠다드</th><th>프리미엄</th></tr><tr><td> 내담자/상담사 <br> 등록 </td><td class="c222">무제한</td><td class="cpr">무제한</td></tr><tr><td>상담사 관리</td><td><img src="'+B+'" alt=""></td><td><img src="'+C+'" alt=""></td></tr><tr><td>다수 센터 관리</td><td><img src="'+B+'" alt=""></td><td><img src="'+C+'" alt=""></td></tr><tr><td>상담일지 관리</td><td><img src="'+B+'" alt=""></td><td><img src="'+C+'" alt=""></td></tr><tr><td>심리검사 발송</td><td><img src="'+B+'" alt=""></td><td><img src="'+C+'" alt=""></td></tr><tr><td>모바일 APP</td><td><img src="'+B+'" alt=""></td><td><img src="'+C+'" alt=""></td></tr><tr><td> 네이버 예약 <br> 연동 </td><td><img src="'+t+'" alt=""></td><td class="cpr"> 초기 5건<br> 무료 </td></tr></table></div><div class="table_box"><h4>네이버 홍보 마케팅</h4><table><tr><th></th><th>스탠다드</th><th>프리미엄</th></tr><tr><td> 인플-네이버 <br> 캘린더 자동 연동 </td><td><img src="'+t+'" alt=""></td><td><img src="'+C+'" alt=""></td></tr><tr><td> 인플-네이버 예약 <br> 내담자 자동등록 </td><td><img src="'+t+'" alt=""></td><td><img src="'+C+'" alt=""></td></tr><tr><td> 인플-네이버 예약 <br> 알림 </td><td><img src="'+t+'" alt=""></td><td><img src="'+C+'" alt=""></td></tr><tr><td> 인플-네이버 <br> 지식iN 연동 </td><td><img src="'+t+'" alt=""></td><td><img src="'+C+'" alt=""></td></tr><tr><td> 인플-네이버 FAQ <br> 연동형 에디터 </td><td><img src="'+t+'" alt=""></td><td><img src="'+C+'" alt=""></td></tr><tr><td> 네이버 스마트 <br> 플레이스 </td><td><img src="'+t+'" alt=""></td><td><img src="'+C+'" alt=""></td></tr><tr><td>네이버 PAY 연동</td><td><img src="'+t+'" alt=""></td><td><img src="'+C+'" alt=""></td></tr></table></div><div class="table_box"><h4>인플AI 서비스</h4><table><tr><th></th><th>스탠다드</th><th>프리미엄</th></tr><tr><td> 문자 템플릿 <br> 커스터마이징 </td><td><img src="'+B+'" alt=""></td><td><img src="'+C+'" alt=""></td></tr><tr><td> 문자 자동 발송<br> 설정 </td><td><img src="'+B+'" alt=""></td><td><img src="'+C+'" alt=""></td></tr><tr><td> 문자 발송 번호<br> 설정 </td><td><img src="'+B+'" alt=""></td><td><img src="'+C+'" alt=""></td></tr><tr><td> AI 메세징<br> (개발중) </td><td><img src="'+t+'" alt=""></td><td><img src="'+C+'" alt=""></td></tr><tr><td> 지식iN FAQ AI <br> 에디터 (개발중) </td><td><img src="'+t+'" alt=""></td><td><img src="'+C+'" alt=""></td></tr></table></div><div class="table_box"><h4>인싸이트 연동</h4><table><tr><th></th><th>스탠다드</th><th>프리미엄</th></tr><tr><td> 인싸이트<br> 심리검사 혜택 </td><td class="c222">월 5건</td><td class="cpr">월 10건</td></tr><tr><td> 인싸이트 내담자<br> 연동 </td><td><img src="'+B+'" alt=""></td><td><img src="'+C+'" alt=""></td></tr><tr><td> 인싸이트 심리<br> 검사 결과 연동 </td><td><img src="'+B+'" alt=""></td><td><img src="'+C+'" alt=""></td></tr></table></div></div></div></section><section class="menu3"><div class="box4" style="padding:50px 20px;"><div class="text_box container"><h3>유의사항</h3><ul><li> 무료 체험 기간 전 유료 서비스 (스탠다드 / 프리미엄) 서비스 전환 시에도 무료 체험 혜택을 동일하게 받으실 수 있으며, 무료 체험 기간 종료 후 선택하신 서비스 상품으로 자동 전환됩니다. </li><li> 인싸이트 플러스 서비스 가입 시 10G의 저장 공간이 제공되며, 10G 초과 시 별도 비용이 부과될 수 있습니다. </li><li>사전 예약 프로모션 신청자는 무료 체험 기간이 3개월 제공됩니다.</li><li> 무료 심리검사 혜택은, 2024년 3월까지는 인싸이트플러스 연동검사 모두 사용 가능하며, 그 이후엔 (STS 기질검사, GOLDEN 성격 유형검사, PAI 성격평가 질문지) 3종으로 한정됩니다. </li><li> ‘신규 내담자’는 (1) 우리 센터에 등록되지 않은 새로운 내담자가 네이버 예약을 통해 새롭게 예약을 진행하는 경우 혹은 (2) 우리 센터에서 방문 및 상담 후 1년이 초과된 내담자가 예약을 진행하는 경우입니다. </li><li>신규 내담자 비용 할인은 2024년 12월까지 진행됩니다.</li></ul></div></div></section><div class="section box10"><div class="text_box"><div class="tit"> 인싸이트플러스로 <br> 시작해보세요. </div><a href="https://plus.inpsyt.me/login" target="_blank" class="bt"> 지금 무료 시작하기 </a></div></div>',6);function k(s,i,D,A,e,F){return I}const M=c(P,[["render",k]]),Y=a({components:{AppFareGuide:Q,AppMobileFareGuide:M},computed:{...S(_,["isMobile"])}});function T(s,i,D,A,e,F){const U=E("AppFareGuide"),R=E("AppMobileFareGuide");return s.isMobile?(b(),n(R,{key:1})):(b(),n(U,{key:0}))}const L=c(Y,[["render",T]]);export{L as default};
