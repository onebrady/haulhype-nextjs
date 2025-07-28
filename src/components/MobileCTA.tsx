import { Button } from "@/components/ui/button";

const MobileCTA = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background p-4 shadow-lg z-40 border-t border-border">
      <Button className="w-full bg-secondary-500 hover:bg-secondary-600 text-white font-medium py-3 px-6 rounded-lg transition duration-300 shadow-md">
        Request a Quote
      </Button>
    </div>
  );
};

export default MobileCTA;
