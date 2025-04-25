import AuthFlowSection from "@/components/home/AuthFlowSection";
import DeveloperSection from "@/components/home/DeveloperSection";
import MainLinks from "@/components/home/MainLinks";
import ResourcesSection from "@/components/home/ResourcesSection";
import StackSection from "@/components/home/StackSection";
import WhyStackSection from "@/components/home/WhyStackSection";

export default function Home() {
  return (
    <main className="flex flex-col gap-[32px] items-center sm:items-start max-w-2xl w-full mx-auto p-8 pb-20 flex-1">
      <StackSection />
      <WhyStackSection />
      <AuthFlowSection />
      <ResourcesSection />
      <DeveloperSection />
      <MainLinks />
    </main>
  );
}
