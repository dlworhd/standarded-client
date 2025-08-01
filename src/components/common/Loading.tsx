export default function Loading() {
    return (
        <div className="z-[9999] fixed flex items-center justify-center w-[100vw] h-[100vh] bg-[var(--background)]/50 inset-0">
            <svg
                width={15}
                height={15}
                fill="var(--foreground)"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g>
                    <circle cx="3" cy="12" r="2" />
                    <circle cx="21" cy="12" r="2" />
                    <circle cx="12" cy="21" r="2" />
                    <circle cx="12" cy="3" r="2" />
                    <circle cx="5.64" cy="5.64" r="2" />
                    <circle cx="18.36" cy="18.36" r="2" />
                    <circle cx="5.64" cy="18.36" r="2" />
                    <circle cx="18.36" cy="5.64" r="2" />
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        dur="1.5s"
                        values="0 12 12;360 12 12"
                        repeatCount="indefinite"
                    />
                </g>
            </svg>
        </div>
    );
}
