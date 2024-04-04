import Link from "next/link";

export default function CookiesModal({
  closeModal,
}: {
  closeModal: () => void;
}) {
  return (
    <div
      id="cookie-consent-dialog"
      className="bg-slate-800 bg-opacity-33 fixed inset-0 -top-20 bg-black bg-opacity-50"
    >
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
        <div className="w-96 justify-center items-center rounded-md bg-white px-10 py-10">
          <h1 className="mb-4 text-2xl font-bold text-black">Cookie Consent</h1>
          <p className="mb-4">
            This website uses cookies to help you have a superior and more
            admissible browsing experience on the website.{" "}
            <Link href="/cookies-policy" className="font-bold">
              Read More.
            </Link>
          </p>
          <div className="flex justify-between">
            <button
              id="cookie-accept-button"
              className="w-36 rounded-lg bg-gradient-to-t from-green-600 to-green-400 px-6 py-2 text-white mr-4"
              onClick={closeModal}
            >
              Accept
            </button>
            <button
              id="cookie-decline-button"
              className="w-36 rounded-lg border border-green-600 px-7 py-2 font-regular text-green-600"
              onClick={closeModal}
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <button
            id="cookie-accept-button"
            className="w-28 rounded-lg bg-gradient-to-t from-green-600 to-green-400 px-6 py-2 text-white"
            onClick={closeModal}
          >
            Accept
          </button>
          <button
            id="cookie-decline-button"
            className="text-md text-gradient ml-2 w-28 rounded-lg border border-green-600 px-7 py-2 font-regular text-green-600"
            onClick={closeModal}
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
} */
}
