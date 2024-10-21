import * as gtag from '@/util/gtag';
import Link from 'next/link';
export default function Home() {
  // gtag.pageview('/');
  return (
    <div>
      <div className='baram-desc-box' />
      <div className='main-menu-group'>
        <Link href='/start' className='main-menu-button'>시작하기</Link>
        <Link href='/job' className='main-menu-button'>직업</Link>
        <Link href='/map' className='main-menu-button'>사냥터</Link>
        <Link href='/skill' className='main-menu-button'>마법</Link>
        <Link href='/item' className='main-menu-button'>아이템</Link>
        <Link href='/cal' className='main-menu-button'>계산기</Link>
        <Link href='/info' className='main-menu-button'>바람상식</Link>
      </div>
      
    </div>
  );
}
