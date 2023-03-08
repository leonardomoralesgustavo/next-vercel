import Link from 'next/link'
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { MainLayout } from '../components/layouts/MainLayout'


export default function HomePage() {
  const [video, setVideo] = useState<any>(null);
  const url2 = process.env.CLOUDFRONT;
  console.log(url2);
  useEffect(() => {
    setVideo(<ReactPlayer url={url2} controls={true} />);
  }, []);
  return (
    <MainLayout>
        <h1>Home Page</h1>
        
        <h1 className="title">
          {/* Ir a <a href="/about">About</a> */}
          Ir a <Link href="/about">About</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/index.js</code>
        </p>
        {video}
    </MainLayout>
  )
}