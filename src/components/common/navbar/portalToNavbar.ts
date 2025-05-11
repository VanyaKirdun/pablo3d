import type { ReactNode } from "react";
import type React from "react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export const PortalToNavbar: React.FC<{ children: ReactNode }> = ({
	children
}) => {
	const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

	useEffect(() => {
		setPortalRoot(document.getElementById("navbar-portal"));
	}, []);

	if (portalRoot) {
		return createPortal(children, portalRoot);
	}

	return null;
};
