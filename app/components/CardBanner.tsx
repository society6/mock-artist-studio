export default function CardBanner() {
  return (
    <div className="card bg-base-100 w-96 shadow-xl bg-mainColorTheme">
      <div className="card-body">
        <div className="card-actions justify-end">
          <button className="btn btn-square btn-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <p>This is a test</p>
      </div>
    </div>
  );
}
