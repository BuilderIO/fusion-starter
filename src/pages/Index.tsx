import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
      <div className="text-center p-10 bg-white rounded-xl shadow-sm">
        <h1 className="text-5xl font-bold text-slate-800 mb-6">Hello World</h1>
        <Link to="/rodeo">
          <Button className="bg-amber-800 hover:bg-amber-900 text-white">
            Visit Wild West Rodeo
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
