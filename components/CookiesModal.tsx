import Link from 'next/link';

export default function CookiesModal({ closeModal }: { closeModal: () => void }) {
  return (
    <div
      id="cookie-consent-dialog"
      className="bg-slate-800 bg-opacity-33 fixed inset-0 -top-20 bg-black bg-opacity-50"
    >
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
        <div className="w-96 items-center rounded-md bg-white px-10 py-10">
          <h1 className="mb-4 text-2xl font-bold text-black">Cookie Consent</h1>
          <p className="mb-4">
            This website uses cookies to help you have a superior and more admissible
            browsing experience on the website.{' '}
            <Link href="/cookies-policy">Read More.</Link>
          </p>
          <button
            id="cookie-accept-button"
            className="w-28 rounded-lg bg-gradient-to-r from-cyan-600 to-cyan-400 px-6 py-2 text-blue-100"
            onClick={closeModal}
          >
            Accept
          </button>
          <button
            id="cookie-decline-button"
            className="text-md text-gradient ml-2 w-28 rounded-lg border border-cyan-600 px-7 py-2 font-semibold text-cyan-300"
            onClick={closeModal}
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
