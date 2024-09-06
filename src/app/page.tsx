import Link from 'next/link';
import * as gtag from '@/util/gtag';

export default function Home() {
  gtag.pageview('/');
  return (
    <div>
      <Link href="/baram">
        <div className="btn-round imageButton">
          바람의나라 동시접속자수 확인하러 가기
        </div>
      </Link>
    </div>
  );
}
