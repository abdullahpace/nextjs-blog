import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';
export default function FirstPost() {
  return (
    <Layout>
      {/* POst meta data */}
      <Head>
        <title>This is post head</title>
      </Head>
      <Script
        src='https://connect.facebook.net/en_US/sdk.js'
        strategy='lazyOnload'
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <p>First Post</p>
      <Link href='/'>Hom</Link>
      <Image src='/images/profile2.jpg' height={144} width={144} />
    </Layout>
  );
}
