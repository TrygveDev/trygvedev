"use client";

import { useEffect } from "react";

const PLAUSIBLE_DOMAIN = "trygve.dev";
const PLAUSIBLE_ENDPOINT = "https://plausible.renow.no/api/event";

/** Plausible uses browser APIs (e.g. location). Dynamic import ensures the module is never loaded during SSR. */
export function PlausibleTracker() {
	useEffect(() => {
		if (typeof window === "undefined") return;
		void import("@plausible-analytics/tracker").then(({ init }) => {
			init({
				domain: PLAUSIBLE_DOMAIN,
				endpoint: PLAUSIBLE_ENDPOINT,
				autoCapturePageviews: true,
				captureOnLocalhost: false,
			});
		});
	}, []);

	return null;
}
