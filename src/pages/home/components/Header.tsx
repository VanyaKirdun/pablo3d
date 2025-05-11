import { PortalToNavbar } from "@/components/common/navbar/portalToNavbar";
import { useNavigate } from "react-router";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <PortalToNavbar>
      BY
    </PortalToNavbar>
  );
};
