import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/manage-people", { replace: true });
  }, [navigate]);

  return null;
}
