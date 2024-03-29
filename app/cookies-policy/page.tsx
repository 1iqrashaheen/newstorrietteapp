import { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = {
  title: 'Cookie Policy - Storiette App',
  description: 'Storiette App - Cookie Policy',
};
export default function CookiePolicy() {
  return (
    <main>
      <div className="container mx-auto p-5">
        <h1 className="mt-5 text-center text-lg font-bold text-black">Cookies Policy</h1>

        <p className="mt-5 text-lg text-black">
          Cookie Policy for
          <Link
            className="font-medium"
            href="https://www.thestorietteapp.com"
            target="_blank"
          >
            {' '}
            www.thestorietteapp.com
          </Link>
          as effective 21.06.2023, accessible from{' '}
          <Link
            className="font-medium"
            href="https://www.thestorietteapp.com"
            target="_blank"
          >
            www.thestorietteapp.com
          </Link>
        </p>
        <p className="mt-5 text-xl font-bold text-black">What are Cookies</p>
        <p className="mt-5 text-lg text-black">
          As is common practice with almost all professional websites, this site uses
          cookies, which are tiny files that are downloaded to your computer, to improve
          your experience. This page describes what information they gather, how we use
          it, and why we sometimes need to store these cookies. We will also share how you
          can prevent these cookies from being stored; however, this may downgrade or
          &lsquo;break&lsquo; certain elements of the site&apos;s functionality.
        </p>
        <p className="mt-5 text-xl font-bold text-black">How We Use Cookies</p>
        <p className="mt-5 text-lg text-black">
          We use cookies for a variety of reasons detailed below. Unfortunately, in most
          cases, there are no industry-standard options for disabling cookies without
          completely disabling the functionality and features they add to this site. It is
          recommended that you leave on all cookies if you are not sure whether you need
          them or not in case they are used to provide a service that you use.
        </p>
        <p className="mt-5 text-xl font-bold text-black">Disabling Cookies</p>
        <p className="mt-5 text-lg text-black">
          You can prevent the setting of cookies by adjusting the settings on your browser
          (see your browser Help for how to do this). Be aware that disabling cookies will
          affect the functionality of this and many other websites that you visit.
          Disabling cookies will usually result in also disabling certain functionality
          and features of this site. Therefore, it is recommended that you do not disable
          cookies.
        </p>
        <p className="mt-5 text-xl font-bold text-black">The Cookies We Set</p>
        <p className="mt-5 text-lg text-black">Site preferences cookies</p>
        <p className="mt-5 text-lg text-black">
          In order to provide you with a great experience on this site, we provide the
          functionality to set your preferences for how this site runs when you use it. In
          order to remember your preferences, we need to set cookies so that this
          information can be called whenever you interact with a page affected by your
          preferences.
        </p>
        <p className="mt-5 text-xl font-bold text-black">Third Party Cookies</p>
        <p className="mt-5 text-lg text-black">
          In some special cases, we also use cookies provided by trusted third parties.
          The following section details which third-party cookies you might encounter
          through this site.
        </p>
        <p className="mt-5 text-lg text-black">
          This site uses Google Analytics, which is one of the most widespread and trusted
          analytics solutions on the web, for helping us understand how you use the site
          and ways that we can improve your experience. These cookies may track things
          such as how long you spend on the site and the pages that you visit, so we can
          continue to produce engaging content.
        </p>
        <p className="mt-5 text-lg text-black">
          For more information on Google Analytics cookies, see the official Google
          Analytics page.
        </p>
        <p className="mt-5 text-lg text-black">
          Third-party analytics are used to track and measure usage of this site so that
          we can continue to produce engaging content. These cookies may track things such
          as how long you spend on the site or pages you visit, which helps us understand
          how we can improve the site for you.
        </p>
        <p className="mt-5 text-xl font-bold text-black">More Information</p>
        <p className="mt-5 text-lg text-black">
          Hopefully, that has clarified things for you, and as was previously mentioned if
          there is something that you aren&apos;t sure whether you need or not, it&apos;s
          usually safer to leave cookies enabled in case it does interact with one of the
          features you use on our site.
        </p>
        <p className="mt-5 text-lg text-black">
          However, if you are still looking for more information, then you can contact us
          through one of our preferred contact methods:
        </p>
        <ul className="mt-5 text-lg text-black">
          <li>Email: hello@thestorietteapp.com</li>
        </ul>
      </div>
    </main>
  );
}
