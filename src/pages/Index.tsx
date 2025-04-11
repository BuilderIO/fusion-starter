import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Banner } from "@/components/ui/banner";
import { ListTodo, Info } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="flex flex-col bg-gradient-to-br from-slate-100 to-slate-200">
      {showBanner && (
        <div className="w-full p-4">
          <Banner
            variant="info"
            icon={<Info className="h-5 w-5" />}
            title="Welcome to our application!"
            description="This is a simple banner component that can be used to display important information."
            action={
              <Button variant="outline" size="sm">
                Learn more
              </Button>
            }
            onDismiss={() => setShowBanner(false)}
          />
        </div>
      )}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center p-10 bg-white rounded-xl shadow-sm">
          <h1 className="text-5xl font-bold text-slate-800 mb-8">
            Hello World!!! I am updating the text
          </h1>
          <Link to="/todos">
            <Button className="mt-4" size="lg">
              <ListTodo className="mr-2 h-5 w-5" />
              Open Todo App
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
