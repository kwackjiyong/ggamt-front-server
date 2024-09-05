
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Link href="/baram">
        <div className="btn-round">바람의나라 동시접속자수 확인하러 가기</div>
      </Link>
    </div>
  );
}
