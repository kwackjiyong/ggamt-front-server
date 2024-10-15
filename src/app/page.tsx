import * as gtag from '@/util/gtag';

export default function Home() {
  gtag.pageview('/');
  return (
    <div>
      <div className='.baram-desc-box'>
        다음과 같은 이유로 GGAMT 서비스는 종료 예정입니다.

        1. CAPTCHA 적용으로 인한 유저목록 스크래핑 불가
        2. 매크로 현황 서비스 삭제 요구 공문 수신
        3. NexonOpenAPI-바람의나라 응답 파라미터 중 로그인 정보 삭제

        더이상 활용가능한 정보가 없어서 서비스 개발이 어렵게 되었습니다.

        감사합니다.
      </div>
    </div>
  );
}
