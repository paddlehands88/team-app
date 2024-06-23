import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

type Props = {
  children: React.ReactNode;
};

const EventsLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col bg-blue-950">
      <Header />
      <main>
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  );
}
export default EventsLayout;